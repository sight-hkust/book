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
      prevPageHref="/chapters/zi-saam-dim-sum"
      nextPageHref="/chapters/environmental-awareness-in-sri-lanka"
      className="w-full">
      <Head>
        <title>Malaria Prevention</title>
      </Head>
      <section className="h-screen bg-[#577360] text-[#020203] text-lg sm:text-2xl py-16 sm:py-24">
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#020203] rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">Malaria prevention at a refugee settlement in Sadon, Myanmar.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : Malaria is endemic to the area which hosts a settlement of internally displaced people (IDPs).</p>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#020203] rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Rainbow"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Malaria Prevention</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">This course really pushed me out of my comfort zone to be innovative and gave me a taste of the reality of starting an initiative from scratch. I felt really intimidated at first, because I never took an engineering course in my life. Although I’m interested in it, I felt like I wasn’t equipped to do such a thing. However, this course changed my perspective where it is okay if you don’t know it all. In fact, the reality is collaboration with other people from different disciplines and skills enables you to achieve a greater cause. It’s also okay to not know all the right answers or have solutions to solve the problem, because it does take time and innovation. What I learned was that critical feedback is so valuable for our malaria project. Everytime we receive a question or when we are given new information, it pushes us to consider more things from different angles. Our project wouldn’t be where we are now if we stuck with the status quo, and didn’t receive user feedback from different expertise. In addition,
my perspective for design thinking has changed a lot, where I realised how the initial stage is very important even though it may be intense. However, it really sets the tone for the whole project. I feel like our in-depth analysis of the situation in Myanmar, the prevention and treatment methods for malaria, and understanding our stakeholders’ needs really gave us an advantage for the whole project. When I first learned about the actual situation in the IDP camp, where they are unable to obtain treatment
or equipment to diagnose malaria, it really hit me how this project does have the potential to impact people’s lives. It really made me tear up thinking about how people are dying and affected by malaria, but they are unable to receive treatment or any help.</p>
          <p>So, it gave me a greater motivation to grit through the different challenges we may face, especially after our workshop #1, where the villagers showed us how grateful they are. I just feel like it really humbled me when I realized how even though we are helping them remotely, it could still make a huge difference. Therefore, knowledge and bringing change is not bounded by physical location. However, it is important to build trusting relationships with partners who can collaborate with you in a project. In the future, I would like to pursue a career like what I am doing in this project, where I’m able to help different South East Asian countries remotely in developing self- sustaining solution to tackle sustainability issues the remote or marginalised villages may face. Therefore, everything I learned in this project was valuable for me.</p>
          <p>I’m truly grateful for my team. First of all, it is really cool how our team has diverse background in terms of ethnicity (we consist of people from Hong Kong, Korea, Brunei, and Cambodia), the discipline we specialise in (Chemical and Biological Engineering, Computer Science, and Environmental Management and Technology), and even in terms of personalities. I feel like all of us really did bring in our own flavour and uniqueness into the project as we discussed how to progress with the project. I learned a lot from all my groupmates from school of engineering, whether it’s with making the chemical aspect of the repellent or even using the software designing the mosquito chamber. Hopefully, I get to continue to learn from them and develop the engineering skills they have as well.</p>
        </article>
      </section>
      <section className="bg-[#577360] text-[#fffef7] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Gabriel"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Malaria Prevention</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">This group project was a meaningful and rewarding experience that I would not have envisioned at the start of the course. Initially I joined the course predominantly because of the practicality rather than the altruistic aspects. However as the project progressed, I found myself more involved and committed to providing support to the IDP camps, especially after understanding and emphasizing their circumstances. On an academic level, I was able to learn hardware skills using the tools in the dry labs and rendering softwares; however the most important skill I learned was adaptability and persevering through different limitations to provide realistic and relevant solutions.</p>
          <p>While I thoroughly enjoyed the entirety of the course, there were moments when I felt frustration. Initially from our existing literature research, our team managed to identify the various approaches that NGOs and researchers in similar environments have implemented to reduce malaria incidences. However, after drafting our initial solution proposal, we were set-back by the sheer limitations imposed on providing support to the camp. Both the ongoing covid situation and military coup in the area prevented any import of goods and services as a solution.</p>
          <p>Furthermore, the absence of data in IDP camps due to location and anonymity reasons exposed the difference in our perception versus the reality of the malarial incidences in the camp. These revelations forced me to really reconsider my approach to the project. At the core these are real people with real needs and solutions need to be carefully designed to cater to their specific needs.</p>
          <p>Once our team gained more clarity on the situation and readjusted our approach, we managed to design a solution where we can guarantee delivery to the IDP camp. I was still skeptical about the plausibility of our solutions and whether our proposals can actually be done (i.e repellent/ pharmacognosy guide) and more importantly, would they really imprint a positive change to address the malaria situation. Everything we proposed needed to be relevant and successful; I was scared of disappointing the villagers and the partners expectations. Therefore, after the workshop when we received the feedback from the villagers, I was instilled with both relief and fulfillment. Just being able to provide meaningful support to the villagers through all their turmoil is rewarding.</p>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Yanna"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Malaria Prevention</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">This group project throughout the experience gave me an unforgettable and special experience, unlike other normal school projects. I could not imagine having to work on real life projects with NGOs and affected groups in a school course before taking this course. The course not only taught us textbook knowledge but provided us with the opportunity to implement them in real-life situations and actually utilizing what we have learnt to help people in need. It seemed to be a normal experiencing- course at first, now, it feels more like a commitment and responsibility to the Myanmar community and people living around malaria, to carry on what has been started, being the helping hands and accompanying them through the journey to eliminate malaria.</p>
          <p>The course did make me grow a lot, but it did not come in an easy way. Thanks to the team, I had an easy time on communication and teamwork. However, it does take me some time to adapt into the quite intense environment. The first time I realized that was during the first meeting with Ling from the Cedar Fund. We did our presentation on the progress and listened to Ling’s description of the on-site situation, with her questions and saying that she is having expectations on us to help the villagers, I started to feel a bit nervous. The kind of nervousness is not that we did not prepare our work well or we are not doing our parts right, but I started to doubt myself whether I am ready and am confident to really implement something to help the others. The minute before, I was like no other students taking a project course, the other, a responsibility and expectation had come over my shoulder.</p>
          <p>Soon, with more research, work, and meetings, we improve the toolkit, repellent, and even hold workshops with local villagers in Myanmar IDP camp. Hearing their positive feedback about the help of our workshop encourages me that what we are doing
