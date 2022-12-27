import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-screen bg-midnight' style={{backgroundSize: '80px 80px', backgroundImage: 'linear-gradient(to right, grey 1px, transparent 1px),linear-gradient(to bottom, grey 1px, transparent 1px)'}}>
      <Head>
        <title>SIGHT BOOK</title>
      </Head>
      <Link href="/chapters">
        <div className='w-full h-screen flex flex-col items-center justify-center' style={{backgroundSize: '16px 16px', backgroundImage: 'linear-gradient(to right, rgb(240, 240, 240, 0.2) 1px, transparent 1px),linear-gradient(to bottom, rgb(240, 240, 240, 0.2) 1px, transparent 1px)'}}>
          <h1 className='text-white text-6xl sm:text-8xl font-bold'>SIGHT BOOK</h1>
          <h2 className='text-white text-4xl sm:text-5xl uppercase'>Our Journey</h2>
          <img className='w-[80%] max-h-[640px]' src="/globe-in-palms.svg" alt="" />
        </div>
      </Link>
    </div>
  )
}
