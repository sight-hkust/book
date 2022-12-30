import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {
  const router = useRouter()
  return (
    <Layout
      prevPageHref="/chapters/sightseeing"
      nextPageHref="/chapters/reducing-digital-dependency-among-children"
      className="w-full">
      <Head>
        <title>ForeSee</title>
      </Head>
      <section className="bg-[#65b4e5] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <Image className="w-5/6 mx-auto" src={`/covers/${router.pathname.replace('/chapters/', '')}.png`} width={1460} height={968} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">An electronic eye health platform for parents in Hong Kong.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Children myopia has seen staggering growth in Hong Kong, and parents often lack the proper aids to keep track of their kids’ eye health.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.replace('/chapters/', '')}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Jaman</h1>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2019</h2>
        <h3 className="text-sm sm:text-lg">ForeSee</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">ForeSee is a family to me.</p>
          <p>What does SIGHT mean to me?</p>
          <p>SIGHT is a spirit. It shows in every participant’s mind and actions. When I first joined SIGHT, I was only looking for friendships and interaction with international peers. As the time goes, I have found far more than I expected in SIGHT as well as my little organization started in SIGHT, ForeSee. In SIGHT, we bond and communicate openly. It feels good to tell everyone that we are trying to solve a real-life problem that is
yet to be solved. However, the reality is often more complicated than expected, trying to solve a real-life problem could face a lot of setbacks and failure, which is extremely discouraging and sometimes left us heartbroken. Fortunately, we are not alone in SIGHT, liked-minded people will work together, hands in hands in designing, prototyping and implementing the whole project, it taught me the true meaning
of leadership and teamwork. And the spirit in SIGHT passes along different team leaders and many of our future junior students. For instance, ForeSee grows under the umbrella of SIGHT, and it helps the growth of many other students who have taken part in this project.</p>
          <p>Important lesson learnt in ForeSee</p>
          <p>One important lesson I learned in ForeSee is that unlimited potential. We don’t just learn from each other, more importantly, the skills to self-learn more skills. I learned programming, marketing, financial pitching as well as project management through the time I have in ForeSee. There was once we needed to build a website on our own, and we had no website developers yet, so I spent a night digging into it and made a pretty decent demo website at the end.</p>
          <p>Here’s the link: ‘foresee4test.netlify.app’. More examples like this were my daily
life during my time as CEO of ForeSee. People from all different sub-teams would approach you for guidance and help. Most of the time, there were no easy answers. I had to work for 12 hours per day for a week to solve a key issue regardless of coding, marketing, funding, operation, team management issues, etc. It was a challenging but rewarding journey, some would say it equals the workload of two to three full- time jobs, but who cares? When you enjoy working, the workaholic lifestyle doesn’t seem to be that horrible after all!
</p>
          <p>Challenge in managing a team.</p>
          <p>Which is more challenging for you? Managing a team that consists of you only, or a team with 21 members? They were exactly my challenges when I worked in ForeSee. After a summer in the SIGHT Scholar program, my previous team was shattered due to various reasons, most members were leaving, and I was the only one left on the team. My senior SIGHT leader told me that was common and normal since carrying the project forward would require much more effort than before and it would not be an easy road for whom decided to continue. However, my emotions hindered my judgment at that time to understand my teammates’ decisions.</p>
          <p>To me, it was so closed to our designated goal, so close that we could finish our app and show the world, how our mobile apps product may help shape the world into a better place.</p>
          <p>It was not an easy time for me at those moments, frustrations and disappointments overwhelmed me. I almost gave up the project and terminated it. Did not know whether I should continue the ‘ForeSee’ project anymore, should I be the only one to move the project forward.</p>
          <p>Surprisingly, what convinced me to keep working on the project was encouragement from our former social worker partner. She was so supportive of the project and had a lot of amazing advice, which made me realize there are still parents and kids out there needing the project. That the project can indeed change lives and bring a positive value to our society. It fueled me to continue the project until I began recruiting like- minded members in HKUST and started to manage 27 members at the same time during the semester, which is another story...</p>
          <p>Managing 27 members at the same time can be easy if you know the way. Well, I didn’t know the meaning of leadership back then. It took me a year to realize what a true leader needs to do. The key is time, how we manage our time and make good use of others’ time became the key to exercising power and truly leading the team in the right direction. It was painful at the beginning since it was almost impossible to keep a close relationship with all members of the team, and it became extremely difficult to communicate with my fellows. Fortunately, I had been able to recruit talented minds in HKUST, and they stood up and started taking charge of different sub-teams and initiating the job duties, setting their own goals, and coming up
with strategies to meet the goals. It was amazing since it released me from a heavy workload and allowed me to focus on the development of the team. It is about trust and support in a team.</p>
          <p>Did SIGHT change the way how you do/look at things?</p>
          <p>Absolutely. As science students, we are often encouraged to ask ‘why’ when we see a problem or phenomenon. We focus on discovering problems and initiate experiments to increase our understanding of the problems. Some may say science students love creating problems while engineering students love solving them. I see myself as
an engineering student than a science student during my time at SIGHT. In SIGHT, we emphasize tackling real-life problems by actively interacting with stakeholders, thinking creatively, and most important of all, acting timely, never stop until we have reached our target., SIGHT changes me no matter in ways to pass over knowledge, perception to hard work as well as standard of excellence.</p>
        </article>
      </section>
    </Layout>
  )
}