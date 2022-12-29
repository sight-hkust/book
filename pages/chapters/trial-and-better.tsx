import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout 
      prevPageHref="/chapters/environmental-awareness-in-sri-lanka"
      nextPageHref="/behind-the-scene"
      className="w-full">
      <Head>
        <title>Trial & Better</title>
      </Head>
      <section className="h-screen bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl py-16 sm:py-24">
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#142a44] rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">Leveraging Stanford d.school’s Designing for Life curriculum for early secondary school students.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : The COVID pandemic along with subsequent government policies had at times left teaching and learning in a jumble. But amid all this we saw a chance to also experiment with something novel and untested in Hong Kong, prototyping with secondary school students their ideal lives.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#142a44] rounded border-0 md:my-10"/>
      </section>
      <section className="h-screen bg-[#fcf37d] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-bold text-lg sm:text-2xl mb-16">Description</h1>
        <article className="text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p>The viral pandemic and its accompanying pseudo-lockdowns had been two ginormous wrenches thrown into the works of secondary school students. Inspired by the plethora of organizations that stepped up by providing tutoring services, we at SIGHT also explored different ways to contribute and support schools and students. As our forte has been working with the framework of design thinking, we decided to apply this to secondary school students. Basing our program on the Designing your Life course in Stanford d.school, we set out ways to help secondary school students to explore their interests, and then leveraging these interests to try prototyping their life after secondary school life. This is to offer some light at the end of the tunnel and a focal point for their lives beyond their uniform.</p>
          <p>In the end, we are most grateful to have worked with Kowloon Sam Yuk Secondary School to bring this novel program to fruition. Thru the wonders of Miro and Zoom, we journeyed with students to discover their passions and interests. With the help
of kind volunteers, we linked students up with professionals and experts of their interested fields to flesh out opportunities and possibilities down those paths. The program included a cameo from Dong Fong Sing of 100Most fame, who as the guest speaker encouraged students to find their interests and become experts in them.</p>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Leung Wing Mui</h1>
        <h2 className="font-medium text-sm sm:text-lg">Vice-principal</h2>
        <h3 className="text-sm sm:text-lg">Kowloon Sam Yuk Secondary School</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">“Design thinking is crucial in problem-solving by redefining problems and create solution to prototype and test. Amid the 4-weeks programme, our students’ have participated in various workshops, focusing on designing and redesigning what
they want to learn. Ultimately, able to share their story of learning to others and harness the process of design thinking. It is particularly precious in this pandemic era, when students encounter a multitude of limitations in learning. After participating
in this programme, students are able to breakthrough these difficulties and be an autonomous learner.</p>
          <p>Thanks Prof Chau and SIGHT Team. “</p>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Law Lam Sze</h1>
        <h2 className="font-medium text-sm sm:text-lg">Student</h2>
        <h3 className="text-sm sm:text-lg">Kowloon Sam Yuk Secondary School</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">The Trial & Better class inspired us to discover our own learning areas. With so many choices in life, it is through learning that could help us find the path that suits us best. This course also enabled me to meet more people and broaden my social circle. It is all very helpful, I hope I could join other similar courses in the future.</p>
        </article>
      </section>
    </Layout>
  )
}