can really be helpful, and motivates me to continue working on the project after the semester ends.</p>
        </article>
      </section>
      <section className="bg-[#577360] text-[#fffef7] text-lg sm:text-2xl flex flex-col items-center py-16 sm:py-24">
        <AuthorName name="Claire"/>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2022</h2>
        <h3 className="text-sm sm:text-lg">Malaria Prevention</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-4xl">This Myanmar team and the whole project was a unique group project experience to me. Not only did I get to experience new things (speaking in front of people with a translator, researching on types of mosquitoes, boiling lemongrass leaves in oil etc.) but I got to learn “commitment”. Somewhat similar but different with my Final Year Project, I had to search for suitable literature and double check whether we can implement the same in the village. To pitch the best solution to the villagers while considering all the cultural, geographical and seasonal situations, the group had
to communicate more frequently than any other courses. Apart from this Myanmar project, I ensure all the students taking this course have learned “commitment” when they are required to set their own timeline, goals then internally check whether they are on the right track.</p>
          <p>The project actually taught me hands-on methods to contribute to global health. Before taking the course, I always naively thought there would be some ways to support people suffering with global health. Now I appreciate people who have been participating actively on political, environmental and health issues.</p>
          <p>Thanks to my team, this project was a meaningful experience. However, I would
say it wasn’t always a happy and easy course. Since our team’s decisions and ideas could affect the whole village, we wanted to be fast but accurate, which doesn’t come together easily. I was torn between being accurate academically and being flexible based on the villager’s sharings. The resources that our team could get were some photos and infrequent zoom meetings. I genuinely thought finding a perfect-fit literature review would give a better picture of the cases,
therefore over-relied on academic reviews. Professor Ying’s question
during the 1st internal check, asking me whether I am sure that the
actual world would be the same with the literature review, evoked me
and made me find a good balance.</p>
          <p>Considering that the target is an IDP camp, our group has suggested self-prevention methods to the village. However,
it would be great if we can also come up with a method where we can increase the awareness on the issue or work on long-term medicine delivery routes. I would always be looking forward to zero malaria in the village.</p>
        </article>
      </section>
    </Layout>
  )
}