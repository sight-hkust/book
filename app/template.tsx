"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { pageDirection } from "../components/nav-direction";

// A simulated book page-curl. The new page renders underneath; a separate
// "paper sheet" overlay is portaled to <body> (so it stays viewport-fixed and
// outside any transformed ancestor), hinges on the spine, and peels over in 3D.
// Its front face is shaded toward the lifting edge, a darker back face is
// revealed as it folds past 90°, and a soft shadow grounds the curl.
//
// The first paint is at rest (no overlay) so the static-export HTML is visible
// without JavaScript. Only real navigations play the curl.
let hasNavigated = false;

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = hasNavigated;
  const [mounted, setMounted] = useState(false);
  const [curling, setCurling] = useState(navigate);
  useEffect(() => {
    hasNavigated = true;
    setMounted(true);
  }, []);

  const forward = pageDirection() >= 0;
  const hinge = forward ? "right center" : "left center";

  const curl =
    mounted && navigate && curling ? (
      <motion.div
        key="curl"
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: hinge,
          transformPerspective: 2200,
          zIndex: 40,
        }}
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: forward ? -155 : 155,
          transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
        }}
        onAnimationComplete={() => setCurling(false)}
      >
        {/* front face: paper, shaded toward the lifting (free) edge */}
        <div
          className="absolute inset-0"
          style={{
            background: forward
              ? "linear-gradient(90deg, #e2dbc0 0%, #fffef7 26%, #fffef7 100%)"
              : "linear-gradient(270deg, #e2dbc0 0%, #fffef7 26%, #fffef7 100%)",
            boxShadow: forward
              ? "-16px 0 38px rgba(0,0,0,0.18)"
              : "16px 0 38px rgba(0,0,0,0.18)",
            backfaceVisibility: "hidden",
          }}
        />
        {/* back face: slightly darker paper, seen as the page folds over */}
        <div
          className="absolute inset-0"
          style={{
            background: forward
              ? "linear-gradient(90deg, #e8e1c5 0%, #d6cdb0 100%)"
              : "linear-gradient(270deg, #e8e1c5 0%, #d6cdb0 100%)",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    ) : null;

  return (
    <>
      {children}
      {mounted && createPortal(curl, document.body)}
    </>
  );
}
