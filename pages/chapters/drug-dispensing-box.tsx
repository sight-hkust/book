import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Chapter() {
  return (
    <Layout 
      prevPageHref="/chapters/medeasy"
      nextPageHref="/chapters/diabetic-retinopathy-detection"
      className="w-full">
      <Head>
        <title>Drug Dispensing Box</title>
      </Head>
      <section className="h-screen bg-[#ea5545] text-white text-2xl py-24">
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-4/5 mx-auto">A medicine transportation and organization system for mobile clinics.</p>
        <p className="w-4/5 mx-auto mt-16">The problem : <strong>One-2-One Cambodia</strong> is a medical NGO that conducts mobile clinic outreach in the slums of Phnom Penh and the provinces of Cambodia. Their old way of packing and transporting medicine to site was via suitcases, which were cumbersome and offered no organization.</p>
        <hr className="my-4 mx-auto w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] flex flex-col items-center py-24">
        <h1 className="font-black text-5xl">Melody</h1>
        <h2 className="font-medium text-lg">SIGHT member in 2014</h2>
        <h3 className="text-lg">Drug Dispensing Box</h3>
        <article className="text-xl w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">My first project with SIGHT was DDX (Drug Dispensing Box), which is a drug carrier for the mobile pharmacy station in slum setting. I joined the project team when I
was a year 1 undergraduate with a major in Biochemistry that I thought was almost irrelevant to what I did in SIGHT. Hence, my greatest fear/hurdle was the feeling of being incompetent or a burden to the team. Nonetheless, it was the attitude that matters. After the field trips to the slums in Phnom Penh and understanding the scarcity of medical resources that the slum dwellers experience, our team was deeply moved by the needs of the users we served. Powered by such motivation and clear goal to deliver the final product to help the vulnerable groups, the self-doubt and fear became insignificant and I had the courage to step out of my comfort zone to acquire new knowledge and skills and tried to be good at them. Also big thanks to the amazing interdisciplinary team of students and always-supportive teaching staffs, we were able to go from zero to one and more DDXes on this SIGHT journey.</p>
          <p>SIGHT journey is intensive, fun, fruitful and rewarding. For me, it began with the field trip to Cambodia. At daytime, we were down the field observing and interviewing our stakeholders, at the same time assisting our partners in their day-to-day operation, e.g. helping at the pharmacy or triage station. At night, we were back in the hotel room brainstorming and redefining our problems and solutions until late night.
We presented our ideas to our stakeholders the next day to get their feedbacks before execution. But the more exciting part of this design thinking journey came after the 8-day field trip. It was followed by 1-2 semesters of cycles of prototyping and evaluations. Sometimes the feedbacks from the faculty were harsh and blunt;
but these reality checks pushed us to make our prototype less ‘cheesy’ but more functional. There were sleepless nights of refining our prototypes towards the product launching day at the end of the semester (even the night before our morning departure to Cambodia to meet our stakeholders). Finally, the sense of achievement and relief rushed in when we finally saw the happy faces on our users when they were using our final-ish product to help the slum dwellers.</p>
          <p>This journey has definitely brought our team together closer than before. Besides friendships, another greatest takeaway from my SIGHT journey is design thinking. Design thinking to me is not just a course, but also a learning approach. It definitely has helped me to excel in my research and art pursuits and even in acquiring new knowledge and skills. It has taught me to become more observant and empathetic in life, and has trained me to define, solve problems and execute plans more systematically.</p>
          <p>
With specialization is the default in life in order to succeed, I used to think that I can only commit to one of many things I love. While I was still exploring and committing in areas/things that I possibly like, I had to give up my other interests because time
is the limiting factor. I had many pursuits in my hands during my undergraduate life such as research projects, exchange, GPA, and SIGHT. I needed to invest sufficient amount of time and energy in order to ensure high quality roles and responsibilities in these pursuits; hence, maintaining study-life balance was a challenging task at that time. A short conversation with Prof. Chau during a field trip with SIGHT changed
my perspective on things. I still remember her analogy of life as a closet with many drawers, and only the right drawer should be opened at the right time. I think this has a great impact on my life especially on my time management in specializing while diversifying my interests. I can put on many hats and invest time on things that I like while maintaining a healthy work-life balance.</p>
        </article>
      </section>
    </Layout>
  )
}