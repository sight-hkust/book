"use client";

import { useEffect, useState } from "react";
import { pageDirection } from "../components/nav-direction";
import PageCurl from "../components/PageCurl";

// Next.js re-mounts `template.tsx` on every navigation. The first paint is at
// rest (no curl) so the static-export HTML is visible without JavaScript; only
// real navigations play the canvas page-curl.
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

  return (
    <>
      {children}
      {mounted && navigate && curling && (
        <PageCurl forward={forward} onDone={() => setCurling(false)} />
      )}
    </>
  );
}
