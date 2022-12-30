import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {
  const router = useRouter()
  return (
    <Layout
      prevPageHref="/chapters/lavatory-management-system"
      nextPageHref="/chapters/eyessistant"
      className="w-full">
      <Head>
        <title>Hand Hygiene and Soap Production</title>
      </Head>
      <section className="bg-[#ebc01c] text-white text-lg sm:text-2xl py-16 sm:py-24">
      <Image className="w-3/4 sm:w-2/3 mx-auto" src={`/titles/${router.pathname.replace('/chapters/', '')}.png`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">An education platform to teach Cambodian schoolchildren the importance of handwashing, as well as a social enterprise model in which local women manufacture scented soaps for tourists to fund soap for school kids.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Primary healthcare in rural Siem Reap is priced out of reach for the villagers. Yet common hygiene practices such has handwashing with soap is not yet pervasive.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.replace('/chapters/', '')}.png`} width={430} height={150} alt=""/>
        </div>
        <Image className="mt-16 sm:mt-24 sm:w-1/5 w-2/5 mx-auto" src={`/covers/${router.pathname.replace('/chapters/', '')}.png`} width={1460} height={968} alt=""/>
      </section>
      <section className="bg-[#ebc01c] text-white text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-bold text-lg sm:text-2xl mb-8 sm:mb-16">Description</h1>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p>This was our first collaboration with a partner in Siem Reap, home to the UNESCO World Heritage Site Angkor Wat. In true co-learning spirit of SIGHT, it started with
a scouting trip involving not just the Teaching Team, but also students from the MedEasy project. Away from the markets, bars and other tourist attractions in the
city of Siem Reap, we arrived at the campus of the Homestay Volunteer Teachers Organization, which provides after school programs for the children in the area. The founder, Mr. Sim Piseth, a tour guide by trade and a polyglot, also maintains deep ties with the local community there. Upon talking with the villagers there, the team learnt that while the government does provide outpatient services, the price is so high that most are priced out of them. Common ailments were usually due to hygiene practices, such as diarrhea. As the saying goes, “prevention is better than the cure”, the students decided to come up with a way to improve the hygiene practices and therefore prevent illnesses and trips to the expensive clinic.</p>
          <p>Ultimately, the team created a school program that teaches kids at the center about the importance of hand washing and other hygiene practices. The students also engaged with the local female villagers, teaching them to make scented soap to sell to tourists. The revenue generated can then fund the purchase of soap and other sanitation necessities for the kids at the school.</p>
        </article>
      </section>
    </Layout>
  )
}