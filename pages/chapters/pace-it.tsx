import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {
  const router = useRouter();
  return (
    <Layout
      prevPageHref="/chapters/eyessistant"
      nextPageHref="/chapters/collabox"
      className="w-full">
      <Head>
        <title>Pace It</title>
      </Head>
      <section className="h-screen bg-[#1f2549] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <Image className="w-3/4 mx-auto" src={`/titles/${router.pathname.split('/').slice(-1)}.svg`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">A smart watch to improve road safety in rural Siem Reap, Cambodia</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Bicycles and motorbikes are common methods of transportation, yet safety practices such as wearing helmets is not widespread, leading to serious accidents and injuries.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#1f2549] text-lg sm:text-2xl flex flex-col items-center">
        <div className="w-full flex mb-16 sm:mb-24">
          <Image className="w-1/2" src="/media/pace-it-1.jpg" alt="" width={1364} height={592}/>
          <Image className="w-1/2" src="/media/pace-it-2.jpg" alt="" width={1364} height={592}/>
        </div>
        <h1 className="font-bold text-lg sm:text-2xl mb-8 sm:mb-16">Description</h1>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p>Upon the completion of the hand hygiene project at HVTO, the students and Teaching Team took a deeper dive into the area in rural Siem Reap. On the meandering dirt roads that criss cross houses on stilts and open fields, the main modes of transportation are bikes and motorbikes, yet helmets were a rare occurrence amid all of this two-wheeling traffic. This led to the creation of a low-cost smartwatch project that reminded wearers to put their helmets on before riding off into the sunset. The hands-on nature of the project also meant an accompanying science and technology curriculum.</p>
        </article>
        <Image className="w-screen mt-16 sm:mt-24" src="/media/pace-it-3.jpg" alt="" width={1498} height={778}/>
      </section>
    </Layout>
  )
}