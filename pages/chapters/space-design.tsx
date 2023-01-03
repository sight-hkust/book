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
      prevPageHref="/chapters/pinocchio"
      nextPageHref="/chapters/feed-you-well"
      className="w-full">
      <Head>
        <title>Space design</title>
      </Head>
      <section className="h-screen bg-[#3c4041] text-white text-lg sm:text-2xl py-16 sm:py-24">
        <Image className="w-3/4 mx-auto" src={`/titles/${router.pathname.split('/').slice(-1)}.png`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">Innovations to create spaces that help with our wellbeing.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : Space has always been a tricky issue in Hong Kong, yet the physical space around us have a direct effect on our mental and physical wellbeing.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Michelle"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member from 2021</h2>
        <h3 className="text-sm sm:text-lg">Space Design</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">ENGG1300 is a course that exemplifies the elements of an excellent course design, innovative course delivery, and pro-active teaching methods towards students. Being a student who took part in the course last semester, I thoroughly experienced what this course had to offer. With this course being presentation-heavy, where we students were required to present our ideas and progress to our peers bi-weekly, our instructors were extremely creative and intentional in making sure there was variety within the way presentations and feedback collection was carried out. Other than the traditional PowerPoint presentation, we were also given the challenge to not use a PowerPoint at all, present in a form of a formal business pitch, and even finalize our ideas in the form of a video/report. Throughout the course, we also used different feedback methods, including verbal feedback with a red/green response structure (red meaning areas of improvement, green meaning areas that were done well), written feedback where everyone physically wrote out their comments, online feedback where we were to allocate a series of points to different groups, and also
a live feedback format, where presenters were able to see their feedback while presenting, through a projector screen set up at the back of the classroom. These methods allowed us, students, to engage more with each presentation since lessons were always painted as fresh and exciting.</p>
          <p>The course also heavily emphasizes team-building and collaboration; the instructors not only incorporate a lot of activities into the learning space but also allow students to work with different groups of students who have different specialties (eg. from different schools). Furthermore, we students were generally given a lot of freedom in terms of how we approached certain tasks, and with this, we were able to fully utilize our imaginations and creative abilities. However, I believe that an important and
distinctive part of this course is how go out of their way to provide any students may need in order to bring their ideas to life. There were spend up to an entire day outside of class working on our projects, willing to assist and supervise instructor was even willing to bring his child into school a user test for our product.With this, the course does students with a space possibilities, and curates a creativity, collaboration,
days where we students would

for our group to conduct

the instructors are extremely willing to sort of resource and support their

and the instructors were extremely us in the process; one

a great job of providing where there are countless
great environment that fosters and ambition.</p>
        </article>
      </section>
    </Layout>
  )
}