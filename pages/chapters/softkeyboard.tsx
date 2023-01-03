import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import AuthorName from "../../components/AuthorName";

export default function Chapter() {
  const router = useRouter()
  return (
    <Layout
      prevPageHref="/chapters/reducing-digital-dependency-among-children"
      nextPageHref="/chapters/lavatory-management-system"
      className="w-full">
      <Head>
        <title>SoftKeyboard</title>
      </Head>
      <section className="bg-[#647ebe] text-white text-lg sm:text-2xl pt-16 sm:pt-24">
      <h1 className="text-[#647ebe] sm:text-8xl text-4xl font-black mx-auto text-center" style={{WebkitTextStroke: '2px #fff'}}>Softkeyboard</h1>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">A trackpad keyboard for students with muscular dystrophy to enter mathematical & scientific equations.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Hong Kong Red Cross John F. Kennedy Centre is a special school in Sandy Bay, Hong Kong. Some of their students suffer from muscular conditions such as dystrophy, yet they still need to attend classes and public examinations. They did so by having an oral scribe, which was often cumbersome.</p>
        <div className="flex justify-center my-8 sm:my-16">Awards</div>
        <dl className="flex flex-col mx-auto w-5/6 sm:w-4/5">
          <dt className="font-bold">Merit</dt>
          <dl className="text-base sm:text-xl">(Samsung Solve for Tomorrow Competition)</dl>
        </dl>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
        <Image className="w-screen pt-16 sm:pt-24" src={`/covers/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center pt-16 sm:pt-24">
        <AuthorName name="Elizabeth"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2016</h2>
        <h3 className="text-sm sm:text-lg">Softkeyboard</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">SIGHT is an eye-opening journey for university students to have hands-on experience in solving real-world issues. While working as a member of the joystick keyboard team, I was given the opportunity to meet and get to understand the daily struggles of MPS patients. The idea of a joystick keyboard was thus generated with the hope of improving their efficiency in day-to-day computer usage.</p>
          <p>Through the implementation of the design thinking process, my team and I went through iterations of design, prototype, and testing. With the support of the SIGHT teaching team and advisors, we received constructive feedback that guides us
into a better-defined concept. During the time, I was encouraged to self-learn new concepts and techniques that could contribute to the product. I have also learned to observe and transform vague concepts/ opinions into feasible solutions to satisfy users’ needs.</p>
          <p>SIGHT is such a unique experience in UST, which allows students from different disciplines and perspectives to interact and come up with ideas to tackle the related problems. Though it is not always an easy task, it is crucial in producing a comprehensive product in the end.</p>
        </article>
        <Image className="mx-auto w-1/3 sm:w-1/5 mt-16 sm:mt-24" src="/artworks/elizabeth.png" alt="" width={1080} height={744}/>
      </section>
    </Layout>
  )
}