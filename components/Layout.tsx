import React, { ReactNode } from "react";
import Link from 'next/link';
import Image from "next/image";
import Progress from "./Progress";

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
      <Progress/>
      <div className='fixed bottom-12 w-full flex justify-center items-end pointer-events-auto'>
        <div className='bg-white shadow-xl border-gray-100 border-2 rounded-full sm:w-1/5 w-[200px] h-12 flex justify-between items-center px-4'>
          <Link href={prevPageHref}>
            <Image className='h-8' src="/prev.svg" alt="Previous Page" height={64} width={64}/>
          </Link>
          <Link href='/chapters'>
            <Image className='h-8' src="/chapters.svg" alt="" height={64} width={64}/>
          </Link>
          <Link href={nextPageHref}>
            <Image className='h-8' src="/next.svg" alt="Next Page" height={64} width={64}/>
          </Link>
        </div>
      </div>
    </div>
  )
}