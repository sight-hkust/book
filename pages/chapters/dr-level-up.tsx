import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import AuthorName from "../../components/AuthorName";

export default function Chapter() {
  const router = useRouter();
  return (
    <Layout
      prevPageHref="/chapters/sip-n-puff"
      nextPageHref="/chapters/sightseeing"
      className="w-full">
      <Head>
        <title>Dr. Level Up</title>
      </Head>
      <section className="bg-[#accb41] text-[#020203] text-lg sm:text-2xl pt-16 sm:pt-24 flex flex-col justify-between">
        <Image className="w-2/3 mx-auto" src={`/titles/${router.pathname.split('/').slice(-1)}.png`} width={876} height={162} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#132a44] rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">An electronic health record system designed for medical outreach to homeless people.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : The Salvation Army in Hong Kong conducts medical outreach for the homeless around Hong Kong, and lack a system for both their nurses and volunteers to record the health data accrued throughout the service.</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#020203] rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center mb-16 sm:mb-24">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
        <Image className="w-screen" src={`/covers/${router.pathname.split('/').slice(-1)}.png`} width={1460} height={968} alt=""/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Zoya"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2018</h2>
        <h3 className="text-sm sm:text-lg">Dr. Level Up</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">When I first joined the SIGHT Camp, I was a sophomore year student with a lot of ambitions to bring change and make a difference in the world. There were several projects introduced at the Camp, but what stroke my attention the most was the project introduced by the Salvation Army, where they had a health support service called Level Up to help the street sleepers and other deprived communities in Hong Kong. Although Hong Kong is well-known for being one of the most developed cities in Asia, one in five Hong Kong residents live below the poverty line, and it is undeniable that some people are unable to seek help when it comes to their health. The presence of Level Up would allow the marginalized people to come forward and inform their issues to the volunteers, whereas the volunteers can give support such as medicine, motivation, or guidance to them.</p>
          <p>Given the scale of the project, Level Up had to manage a large number of volunteers to record the health information of the outreached. However, different volunteers would have different perceptions on how to record the information. It became a source of trouble to do follow-ups during outreach, and Level Up was in need of a centralized system that can effectively collect, store, and retrieve health information of the outreached.</p>
          <p>To solve the issue, we wanted to build an app that could encourage the volunteers to record the information in a systematic way. With that in mind, we went on to do several field visits to see how the volunteers did the outreach and use the experience to design the app.</p>
          <p>During my first visit, I was able to see first-hand how the street sleepers live. Although we do not really see people living in the streets during the day, a sheer number of people actually stay in parks and streets for the night. Most of them had jobs, but they still chose to sleep in the park with almost no privacy rather than having to pay rent to live in a cage home.</p>
          <p>Our idea was to build an app that would record the health information of the outreached and store it in a database. Then, the Level Up administrator could filter and retrieve the data in a spreadsheet format. We had to make sure that the app would be simple enough that a new volunteer can readily use it.</p>
          <p>At first glance, our project seemed rather straightforward. We thought the hardest part would be to code the application. It was true to some extent. However, we did not expect that designing the app to be convenient to use would also be a major challenge to us.</p>
          <p>This is because not all of the street sleepers were open with the idea of talking to the volunteers. Normally, the volunteers have to build trust over time by regularly checking up on them and chatting with them. And to make them feel less wary toward the volunteers, some of the volunteers were neglecting their part to log the street sleepers’ health information during the outreach at all. So, the information collection part also had to be done as fast as possible as not to disturb the conversation between the volunteers and the street sleepers.</p>
          <p>On that note, we created an application called Dr Level Up that did exactly that. We went back and forth with the design of the app to ensure we got the right balance of simplicity, convenience, and clarity on the app. By the end of summer of the year, we were finally able to release the final version of the app and it felt rewarding to see the volunteers used our app during the outreach.</p>
          <p>Being able to see problems and create changes to solve the problems was the reason I joined SIGHT in the first place. It felt very unreal at first how a mere student like me can make use of my knowledge to help the community. Seeing the implementation
of the solution that I created along with others feels very rewarding and gives me the confidence to be a part of the solution next time I see a problem.</p>
        </article>
        <Image className="mx-auto w-1/2 sm:w-1/4 mt-16 sm:mt-24" src="/artworks/zoya.png" alt="" width={440} height={612}/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] flex flex-col items-center py-24">
        <AuthorName name="Tommy"/>
        <h2 className="font-medium text-base sm:text-xl">Yau Ma Tei Shelter</h2>
        <h3 className="text-base sm:text-xl">Partnership with SIGHT since 2018</h3>
        <article className="text-xl w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">Beyond the noticeable issues of food, shelter and employment, street sleepers are challenged by unknowns. For instance, they often lack the resources or knowledge to take care of health issues. The Level Up project takes a remarkable step in redefining services for street sleepers. Through uniting passionate healthcare workers, the project provides medical support for street sleepers. I was pleasantly surprised
when I heard that SIGHT at HKUST can organize university students to come up with technology innovations for NGOs. Technology plays a vital role in social service. One cannot keep up with the times by simply keeping to existing processes and structures. SIGHT does not only offer hands-on opportunities for students, but also enables and encourages NGOs to employ technological solutions for a boost in service efficiency and quality.</p>
          <p>The students who coded for us did not understand Cantonese, but they did not let the unfamiliarity stand in their way. They went on visits with us regularly, engaging in conversations with people we meet on the way, and contributed to our discussions. They also tested their prototype with our doctors and nurses, taking in their feedback and making adjustments. The language barrier did make it rather challenging to communicate, but I was proud of the team of humble learners who transcended cultural and geographical barriers with their strong empathy and commitment. The prototype did have a lot of room for improvement. We made suggestions on cloud data storage and and the UI, and I highly appreciate their eagerness in making alterations and responding to our feedback.</p>
          <Image className="mx-auto w-3/4 mt-16 sm:mt-24" src="/artworks/salvationarmy.png" alt="" width={1364} height={592}/>
          <p>While conventional medical processes such as wound care and health screenings make up the bedrock of the Level Up project, our work did not stop here. We reached out to support the mental well-being of street sleepers as well. While struggling with tough living conditions, street sleepers are often battling feelings
of loneliness and emptiness. It was was no easy feat to have them open up to our medical team and the students, to share their stories or events from their daily lives. At the end of the day, interpersonal relationships are built on the basis of trust and mutual understanding. We, as social workers, play the role of a companion, trying to empathize with the emotional journeys of the street sleepers to identify opportunities for change, empowering them to take ownership in striving for more favorable circumstances. I am sure that the students, as the designers, also benefit from the process. Empathy surely contributes to products that better serve the users’ needs, but it also broadens their horizons and enriches their experience, introducing them to more social issues. I hope the students can keep up with the good work and influence people around them, to reduce stereotypes and prejudice so that more could understand the true needs of vulnerable communities.</p>
        </article>
      </section>
    </Layout>
  )
}