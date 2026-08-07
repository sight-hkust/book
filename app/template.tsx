"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { pageDirection } from "../components/nav-direction";

// Render the very first paint at rest so the static-export HTML is visible
// without JavaScript (and for SEO). Real navigations re-mount this template and
// play the page-turn. The flag is flipped in an effect, so it stays false during
// SSR and the initial hydration render (no flash, no hydration mismatch).
let hasNavigated = false;

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const turn = hasNavigated;
  useEffect(() => {
    hasNavigated = true;
  }, []);

  const forward = pageDirection() >= 0;

  return (
    <div className="min-h-screen bg-[#fffef7]" style={{ perspective: 1800 }}>
      <motion.div
        initial={turn ? { rotateY: forward ? 90 : -90, opacity: 0 } : false}
        animate={{
          rotateY: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        }}
        style={{
          transformOrigin: forward ? "left center" : "right center",
          position: "relative",
        }}
      >
        {children}
        {turn && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
            className="pointer-events-none fixed inset-0 z-50"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.30) 0%, rgba(255,255,255,0.20) 50%, rgba(0,0,0,0.30) 100%)",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
