import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout
      prevPageHref="/chapters/softkeyboard"
      nextPageHref="/chapters/hand-hygiene-and-soap-production"
      className="w-full">
      <Head>
        <title>Lavatory Management System</title>
      </Head>
      <section className="h-screen bg-[#e49059] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">An RFID system that tracks the usage of toilets at the Caritas Lok Kan School.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : Students at the Lok Kan School often suffer from conditions that affect their toileting as well as their ability to communicate that need. Therefore teachers there need to track their toileting data, such as timing, success, condition, etc.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Jacky</h1>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2020</h2>
        <h3 className="text-sm sm:text-lg">Lavatory Management System</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">My experience at SIGHT started with one of my friends. Saying SIGHT is both challenging and rewarding, and he gave special exaggeration towards the word “challenging”.</p>
          <p>Going through my journey of SIGHT, I finally understood him. In SIGHT, you not only need to manage your work but also all the planning including meetings with partners and time planning. Just the part where we figure out the topic of our project had already gotten us headaches, back then all the plan seemed flawed. We struggled
to find one viable solution for an SEN school. Looking through various technologies and solution, still, there wasn’t any perfect match for our partner’s needs. To track students’ living routine, and their health status, they wanted something more convenient and fast, instead of just doing it all manually. Either the setup is too expensive or the technology is not robust enough, seeing that the deadline of the presentation is approaching tight, we were truly stressed. In the end, with the help of our mentors, we finally figured out how to integrate various technologies for our use.</p>
          <p>One particular hurdle we had is at the SEN school when we were going to give the first demonstration. After setting up the equipment, and we were going to boot up the system. Suddenly, the software just could not start running. Browsing through all the files while the staff and mentors stared at us three, was so stressful. Ten minutes passed, we still haven’t solved the problem. Still, our mentors had waited for us patiently and gave us ideas and support even if we were in a panic. Then with our collective efforts, we finally spotted a bug in the software, and successfully finished the demonstration.</p>
          <p>Apart from our hurdle during the demonstration, my biggest hurdle during my time in SIGHT was giving presentations. Some may say, you must have done hundreds of presentations before university, how come you still can’t do it? Giving presentations has always been my biggest weakness, standing in front of a group of people already gives me goose bumps, let alone deliver my message clearly and neatly. But then in SIGHT, there were tons of opportunities of giving lengthy presentations, first time introducing our solution, literature reviews, and presenting our current progress. The literature review was the first time I have been given the chance to present for more than half an hour, and when we were preparing, we were still afraid that the contents we have prepared are not sufficient for the literature review. On the last day, we were finally able to select promising technologies for our solution. Although we have prepared thoroughly but missed the fact that everyone has different specialties, even Professors. At this point, I knew my problem, I was too focused on my specialties, instead of collaborating with people.</p>
          <p>In SIGHT, not only you can pick up various hard skills like coding and modeling, but most importantly all the soft skills. If not that I have joined SIGHT, I would never get a taste of what it is like to give a thorough and lengthy presentation, I would never have a chance to take charge of our solution and build things from scratch. It surely has benefited me a lot and changed my way to look at how things operate, before that I would think that only engineers do the job, others are just compensatory, only engineering work is what it counts. But then, without all other parts of the company or organization, how could that engineering go on the market, how to make people understand that piece of engineering.</p>
        </article>
      </section>
    </Layout>
  )
}