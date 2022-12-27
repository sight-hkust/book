import React, { ReactNode } from "react";
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode
  className: string
  nextPageHref: string
  prevPageHref: string
}

export default function Layout({ children, className, nextPageHref, prevPageHref }: LayoutProps) {
  return (
    <div className={className}>
      {children}
      <div className='fixed bottom-12 w-full flex justify-center items-end pointer-events-auto'>
        <div className='bg-white shadow-xl border-gray-100 border-2 rounded-full sm:w-1/5 w-[200px] h-12 flex justify-between items-center px-4'>
          <Link href={prevPageHref}>
            <img className='h-8' src="/prev.svg" alt="" />
          </Link>
          <Link href='/chapters'>
            <img className='h-8' src="/chapters.svg" alt="" />
          </Link>
          <Link href={nextPageHref}>
            <img className='h-8' src="/next.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}