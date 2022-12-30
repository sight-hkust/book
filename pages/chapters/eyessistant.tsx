import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {

  const router = useRouter();

  return (
    <Layout
      prevPageHref="/chapters/hand-hygiene-and-soap-production"
      nextPageHref="/chapters/pace-it"
      className="w-full">
      <Head>
        <title>eyessistant</title>
      </Head>
      <section className="h-screen bg-[#f0efb8] text-[#142a44] text-lg sm:text-2xl py-16 sm:py-24">
      <Image className="w-3/4 sm:w-2/3 mx-auto" src={`/titles/${router.pathname.replace('/chapters/', '')}.png`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#142a44] rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">A low-cost VR-based eye surgery training system for eye surgeons to train up their surgical skills.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Eye surgery simulators are either prohibitively expensive, unportable, or both. This leaves training inaccessible for aspiring eye doctors, especially in developing regions where eye diseases are common.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#142a44] rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.replace('/chapters/', '')}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Rubaiyat</h1>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2016</h2>
        <h3 className="text-sm sm:text-lg">eyessistant</h3>
        <article className="text-lg sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">What to do when you feel like you are doomed?</p>
          <p>As soon as the meeting with Prof. Roger Cheng ended, my team and I exited the meeting room in a state of disbelief and heavily sighing hearts. We had worked on our projects for half the semester and suddenly, our efforts were drenched. We wondered, do we have to start all over?</p>
          <p>We were building a portable fundus camera, which would detect early diabetic retinopathy for patients in Yogyakarta, Indonesia. It was a challenging yet gratifying first few months of solving. We delved into ideating multiple solutions, with confident attempts of applying design thinking tools. Naively, we were collecting data points
at the same time we were ideating. But at least we were moving! Prototyping began soon as we had narrowed down the solutions that we believed would solve all the problems and were well on our way to completing the project smoothly.</p>
          <p>Our supervisors were busy advising us on the application side of things. Meanwhile, our supervising professors seemed happy enough with what we had been achieving during these early stages of development. If they were happy, then we were happy. Soon enough, we were ready to print out drafts of our final prototypes to realize
our envisioned solutions. We thought this was a good time to schedule our second meeting with our secondary supervising professor, Prof. Roger Cheng, to gather his comment on our progress.</p>
          <p>We made our way to meet our professor that morning. Little did we know, we would be thrown right back to square one within the next hour. With our hands to our heads, my team and I were quite distraught about how we could now pass this course, let alone reach distinction grades. With this blow, we decided to hold an emergency meeting the next day as we still had to run to our respective classes for the day. With such a tight schedule and midterm exams luring in, it seemed like an impossible feat.</p>
          <p>The next day, the lab was our war ground. We began to discuss the professor’s comments and trace back to where we had gone wrong. As a freshman, working with my teammates of a similar caliber of inexperience, we were even more baffled. So we decided to step back. Instead of trying to dissect our current situation to pinpoint where we went wrong, we decided to go right back to the start and use the five whys methodology to answer our problem statement.</p>
          <p>To our utter surprise, it worked. It was a splendid eureka moment when we figured out the new root causes and were now able to better group and prioritize our problem categories. From there on, we didn’t quite have the time to change up all our solutions but instead, we innovated upon our existing solutions.</p>
          <p>The team was now confident and content with the solution. Although a little bit more time would have allowed us to produce a better product, we could now answer any question thrown at us to justify our choice of solution.</p>
          <p>In retrospect, this was one of the biggest takeaways from my project at SIGHT: to know how to justify my final product. As important as it is to have good solutions
for the problem being tackled, it is just as vital to know why one has selected it. If the justification makes sense, most likely the product will. To analogize, any plant grows to look and feel exquisite upon its bloom or let’s say, a flower - in other words, our solutions. But the reason it is able to do this is because it is supported by its strong roots and base stem, which likely took much longer to grow. This conveys the importance of finding precise root causes of a problem for final solutions to bloom fervently. This was one big lesson, we learnt the hard way.</p>
        </article>
      </section>
    </Layout>
  )
}