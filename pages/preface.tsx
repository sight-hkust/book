import React from "react";
import Head from "next/head";

export default function Preface() {
  return (
    <div className="bg-[#fffef7] w-full h-full text-[#142a44]">
      <Head>
        <title>Preface</title>
      </Head>
      <section className="w-full flex flex-col items-center justify-center my-24">
        <h1 className="sm:text-6xl text-4xl mb-8">Preface</h1>
        <hr className="my-4 mx-auto w-1/3 h-0.5 bg-gray-400 rounded border-0 md:my-10 dark:bg-gray-700"/>
      </section>
      <article className="w-4/5 mx-auto text-lg sm:text-xl flex flex-col space-y-8">
        <p className="first-letter:text-4xl">
        The Student Innovation for Global Health Technology Program, or SIGHT, was founded in the midst of the 3+3+4 academic reform. The whirlwind of change whipped up discussions on novel pedagogies, and the mood was buoyant and open amongst colleagues and senior management. Under this aura
of transformation, I too joined the ranks of dream catchers, to establish a utopia that is brimming with passion in both teaching and learning.
        </p>
        <p>To provide the impoverished with suitable public health and medical services has always been a fundamental and complex challenge, be it in Hong Kong or all over the world. Yet this challenge presents itself as the perfect motivation for students to devise creative solutions, and the corollary
need to deploy interdisciplinary skillsets. All this behooves students to break out of their comfort zones and design with empathy, allowing their projects to truly benefit those in need. By leveraging “Design Thinking” as a model, we encourage students to jump and think outside of traditional boxes, and empower them to transform ideas into prototypes, so that their concepts could be implemented in the society. “Simple Technology, Big Difference” is beyond just a motto, but also the inspiration for students to give back to the society, and become global citizens via their knowledge and actions.</p>
        <p>
        SIGHT is entering its 8th year, and has accrued a plethora of memories along the way. Beyond this preface are words, photographs and multimedia that bore witness to the beads of sweat and trials of footsteps by our students. With hope, friends, colleagues and partners of SIGHT would find gratitude and appreciation for their unfading support, and for the dreamers out there, encouragement.
        </p>
      </article>
      <section className="w-4/5 flex flex-col items-end my-16 mx-auto">
        <h2 className="font-bold sm:text-4xl text-2xl mb-4">Prof. Ying Chau</h2>
        <span className="sm:text-xl">Founder and Director, SIGHT at HKUST, 2014 - present</span>
      </section>
    </div>
  )
}