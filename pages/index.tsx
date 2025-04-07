import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full bg-midnight h-screen' style={{backgroundSize: '80px 80px', backgroundImage: 'linear-gradient(to right, grey 1px, transparent 1px),linear-gradient(to bottom, grey 1px, transparent 1px)'}}>
      <Head>
        <title>SIGHT BOOK</title>
      </Head>
      <Link href="/cover">
        <div className='w-full flex flex-col items-center justify-center py-10' style={{backgroundSize: '16px 16px', backgroundImage: 'linear-gradient(to right, rgb(240, 240, 240, 0.2) 1px, transparent 1px),linear-gradient(to bottom, rgb(240, 240, 240, 0.2) 1px, transparent 1px)'}}>
          <div></div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white text-6xl sm:text-8xl font-bold'>SIGHT BOOK</h1>
            <h2 className='text-white text-4xl sm:text-5xl uppercase'>Our Journey</h2>
            <Image className='w-[80%] max-h-[240px] md:max-h-[380px] lg:max-h-[480px]' src="/globe-in-palms.svg" width={200} height={180} alt="" />
          </div>
          <div className='w-1/4 h-[240px] rounded-xl shadow-md flex flex-col items-center text-xs text-white justify-center text-center'>
            <span>Brought to you by</span>
            <Image className="h-16 w-auto my-2" src="/media/sight_logo_white.png" alt="SIGHT" width={521} height={311}/><br/>
            and<br/>
            <div className='flex flex-col items-center justify-center space-y-2 mt-4'>
              <Image className="h-16 w-auto" src="/media/sol.png" alt="SIGHT" width={246} height={246}/>
              <span>Seal of Love Charitable Foundation </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
