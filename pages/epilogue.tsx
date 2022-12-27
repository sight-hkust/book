import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Epilogue() {
  return (
    <Layout 
      prevPageHref='/behind-the-scene'
      nextPageHref='/attributions'
      className='w-full bg-[#fffef7] text-[#142a44]'>
      <Head>
        <title>Epilogue</title>
      </Head>
      <section className='h-screen flex items-center px-16'>
        <div className='flex items-center'>
          <span className='w-0.5 h-24 bg-[#142a44] mr-4'></span>
          <h1 className='text-6xl'>Epilogue</h1>
        </div>
      </section>
      <section className='h-screen px-16'>
        <article className="w-4/5 mx-auto text-xl flex flex-col space-y-8">
          <p className='first-letter:text-4xl'>
            As the book comes to an end, the task of the epilogue falls upon my perhaps-not-too-ready shoulders.
          </p>
          <p>
          To start off, I am most grateful for Prof. Chau’s trust, providing infinite freedom during the creative process. And the production of the book came about smoothly with the efforts of the Teaching Team and SIGHT Leaders. Thanks also go out to the extended SIGHT family of past members who contributed to the book, as well as advisors, partners and donors for creating each unforgettable moment.
          </p>
          <p>
          Honestly, when I first learned of the task of creating a memoir for SIGHT, I was at a loss as to where to start. With no prior design and publishing experience, all I could do was tough it out and take it head on. But on second thought, wasn’t this something that every SIGHT student had to go through? So in the end, it wasn’t just the students who were jumping out of their comfort zones, but each and every one of us as well.
          </p>
          <p>
          Compared to my role in the Teaching Team, I feel more comfortable slotting into the role of a SIGHT student. My time in SIGHT is not a long one, in fact, it is the shortest, but I have had my many “firsts” here: my first foray into the education field, serving as a TA, holding my first workshop, first time camping and even entering the HKUST campus for the first time. But without the help of my fellow teammates, these “firsts” would have never been successful, and neither would this memoir. They are the most capable and devoted teammates that I have met.
          </p>
          <p>
          When it comes to students, SIGHT emphasizes on their creativity and teams’ ability
to collaborate besides just academic performance. You can always see the boundless possibilities lurking in our students. To be at SIGHT means I am always on the journey of discovery, be it with the Teaching Team or the students.
          </p>
          <p>
          “Do not limit yourself”, this is my biggest takeaway after joining this big family. To learn is to try, try and to try again. A moment’s setback is just setting you up for your future comeback.
          </p>
          <p>
          The voyage of SIGHT has just started, and we look forward to wherever it takes us, along with all the surprises along the way.
          </p>
        </article>
        <section className="w-4/5 flex flex-col items-end my-16 mx-auto">
          <h2 className="font-bold text-4xl mb-4">Kahlen</h2>
          <span className="text-xl font-medium">SIGHT Teaching Team - Project Assistant</span>
        </section>
      </section>
    </Layout>
  )
}