import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import AuthorName from "../../components/AuthorName";

export default function Chapter() {
  const router = useRouter()
  return (
    <Layout 
      prevPageHref="/chapters/feed-you-well"
      nextPageHref="/chapters/malaria-prevention"
      className="w-full">
      <Head>
        <title>Zi Saam Dim Sum</title>
      </Head>
      <section className="h-screen bg-[#d1b205] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">Texture modified food (TMF) recicpes for elderly with dysphasia.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : Elderly with dysphasia often have limited food options, which could in turn affect appetite and therefore body weight.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#d1b205] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Daniel"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Zi Saam Dim Sum</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">Through this course, I learned a lot of useful information regarding texture modified food (TMF) and a lot of critical thinking skills. I learned there are many ways to solve
a problem and there are no rules to say which is the best, it depends on how I want the matter to be solved. It is uncertain whether the knowledge of making TMF would be helpful to me in any way in the future but the making of TMF is not my largest takeaway. I have stumbled upon a lot of challenges in the project.</p>
          <p>From the beginning of the project, I already cannot find a lot of helpful information since there are not a lot of people or organizations focused on making TMF. I gathered many pieces of information from here and there to piece out something
we can work on. Moreover, I am not much of a chef and to make food that not only
is edible but also with soft texture is a huge challenge for me. Luckily after many lab sessions of practice, I have overcome this challenge and got the hang of how to make TMF without too many troubles.</p>
          <p>My biggest takeaway from this course is how to become a better leader and a better team player in a group project. Multiple times during this course, one of the members of the group did not fulfil his responsibility and I need to stand up and finish what he did not do since this project is not individual but a team. One thing that I remember the most is the time when I got covid I thought I would be resting and taking a break from everything to recover but unfortunately due to the lack of involvement of a teammate, my other teammate have to finish both the lab session and the second internal check all by himself. Since I know he needed help as he cannot finish the Google Docs all by himself, I have to stand up and fill the position and did half the second internal check document as well as making a website for our product. I learned being a team player is not only about fulfilling my own responsibility but also being versatile enough to fill up empty spots during times of need. Such experiences are hard to come by and I feel it is a very valuable lesson for me since I will be a part of groups countless times in the future and having this mindset is more important than the knowledge of making TMF.</p>
          <p>Nonetheless, the objective of this course is also important. Our goal is to create a new flavour of TMF to give more choices to the elderly who suffer from dysphagia
to choose from. Even though the roadshow has not taken place yet while I type this reflection, I am confident that our products could bring smiles to their faces while letting them know that there will be an end to all the tasteless puree they have had for years. Although after this project I am not likely to do similar work in the future, I am still happy to know that someone could pick up what we did and learn and make more out of it. It is uncertain about the future of TMF but I truly believe there are more to it and it is a promising field of study to a lot of people and I hope more innovative flavour or methods will be invented by the time I turn into an elderly and maybe need to have TMF for the rest of my life.</p>
          <p>To conclude, this project is a valuable lesson for me. I still remember in the beginning I was lost and a little scared of doing what I am completely unfamiliar with. But with the guidance of the teaching team and the help of my teammate, I not only learned
a lot about TMF but also learned to make them with different flavours that nobody has tried before. It feels rewarding when I created something new with our own modification which is healthier for the elderly. All the failures have taught me not to give up because the right solution could be right around the corner and that was what happened multiple times. Not giving up is also a trait that causes success in the end and I am very grateful for this course that offers me the opportunity to learn so much in just half a year. I hope I can use all the skills that I learned in the near future.</p>
        </article>
      </section>
    </Layout>
  )
}