import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout
      prevPageHref="/chapters/eyessistant"
      nextPageHref="/chapters/collabox"
      className="w-full">
      <Head>
        <title>Pace It</title>
      </Head>
      <section className="h-screen bg-[#1f2549] text-white text-2xl py-24">
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-4/5 mx-auto">A smart watch to improve road safety in rural Siem Reap, Cambodia</p>
        <p className="w-4/5 mx-auto mt-16">The problem : Bicycles and motorbikes are common methods of transportation, yet safety practices such as wearing helmets is not widespread, leading to serious accidents and injuries.</p>
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
      </section>
      <section className="h-screen bg-[#fffef7] text-[#1f2549] text-2xl flex flex-col items-center py-24">
        <h1 className="font-bold text-2xl mb-16">Description</h1>
        <article className="text-xl w-4/5 mx-auto flex flex-col space-y-10">
          <p>Upon the completion of the hand hygiene project at HVTO, the students and Teaching Team took a deeper dive into the area in rural Siem Reap. On the meandering dirt roads that criss cross houses on stilts and open fields, the main modes of transportation are bikes and motorbikes, yet helmets were a rare occurrence amid all of this two-wheeling traffic. This led to the creation of a low-cost smartwatch project that reminded wearers to put their helmets on before riding off into the sunset. The hands-on nature of the project also meant an accompanying science and technology curriculum.</p>
        </article>
      </section>
    </Layout>
  )
}