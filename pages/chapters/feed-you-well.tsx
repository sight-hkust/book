import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import AuthorName from "../../components/AuthorName";

export default function Chapter() {
  const router = useRouter();
  return (
    <Layout
      prevPageHref="/chapters/space-design"
      nextPageHref="/chapters/zi-saam-dim-sum"
      className="w-full">
      <Head>
        <title>Feed You Well</title>
      </Head>
      <section className="h-screen bg-[#9ac875] text-white text-lg sm:text-2xl py-16 sm:py-24">
      <Image className="w-3/4 mx-auto" src={`/titles/${router.pathname.split('/').slice(-1)}.png`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">Nutritional Meals Ready-to-Eat for young elderly.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : The young elderly might not always have the time to cook themselves and existing MREs do not hold the desired nutritional value.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#9ac875] text-white text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Alexi"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Feed You Well</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">At the beginning of this course, I thought I am not able to have a final product that I will be satisfied with since creating a whole series of food products in one semester is not easy. And we had so many ideas, so we are not able to come up with an organized one. Yet, after several meetings and cooking throughout few months, we gradually came up with a series of final products after failures. We did not know how to cook at first since we were not used to cooking by ourselves, but after trying many times, we learnt some techniques like how to marinate the meat before cooking and how long do the food needed to be cooked so that after reheating, it will not be
too soft or hard. Also, we did not know how to create a website at first. But luckily, I discovered a platform to create website free of charge and we were able to finish the website with pretty design and useful information inside. Before having a sharing in ERC, I was extremely nervous since I am quite shy that I am not used to speak in front of many people. But after several practices, it ended up quite well and I am able to interact with the elderly smoothly to create a relaxing sharing atmosphere.</p>
         <p>In my opinion, design thinking and user-centered design is gradually becoming more and more popular nowadays in terms of technology. Since many services are performing on the internet and introducing only a series of food is not enough to both this course and elderly since this is not a cooking course. So this is the reason why we choose to add a QR code on our food packages to strongly combine food and technology. Apart from technology user-centered design, I also found out that collecting comments from target users is super important. Since I do not have elderly relatives or friends, I am not familiar with their mindsets and eating habits. After the sharing in ERC, I found out young elderly have way more ideas than we expected such as they think soup is essential for a meal that I have never thought of because
I hate soup. Also, some of them like western food like mashed potato and western soup which surprised me with their not so traditional Chinese eating habits. So, collecting comments from target users can help to enrich our products to another level and become more user friendly.</p>
          <p>I think the technology part in this course will be useful in my personal life because I am planning to study interaction design or immersive design for my master’s degree. Creating a website in this course and practicing myself to think in target users’ shoes built a foundation for my future study.</p>
          <p>For my team experience, I always felt tired about that since our working habits
are totally different. I am not a deadline fighter because I would like to double or triple check my work before handing in or presentation. Yet, my groupmates are
both deadline fighters and maybe give up fighting, so I always had to do about
70% of the work to finish our work on time. Also, I like to organize the things we
need to do clearly. But maybe boys are not used to being organized, they always forget something that I had to remind them again and again and push them to do
it although sometimes it ended up me doing it alone. May be the workload of our projects are quite heavy, so they sometimes choose to ignore and escape from it. Yet, I think the cooking atmospheres are quite good since we are already friends before this course. After all, I think we can have a stronger work separation and I have to have a more unyielding attitude to show that I would not help you do most of the work! But having different kinds of people in a team also have advantage that if all teammates are having very strong ideas, they may develop into numerous arguments.</p>
          <p>Lastly, from this project, I found out I am having a much better performance in project-based courses. I always performed badly in courses which have paper exams or zoom exams since I got super nervous easily that I always want to vomit and having stomachache during exams. Even I studied hard for that course, I always ended up having a really bad grade. But this course makes me understand I am not stupid at all, and my effort can somehow pay off in project-based courses.</p>
        </article>
        <Image className="mx-auto w-1/3 sm:w-1/5 mt-16 sm:mt-24" src="/artworks/alexi.png" alt="" width={1080} height={744}/>
      </section>
    </Layout>
  )
}