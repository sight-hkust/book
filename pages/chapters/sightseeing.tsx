import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout 
      prevPageHref="/chapters/dr-level-up"
      nextPageHref="/chapters/foresee"
      className="w-full">
      <Head>
        <title>SightSeeing</title>
      </Head>
      <section className="h-screen bg-[#375ba7] text-white text-2xl py-24">
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-4/5 mx-auto">An electronic eye health record system for eye health outreach in Shantou, China.</p>
        <p className="w-4/5 mx-auto mt-16">The Joint Shantou International Eye Center conducts eye health outreach in the prefecture and its surrounding districts, be it at community health centers or boarding schools. Records of these outreach efforts are paper-based, meaning manual entry to the electronic database would be required.</p>
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
      </section>
      <section className="bg-[#fffef7] text-[#375ba7] text-2xl flex flex-col items-center py-24">
        <h1 className="font-bold text-2xl mb-16">Description</h1>
        <article className="text-xl w-4/5 mx-auto flex flex-col space-y-10">
          <p>This collaboration is built upon the partnership with CUHK Medical School. An exploratory trip was held in June 2018 and discovered their eye health outreach services, be it in community health clinics, security force schools or even PLAN garrisons. A student team was then formed in the fall semester and they created
an app called SightSeeing. The team departed for Shantou on 9th June, 2019 and after several rounds of testing, briefed the counterparts on the specifics of the app on June 12th. The trip drew to a close and the team returned to Hong Kong on 16th June.</p>
        </article>
      </section>
    </Layout>
  )
}