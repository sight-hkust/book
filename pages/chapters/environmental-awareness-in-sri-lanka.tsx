import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import AuthorName from "../../components/AuthorName";

export default function Chapter() {
  const router = useRouter()
  return (
    <Layout
      nextPageHref="/chapters/trial-and-better"
      prevPageHref="/chapters/malaria-prevention"
      className="w-full">
      <Head>
        <title>Environmental Awareness in Sri Lanka</title>
      </Head>
      <section className="bg-[#e2bf5c] text-[#020203] text-lg sm:text-2xl pt-16 sm:pt-24">
      <Image className="w-3/4 mx-auto" src={`/titles/${router.pathname.split('/').slice(-1)}.svg`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#020203] rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">A plastic recycling program for an NGO serving children near Kandy, Sri Lanka.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-8 sm:mt-16">The problem : The TEA-Project is a children’s NGO in the Hanthana area, where the community faces challenges in poverty and plastic waste.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#020203] rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
        <Image className="w-screen mt-16 sm:mt-24" src={`/covers/${router.pathname.split('/').slice(-1)}.jpg`} alt="" width={1364} height={592}/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Denise"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Environmental awareness in Sri Lanka</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">“This is a wonderful experience working with our partners in Sri Lanka and SIGHT.”</p>
          <p>The project is challenging yet rewarding, which pushes me beyond limits and unleashes my potential in design and communication. I am Denise, a year 4 student from the school of Humanities and Social Sciences. In the last semester of my final year, I have decided to take the course ENGG 4930E Global Health. This will help me challenge myself in the application of knowledge that I have learned throughout the years. The TEA project trusted me and adopted our suggestions to help organize the workshop, and I am happy that they did so.</p>
          <p>My project is about improving the conditions in the tea estate located next to Kandy town in Sri Lanka. Prior to my participation, the previous team of students had been working with our partner for about a year. Unfortunately, working over the internet amid covid adds difficulties to their collaboration. When I was notified that I was the only student on the team, I did think about dropping the course at the beginning. However, the passion of the SIGHT team has changed my decision. I decided to have a go.</p>
          <p>The first time when I was introduced to the TEA project, I have no idea what the life was like in Sri Lanka. I treated it as a research paper and did some background research. However, identifying the problems based on books and statistics is impractical. We saw images of line houses, tea cultivation, tea pickers, roads, and schools but these did not provide enough clues for me to identify the
real problems in the village. Luckily, the teaching team got connected
to the locals so that we can talk to them directly.</p>
          <p>After some interviews with TEA leaders, lawyers and staff, we decided to work on waste management problems. There are photos showing trash strewn on the floor, along the roads, and along the rivers, and then we tried to figure out why. Obviously, the majority of the residents of the village are poor people with little education on environmental protection. They may not notice the severity of the problems and their impacts to the neighbourhood and surrounding environment. Plastic, or polythene, which is what most people recognised as the dominant trash, is not recycled either. However, when we dig deep into the root of recycling and waste management problem of the village, the intricate relationship between different stakeholders on this matter is adding extra challenges to our project. To tackle the problems, education should be the first priority. Education programs are catered to the local culture, learning ability and language barrier. Since our partner, the TEA project, has been providing after-school classes for local teens and children, we decided to choose children as our target audience. The process from designing to prototyping is meaningful. Designing a workshop for the kids is more than instilling knowledge but is more about the mode of delivery and how to catch their attention.</p>
          <p>On the one hand, we designed a 2-day workshop on indoor to outdoor activities and hoped to build up recycling behaviour among the younger generation in the village. On the other hand, we have talked to lawyers who are enthusiastic about changing local policies and negotiating with the local government in setting up recycling facilities.</p>
          <p>On the surface, the project is quite successful as the two workshops could be held.
At heart, it is the challenges that really help my personal growth and trigger personal reflection on the education system. Honesty, I have never had a chance to present the environmental knowledge outside the classroom. This is a precious chance for me to learn how to simplify the concepts and transform them into videos and games to help to teach. Besides, this project has deepened my understanding of a lovely community in a distant country. Communication is a major concern as online communication could be quite ineffective and inconvenient. Surprisingly, it is exactly through those online meetings and interviews do I learn skills of organizing online meetings, for example, regular updates and progress checks, setting common goals and initiating talks etc. Personally, I am a slow-to-warm-up person, if I had not been solely working on the project and had not been given so much support and courage from the teaching team, I would not have created the web pages and designed the workshops.</p>
          <p>I am thankful that I have met the SIGHT team. We are so impressed with the course offered by them. No matter what kind of revolutionary ideas, as long as you dedicate your time and effort in the project, they are always available to provide technical help and guidance. Online communication created a bond across geographical boundaries during the exceptional period in Sri Lanka, much like when Hong Kong was nearly knocked down by the fifth wave of the covid, allowing us to connect with each other and provide support to each other matters a lot. Overall, this course is a de facto service trip. The biggest reward is unquestionably the beautiful memories I have had with the children. Their smiles and enthusiasm are contagious, which is also the biggest driving force for me to working on the project.</p>
        </article>
      </section>
    </Layout>
  )
}