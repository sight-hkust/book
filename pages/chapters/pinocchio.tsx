import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout 
      prevPageHref="/chapters/collabox"
      nextPageHref="/chapters/space-design"
      className="w-full">
      <Head>
        <title>Pinocchio</title>
      </Head>
      <section className="h-screen bg-[#f2948f] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">A platform for mental wellness dedicated to HKUST students.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Mental health is often a tabooed subject in Hong Kong, but with 1 out of 10 Hong Kongers displaying symptoms of PTSD
and the affects of COVID restrictions, the need for a safe space to discussion mental wellbeing is all the more dire.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Tiffany</h1>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2020</h2>
        <h3 className="text-sm sm:text-lg">Pinocchio</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">
          Being a part of the Pinocchio team has been a truly unforgettable part of my university journey. Through this project, I was able to meet a lot of like-minded and passionate people who all had the same mission to make UST a more positive (and less stressful!) community for all our fellow students who are striving to do their very best in their studies and careers.
          </p>
          <p>
          Truth be told, when we joined the ENGG4930D course, there were a lot of times when our team wanted to give up. While we genuinely enjoyed what we did, the workload was much more than we had anticipated, especially as year 1 students! However, with the guidance of our SIGHT advisors (shoutout to Prof Ying Chau, Malinda, Joel & Prof Bookhart!), our team was able to overcome the challenges and were guided to improve our project as best as possible. 
          </p>
          <p>
          Through the course, our team also definitely got
a lot closer (despite having only met each other virtually), and we were able to learn how to work together in a collaborative and efficient manner. In fact, now that I am looking back, I am sure that without the push and support of our advisors, Pinocchio would have definitely not grown the way it has today.
          </p>
          <p>
          When my friends and I first started Pinocchio, we never knew we were able to create as much impact as we had and neither did we know that Pinocchio would be able to grow to the extent it has currently. However, I do know that there are definitely much more to be done and that Pinocchio and not reached its full potential just yet. Hence, I am very much looking forward to what other changes Pinocchio can create and put forth in our HKUST community in the near future!
          </p>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Minjin</h1>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2020</h2>
        <h3 className="text-sm sm:text-lg">Pinocchio</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">
          Starting my first year of HKUST online, I was looking for any projects I could join in my room, and I found out about SIGHT. SIGHT, the Student Innovation for Global Health Technology, has a great initiative, allowing students to ideate and establish their projects to address and eliminate various health issues. I chose to work on mental health issues because it was something that I could easily relate to; I have noticed that many students in HKUST are concealing their emotions as well. So I founded Pinocchio, the platform for students to anonymously share their stories regarding their mental well-being.
          </p>
          <p>Establishing Pinocchio was certainly challenging. One of the main struggles we faced is that this is a sensitive issue. When we enrolled in the ENGG4930D course for project implementation, we had to go through holistic reviews with professors, to make sure that the solution is feasible and
appropriate to address the mental health topics.</p>
          <p>
          We had to be careful with wordings, color scheme, and overall designs so that none of them are giving any negative impressions, and we also had to consider the possibility of users posting toxic comments. We received comments that the project does not seem very impactful or does not see the need. As such, nothing went smoothly in establishing Pinocchio. But, with the support of SIGHT and the good team we were able to accommodate all the feedback and implement the project.
          </p>
          <p>Right now, the Pinocchio team has grown and the project is preparing to get revamped and expand further. I am grateful that I have been given the opportunity to work on this project with my team members, and I am proud of how long we came.
I hope to continue this project to help raise mental issue awareness and build the community we want.</p>
         
        </article>
      </section>
    </Layout>
  )
}