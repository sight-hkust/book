import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {
  const router = useRouter();
  return (
    <Layout 
      prevPageHref="/chapters/diabetic-retinopathy-detection"
      nextPageHref="/chapters/sip-n-puff"
      className="w-full">
      <Head>
        <title>Ms. Moringa</title>
      </Head>
      <section className="h-screen bg-[#6067ae] text-white text-lg sm:text-2xl py-16 sm:py-24">
      <Image className="w-2/3 mx-auto" src={`/titles/${router.pathname.replace('/chapters/', '')}.png`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">First, it all started as a water purification project in Changshun County, Guizhou, China. Now it is a social enterprise empowering local female artists to preserve their local culture.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : At first, the villagers in the mountainous regions of Changshun County were afflicted by flouride contaminated water, but then the villagers were moved out mandatorily of the affected area. Changshun County is also home to traditional batik art of the Buyi people.</p>
        <div className="flex justify-center my-16">Awards</div>
        <dl className="flex flex-col mx-auto w-5/6 sm:w-4/5">
          <dt className="font-bold">Second Prize</dt>
          <dl className="text-base sm:text-xl">(“Challenge Cup” National Competition – Hong Kong Regional Final)</dl>
        </dl>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.replace('/chapters/', '')}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#6067ae] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-bold text-2xl mb-16">Description</h1>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p>Working in China always came with its own unique set of challenges, where circumstances change at the blink of an eye. When students first joined the project, they were greeted with the problem of flouride contaminated water. Villagers living in parts of Changshun county were suffering from fluorosis and other effects of fluoride exposure.</p>
          <p>The students countered this problem by introducing the Moringa oleifera plant, which seeds have the power of removing fluoride in the water by forming complexes. Young shoots of the plant were brought and planted, and the students waited eargerly for their initiative to bear fruit. Soon after, the affected villagers were abruptly re-settled into a newly developed area where the water source is free from fluoride foulness.</p>
          <p>The project nevertheless soldiered on, and upon discovering the cultural heritage of the area and how it could empower the locals there, the project focus pivoted towards preserving the local Batik art and leveraging that art to empower the local craftswomen.</p>
        </article>
      </section>
    </Layout>
  )
}