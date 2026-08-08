"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Canvas page-curl. A paper sheet rolls across the viewport revealing the new
// page beneath: flat paper retreats on one side, a shaded roll + darker back
// flap (the curl) sweeps over, a crease highlight marks the tangent, and a soft
// shadow is cast onto the freshly revealed page. No DOM capture, so it is
// reliable; the curvature is faked with cylindrical-gradient shading.
//
// `forward` picks the turn direction (mirrored horizontally for back).

const DURATION = 750;
const PAPER = "#fffef7";
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function PageCurl({
  forward,
  onDone,
}: {
  forward: boolean;
  onDone: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const r = Math.max(48, Math.min(W, H) * 0.14);
    const curlW = 2 * r;

    const render = (p: number) => {
      ctx.save();
      ctx.clearRect(0, 0, W, H);
      if (!forward) {
        ctx.translate(W, 0);
        ctx.scale(-1, 1);
      }
      // Leading tangent line; sweeps from the right edge off the left edge.
      const foldX = W - p * (W + curlW);

      // Flat old paper still lying on the left.
      if (foldX > 0) {
        const flat = ctx.createLinearGradient(0, 0, foldX, 0);
        flat.addColorStop(0, PAPER);
        flat.addColorStop(1, "#f3eed9");
        ctx.fillStyle = flat;
        ctx.fillRect(0, 0, foldX, H);
      }

      // Cast shadow on the newly revealed page.
      const shadowX = foldX + curlW;
      const shadow = ctx.createLinearGradient(shadowX, 0, shadowX + r * 1.8, 0);
      shadow.addColorStop(0, "rgba(60,50,30,0.28)");
      shadow.addColorStop(1, "rgba(60,50,30,0)");
      ctx.fillStyle = shadow;
      ctx.fillRect(shadowX, 0, r * 1.8, H);

      // The curl: shaded front roll (foldX..foldX+r) + darker back flap
      // (foldX+r..foldX+2r). Gradient peaks near the tangent to read as a
      // lit cylinder, dims over the top, then darkens for the page back.
      const curl = ctx.createLinearGradient(foldX, 0, foldX + curlW, 0);
      curl.addColorStop(0.0, "#fffef7");
      curl.addColorStop(0.16, "#ffffff");
      curl.addColorStop(0.5, "#d7cdac");
      curl.addColorStop(0.52, "#c9bd96");
      curl.addColorStop(1.0, "#e3dbc1");
      ctx.fillStyle = curl;
      ctx.fillRect(foldX, 0, curlW, H);

      // Crease highlight at the tangent.
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fillRect(foldX, 0, 1.5, H);

      ctx.restore();
    };

    let raf = 0;
    let start = 0;
    const frame = (now: number) => {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / DURATION);
      render(ease(p));
      if (p < 1) raf = requestAnimationFrame(frame);
      else onDone();
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [forward, onDone]);

  return createPortal(
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 40 }}
    />,
    document.body,
  );
}
