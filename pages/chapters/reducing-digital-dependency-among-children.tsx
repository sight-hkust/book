import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {
  const router = useRouter()
  return (
    <Layout
      prevPageHref="/chapters/foresee"
      nextPageHref="/chapters/softkeyboard"
      className="w-full">
      <Head>
        <title>Reducing Digital Dependency Among Children</title>
      </Head>
      <section className="h-screen bg-[#893136] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <h1 className="w-5/6 sm:w-4/5 text-left text-white sm:text-8xl text-4xl font-black mx-auto">Reducing digital<br/>dependency<br/>among children</h1>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">Innovations to faciliate healthy screentime usage among non-adults.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Our increasing digital footprint has left us more vulnerable to addiction the content of our screens, which could then lead to various mental health disorders.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#893136] text-lg sm:text-2xl flex flex-col items-center">
        <Image className="w-screen mb-16 sm:mb-24" src="/media/reducing-digital-dependency-among-children-1.jpg" alt="" width={1498} height={776}/>
        <h1 className="font-bold text-lg sm:text-2xl mb-8 sm:mb-16">Description</h1>
        <article className="text-lg sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p>As the first foray into Common Core teaching in HKUST, we are most grateful to do so with Dr. Carrie Ling. Throughout the course, students came up with various ways to entice kids away from screens, from crying toddlers to sulking teenagers. Some highlights include computer or phone games you play by not playing them, teddy bears to act as intermediary chaperones of screen time to smart safes for smartphones.</p>
        </article>
        <Image className="w-screen mt-16 sm:mt-24" src="/media/reducing-digital-dependency-among-children-2.jpg" alt="" width={1498} height={778}/>
      </section>
    </Layout>
  )
}