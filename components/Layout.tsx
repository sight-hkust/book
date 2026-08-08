"use client";
import React, { ReactNode, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import Progress from "./Progress";
import { setPageDirection } from "./nav-direction";

interface LayoutProps {
  children: ReactNode;
  className: string;
  nextPageHref: string;
  prevPageHref: string;
  disableProgress?: boolean;
}

export default function Layout({
  children,
  className,
  nextPageHref,
  prevPageHref,
  disableProgress = false,
}: LayoutProps) {
  // Client-only flag so the portal (which needs document.body) never runs
  // during SSR; useSyncExternalStore avoids setState-in-effect.
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  // Fixed chrome is portaled to <body> so it is never trapped inside the 3D
  // page-turn wrapper: a transformed/perspective ancestor would otherwise turn
  // `position: fixed` into positioning relative to the page box.
  const chrome = (
    <>
      <Progress hide={disableProgress} />
      <nav className="fixed bottom-12 z-[100] w-full flex justify-center items-end pointer-events-auto">
        <div className="bg-white shadow-xl border-gray-100 border-2 rounded-full sm:w-1/5 w-[200px] h-12 flex justify-between items-center px-4">
          <Link href={prevPageHref} onClick={() => setPageDirection(-1)} aria-label="Previous page">
            <ExportedImage className="h-8" src="/prev.svg" alt="Previous Page" height={64} width={64} />
          </Link>
          <Link href="/chapters" onClick={() => setPageDirection(1)} aria-label="Chapters index">
            <ExportedImage className="h-8" src="/chapters.svg" alt="" height={64} width={64} />
          </Link>
          <Link href={nextPageHref} onClick={() => setPageDirection(1)} aria-label="Next page">
            <ExportedImage className="h-8" src="/next.svg" alt="Next Page" height={64} width={64} />
          </Link>
        </div>
      </nav>
    </>
  );

  return (
    <div className={className}>
      {children}
      {mounted && createPortal(chrome, document.body)}
    </div>
  );
}
