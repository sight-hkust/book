import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout 
      prevPageHref="/chapters/moringa"
      nextPageHref="/chapters/dr-level-up"
      className="w-full">
      <Head>
        <title>Sip-n-Puff</title>
      </Head>
      <section className="h-screen bg-[#f0833f] text-[#132a44] text-2xl py-24">
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-[#132a44] rounded border-0 md:my-10"/>
        <p className="w-4/5 mx-auto">A mouth-based control system for wheelchair users.</p>
        <p className="w-4/5 mx-auto mt-16">The problem : Hong Kong Red Cross John F. Kennedy Centre is a special school, where some of their students are wheelchair bound. Some of these students are unable to control their wheelchairs with their arms.</p>
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-[#132a44] rounded border-0 md:my-10"/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] flex flex-col items-center py-24">
        <h1 className="font-black text-5xl">Henry</h1>
        <h2 className="font-medium text-lg">SIGHT member in 2017</h2>
        <h3 className="text-lg">Sip-n-puff</h3>
        <article className="text-xl w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">“Simple Technology, Big Difference”
That’s the motto of SIGHT: a simple yet powerful idea. Throughout my time at SIGHT, I saw this idea realised time and time again, not just in my project but in my peers’ projects as well.
</p>
          <p>I joined SIGHT as a freshman, and the project I chose to work on was the construction of a hands-free wheelchair control system for paraplegic children. We came up
with a prototype solution using simple electronics, software and a little 3D printing. This experience was eye-opening on two counts: Firstly, it made me appreciate the synergy interdisciplinary approaches brought to the table. My friend and I would be able to collaborate on integrating the electronics into the 3D model while the other would work on the electronic-software interface. Working together became as easy as putting pieces of the puzzle together. The second thing I learnt was that there’s always room to pick up new skills. Certainly, none of our group were occupational therapists, but by observing in the field, by reading and comparing notes, we learnt pretty quickly and by the end of the project, we had come up with a simple, yet satisfactory, solution that met the user’s needs.</p>
          <p>One of the most important lessons I learnt from SIGHT was an unconventional one: fail fast. When you don’t quite know how to start the project, the best way to start is to come out with as many ideas as you can, no matter how far-fetched it seems, and try them all out. Once you try them all out, you can decide which one works best. Then you can start from there by coming up with different ways to optimize it and try them out again. The term ‘fail fast’, thus, describes the rapid selection process you could use to grow your project.</p>
          <p>Looking back, SIGHT seems a million years away, but I will always recall the fun we had while working on the project and I will carry the lessons imparted on me throughout this wonderful experience.</p>
        </article>
      </section>
    </Layout>
  )
}