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
      prevPageHref="#"
      nextPageHref="/chapters/drug-dispensing-box"
      className="w-full">
      <Head>
        <title>MedEasy</title>
      </Head>
      <section className=" bg-[#182a46] text-white text-lg sm:text-2xl py-24">
        <Image className="mx-auto w-4/5" src="/covers/medeasy.png" width={1448} height={964} alt=""/>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <p className="w-5/6 sm:w-4/5 mx-auto">An electronic health record system for mobile clinics, complete with a smartphone app, a local Raspberry Pi-based server and online reporting portal.</p>
        <p className="w-5/6 sm:w-4/5 mx-auto mt-16">The problem : <strong>One-2-One Cambodia</strong> is a medical NGO that conducts mobile clinic outreach in the slums of Phnom Penh and the provinces of Cambodia. Their old way of storing patient records is via paper, which is cumbersome and susceptible to damage.</p>
        <div className="flex justify-center my-16">Awards</div>
        <dl className="flex flex-col mx-auto w-5/6 sm:w-4/5 mt-8 sm:mt-16">
          <dt className="font-bold">1st Prize</dt>
          <dl className="text-base sm:text-xl">(Rice 360° Undergraduate Global Health Technologies Design Competition)</dl>
        </dl>
        <dl className="flex flex-col mx-auto w-5/6 sm:w-4/5 mt-8 sm:mt-16">
          <dt className="font-bold">Silver Award, Best Social Impact Award</dt>
          <dl className="text-base sm:text-xl">(Chun Wo Innovation Student Awards)</dl>
        </dl>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-white rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.split('/').slice(-1)}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <AuthorName name="Jonathan" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2015</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">Greetings to former, current, and prospective SIGHT members alike! It has certainly been a long while since my days as a member of the SIGHT team, back when I was an undergraduate student at HKUST. Thus, when Malinda contacted me inviting me to be part of this book project, I was both honoured and mildly worried. The latter feeling of course, arose from the fact that there is this 4-5 year gap that has certainly tainted and muddled my memories of exactly what I was up to those number of years ago.</p>
          <p>I do remember that I was part of the Cambodia team, in which we tried to implement a mobile app for healthcare workers and medical volunteers to use to document health information for people living in poor conditions within the many slums scattered around Phnom Penh (we used to call that project “EasyMed”, and then it became “MedEasy”, but I’m not sure what you guys call it now!). Looking back it was certainly challenging to have been taking part (as a person who knows very little in coding) in a project that in essence requires coding knowledge to work. Thus my efforts were mainly focused on the user experience, to try and understand the healthcare workers’ needs in helping them streamline their medical services. Another part of the challenge was to design a portable storage unit to place 3 main pieces of equipment: a router for wifi services in the slums, a raspberry pi essentially for data storage, and a power bank to ensure the first two are running.</p>
          <p>I participated in two weekly-long field trips (one in June 2016 and the other in June 2017), whose aim was to implement the project and see how it functions in a real- life situation. Having been fortunately equipped with a plethora of photographic evidence (as well as a number of embarrassing video clips of my mug, which I am not keen to highlight!) documenting these two events, I will thus take you readers on a pictographic journey of the early days of this “Electronic Health Record System” project...</p>
          <Image className="mx-auto w-2/5" src="/artworks/jonathan.png" width={644} height={662} alt=""/>
          <div className="flex flex-wrap justify-around">
            <p className="w-1/2">This photo was taken in the early days of the field trip. A big part of the implementation challenge was to teach the healthcare workers how to use the mobile app, and how to set up the “EasyMed Box” (the purple contraption on the left). This office space also serves as the headquarters in which after each trip to the slum we discuss on what went well, what went awry, and how we can improve in the future.</p>
            <p className="w-1/2">Here is a shot of one of the slums we volunteered in; at that moment we were helping to set up the so-called “triage, consultation, and pharmacy” stations. I do remember the smell being a mixture of rotting food waste and burning plastic, with
a slight hint of sewage (very pleasant!). This just gave us a glimpse of the harsh reality of the conditions many of these people have to live in. I felt that being empathetic towards the situation in which these slum-dwellers experience daily contributes to the project’s success.</p>
            <p className="w-1/2">When the clinic is in full force, we take turns teaming up with a healthcare worker to assist them with using the mobile app. The challenge here was to note down any potential issues with the user experience and workflow whilst ensuring they perform a smooth and efficient checkup on their patients. The sweltering Cambodian summer sun certainly did not help in this case!</p>
            <p className="w-1/2">Since this was our first time visiting Cambodia,
we treated ourselves to a day trip cycling around Cambodia’s rural areas. This is a photo of us in the middle of sampling the country’s fine cuisine; I myself am quite partial to “Amok trey”, which is pieces of fish gently poached in a delicate spicy coconut curry sauce encased in a vessel made
out of banana leaves. Unfortunately, I do also distinctly remember afterwards being the only victim of a case of food poisoning in which I was denied the opportunity to visit the capital’s tourist destinations.</p>
            <p className="w-1/2">Us SIGHT members were helping to carry some equipment to a slum. The healthcare workers essentially run a mobile clinic in which they drive to the slum, rather than a more typical case
in which the patient travels to visit the doctor. Having had a one-year opportunity to improve the project, the situation is similar here: each team member partners with a healthcare worker and tries to understand where the app works and what didn’t work so well. During the non-zero number of times a bug appeared in the app the healthcare workers were quick to switch to their old, paper-based system: it was also a hurdle to try and convince them to keep their faith in our project!</p>
            <p className="w-1/2">This is a shot of the “pharmacy station”, which is the last station patients visit after they go through consultation. Part of the app’s features (if I remember correctly) is to document the type and dosage of medicine administered to the patient, as well as to keep a log of their current supply.</p>
            <p className="w-1/2">This photo shows the dedication the team puts into the project. Even late into the night we are making improvements on the user experience, communicating with the backend developers on the medical volunteer’s needs, and preparing for the next day’s events. This was also the time in which we reflected on what we experienced and how we felt (I do remember “empathy” as being a key component of the design-thinking process that SIGHT advocates).</p>
            <p className="w-1/2">I am happy to report that this time I did not suffer any stomach ailments and did manage a chance to visit some of Phnom Penh’s attractions: this is the Royal Palace of Cambodia.</p>
          </div>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <Image className="mx-auto max-w-sm w-2/5" src="/artworks/ziuwin.png" width={644} height={662} alt=""/>
        <AuthorName name="Ziuwin" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2016</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">SIGHT is a very hands-on and interdisciplinary programme, bringing people from different fields together with the same goals in making the world a better place. I
think one of the biggest challenges and learnings I had back then was having effective communication and understanding the value of teamwork. Everyone being from different backgrounds, it was hard in the beginning to work as a team as everyone
had their own perspectives they want to explore. Our solutions were just all over the place, however once we realized the value of having different perspectives when problem solving, our ideas started becoming more “out of the box” and eventually
led to MedEasy despite having no background in any hardware or UX or biometrics or computer/software engineering. That said, my whole SIGHT journey has really taught me to open up my mind and consider other perspectives and views, while thinking critically, which helped me see the bigger picture and find a solution that covers all criteria when faced with a problem.</p>
          <p>One of the most memorable moments throughout my SIGHT journey was probably during and after the implementation trip. Being able to work alongside Dr. Soursdey and the other medical staff, and teaching them how to use the MedEasy system we created, I felt very inspired and motivated to see how far our team has gone and that our solution can actually make a difference. From there, it was hard not to think about what other possible solutions we can come up with on improving their health and well-being, and the possibilities of reducing the cost of healthcare so it would be more affordable for everyone, especially in the developing worlds.</p>          
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <Image className="mx-auto max-w-sm w-2/5" src="/artworks/oscar.png" width={644} height={662} alt=""/>
        <AuthorName name="Oscar" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2017</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">It is never effortless to work on a SIGHT project, especially for a freshman like me in
the past. I have no experience totally in working on such a large-scale, cross-disciplinary project before. Students are expected to handle a lot of readings and meetings understanding of the topics before weekly meeting in the SIGHT program. Looking back, I realized I had changed a lot after joining the SIGHT program. Thanks to all the difficult tasks and challenging presentations, I learned how to think with a more flexible mindset and always stay hungry for knowledge. One should never be limited within
their comfort zone or major field. SIGHT project requires students to work with people from different cultural or academic backgrounds and cooperate together to have an innovative idea to solve real-world problems. SIGHT has absolutely revolutionized the way I think and look at things. Before working in SIGHT, I didn’t know working with people from different backgrounds is that important since I always imagine that only groups of professionals with similar expertise can change the world. However, it is totally wrong, nowadays, most of the problems need expertise from diverse areas to cooperate and work together to solve the problems. Teamwork and an innovative mindset have become one of the most crucial skills in the 21st century. To conclude, my experience
in SIGHT is truly amazing and unforgettable. I will never forget all my memories, be it good or bad.</p>
          
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <Image className="mx-auto max-w-sm w-2/5" src="/artworks/charlie.png" width={644} height={662} alt=""/>
        <AuthorName name="Charlie" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2018</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">“Why are you creating this product? ”</p>
          <p>Asked the investor sitting right in front of me after hearing my pitch for almost 60 minutes. I couldn’t remember how many times I have been challenged with this question, no matter how confident I am or how many slides I have prepared, I always felt like I didn’t answer this question perfectly. I tried to rephrase and emphasise my features and business model again and again, but I could always feel that it was not what they really want to hear.</p>
          <p>“Excuse me?”</p>
          <p>His voice brought me back from my introspection. I reviewed all my content in my mind again and got ready to repeat my points, but he kept saying.</p>
          <p>“Or just in general, why are you starting to create this product?”
That’s right. The farther I go, the longer I forget to ask myself: Why did I start? Where did I start?</p>
          <p>Is the time I wrote the first line of code? Is the time I got the first product to pitch on the stage? Is the time I won the first prize in the competition?</p>
          <p>No, I think it is the first time I saw the people in Cambodia using an app called MedEasy.</p>
          <p>That is where all the stories begin.</p>
          <p>I still remember I got the first call from SIGHT when I am outside a barber’s shop eating fish ball in the summer of my sophomore. At that time there is still a month till my internship starts, so I just looked around in my mailbox to find something to do. Then I saw the email from SIGHT for recruiting the members for the next semester, I have never heard this name before, so I apply for the interview just want to see who they are. A week later, I went for the interview, I still remember there are four interviewees in my group, and I can clearly tell there are three of them are smarter than me. But still, I get to know who SIGHT are and what they do for the first time, which is actually good enough for my curiosity at that time already. But a week later, there is an unknown number calling my phone, so I picked it up.</p>
          <p>Two weeks later, I was in Cambodia.</p>
          <p>I still remember the first time I walked out from the airport and looked around, it is still like a dream: I am in a group I know nobody and, in a place, I can’t even pronounce the name to let my family know where I am, to do a project I know nothing about, which still sounds like a dream to me now. But later when I followed them to meet their partner and go to different places for testing their product, I start to understand what they are doing and the problem they are solving.</p>
          <p>Cambodia is one of the places that are under serious needs of medical resources, lots of people just cannot get the proper diagnosis and treatment even if they are having some serious medical situations, even worse, because of their financial situation, they have to stay in slum, where the hygiene problem is even more serious. But there are some nice volunteers with their NGOs willing to provide free clinic to the people in need, they will go to these slums to provide such services to the people there and help as much as they can. But still, due to the lack of the resources and the environment, it is still very hard for them to do free clinic with the people. And that is where MedEasy gets in.</p>
          <p>MedEasy is a mobile app developed by SIGHT and its student group for leveraging the difficulties of recording and storing data in the rural area in digital way, which can help the volunteers and doctors to easily perform the diagnosis. It uses some smart ways to support the whole system which is still very smart even comes to today: It uses a cross- platform mobile framework for supporting both iOS and Android and use raspberry
pi for supporting the data sync without network, and a well-design user flow of the application for adapting volunteer’s current workflow. I can see how these components come together which serves as a wonderful solution for assisting the doctors and their NGOs.</p>
          <p>Actually, before this, I have been volunteering for a long time: I had been on a
          service trip in Nepal, coordinated a service trip in Sri Lanka. But this trip, this trip is so much different from what I have experienced from my previous volunteering. I love volunteering, because I believe in delivering value by helping, I believe that, if you
          can do something and it can help others, this will get you and provide others so much more values than itself. But when I see this project, I find out that: when you are doing something that you are good at and love to do, at the same time, it can help much more people and make greater impact with your skills, that satisfaction is just beyond anything.
          </p>
          <p>I still remember when Kris, the app developer for this project, said that “I am here because I know the stuff, I am making is helping others”, it reshapes my whole idea on my skills and delivering values. It is about creating things that can help others.</p>
          <p>When all the feature goes away, when all the technology fades out, when all the business model loses meaning, I hope, my product can help someone, even if it is just a piece of small stuff or simple technology, I am hoping the impact it can make, can last as long as it exists.</p>
          <p>I told this story to the investor that day. Actually, I couldn’t remember how many times this story has been told, because SIGHT is the place that starts my whole journey on this road.</p>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <AuthorName name="Dawn" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2016</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">SIGHT has been one of the most founding memories of my undergraduate life.
The hands-on experience of applying technology to real-life problem inspired me to become a researcher. I participated in the “MedEasy” project, which aimed to help the NGO doctors that provided free medical service for patients from the slums in Phnom Penh, Cambodia. Our team designed a comprehensive electronic medical record system (EMRS) that digitalized the entire consultation process. The EMRS reduced cumbersome binders of patient history into a light and portable hardware device that could be simply operated using smartphones.</p>
          <p>The hardest and the most valuable lesson this experience taught me was that there isn’t a solution manual for the real world problems. As a young science student who was used to solving for the “correct answers”, my initial experience at SIGHT was truly anxiety- inducing. However, through the process, I learnt that the lack of answer is exciting: it creates opportunities for innovation. I realized that I enjoy tackling the unknown and the difficult questions, and my passion for innovation perpetuates till today.</p>
          <p>SIGHT also showed me that interdisciplinary collaboration is the trend for the future. My current project as a Chemistry PhD student requires interdisciplinary skill from Chemistry, Physics and computer science. As a result, I often communicate and work with people from various disciplines. The experience of developing the EMRS prepared me for
my current work for research. The EMRS requires talents from the computer science department for coding the software; mechanical and electrical engineer students to design the hardware box; business and humanity students to be the middle person and communicate with the end users; graphic designers to design the user interface. Our final EMRS product was the result of literature reviews, endless meetings, collaboration with professors and the NGO, and countless failures before we went on the right track. MedEasy couldn’t be developed without collaboration.
</p>
          <p>In 2018, after I returned from my exchange in Canada, I became a SIGHT leader. This experience helped me to develop leadership and communication skills that is beyond what could be learnt in a classroom setting. I mentored the new members to continue with the MedEasy project, and at the same time, fostered newly established projects in SIGHT. I truly enjoyed being a mentor, especially when I was promoting projects and ideas that could make actual positive impacts on communities. I guided the new team to when they were unsure about their direction. It was difficult to keep everyone motivated for the project. Through this experience, I learnt that leaders have to “walk- the-talk”: I had to be the leading example of keeping the work up even when the mentees felt unmotivated and dropped behind. I learnt that leadership is a balance between insisting what was right but also listening and adjusting to different opinions. I understood that the capability of one person is limited, however, an astounding product could be accomplished with the collaboration among a diverse group of specialists. Great leadership and collaboration is impossible without good communication. I learnt to express my ideas more clearly and customized for the target audience.</p>
          <p>I truly cherish my time working with SIGHT, it inspire my current career path as a researcher and I made lovely and life-long friends. I miss traveling with my blue-shirted sweaty friends. May the pandemic be over soon.</p>
        </article>
        <Image className="mx-auto w-1/3 sm:w-1/6 max-w-md" src="/artworks/dawn.png" width={644} height={662} alt=""/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <AuthorName name="Fernando" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2016</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">Having spent 4 years at SIGHT, I am quite qualified to say SIGHT is constructed by selfless efforts and very voluntary. I joined SIGHT camp just to discover new things, with
no expectations of the program. The application process involved a group interview with a problem-solving task. The teaching team was interested in how we would go about solving the problem, rather than the result itself. From then, I have always seen SIGHT as a creative space and a very exciting project to be part of. It gathers like-minded people to look at various health challenges, and eventually welds ideas and solutions. It helps people, it improves the wellbeing of communities, what more could you ask for?</p>
          <p>On a rather macro scale, SIGHT’s role is the union of disciplines for a social impact. It brings together people of different backgrounds to form interdisciplinary teams, hoping to use technology in a smart way. “Simple technology, BIG difference,” our slogan is really true. Some of the technologies we use might not even fall within our traditional conception of technology, but with innovation and by putting them into the right social context, they can be very powerful.</p>
          <p>SIGHT means a lot to me for two reasons. First, I could bring my unique skillset to play
an impactful role in the team. As a social science student working among engineers and scientists, I forced myself to look at problems in a way my other teammates would not. I pushed forward the inclusion of end users. A way to achieve this is by acknowledging the high degree of context specificity of our projects, which could be easily missed if one becomes overly obsessed with the technology. I think every team should have a social scientist who looks into the political, social and cultural context to make sure we are making real, and not just perceived impact.</p>
          <p>SIGHT also shaped the way I work as a public policy specialist today. SIGHT’s work ethos and perspective aligned very well with how I want my work to be done from a social science angle. We are constantly making sure whatever we are building is actually impactful, which resonates with me really well. Of course, I also got to pick up really cool technical skills and work with really cool people.</p>
          <p>My journey at SIGHT did not stop at MedEasy. As a SIGHT leader, I was able to build internal connections within SIGHT and take part in the learning process of SIGHT itself. One of the most important tasks for leaders is helping new campers arrive at their own ideas without giving them away. The hardest part is letting our experience guide us, but not blind us. Initially we had a fingerprint scanner on MedEasy, but it did not work, so we had to find a replacement biometric. We decided on an iris scanner. which actually worked much better than expected and avoided many problems that would have surfaced with the fingerprint scanner. This story proves that new and untested ideas are not bad, and our existing ideas are not necessarily good. Staying open and allowing things to happen is vital in keeping our projects organic and constantly improving.</p>
          <p>Embracing spontaneity does not mean giving up on thinking entirely. The more sophisticated SIGHT is, the easier it is to be stagnant. It takes constant questioning on everything to keep us on our toes, ready to adopt something better. Is this the right way to approach the problem? Is it the best way to do it? I made a conscious effort of trying to do something different throughout the four years. They say you should leave things in a better state than you found them. I guess that had kept me going, and I think I did make a positive difference.</p>
        </article>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <AuthorName name="Kevin" />
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2015</h2>
        <h3 className="text-sm sm:text-lg">MedEasy</h3>
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">One of the best experiences I’ve had was the SIGHT Scholar 2017 program, where we spent 3 weeks – in Phnom Penh, Cambodia – observing the implementation of a mobile healthcare registration system with our Cambodian NGO partner, One-2-One. For me, especially as someone coming from a social science background, this was a really good opportunity to experience, and put into practice, the art of “fieldwork observation”. Sounds fancy, eh? It’s actually a pretty straightforward qualitative method, where all
you do is to make yourself present in a situation, observe the surrounding, and make notes about what you see. Throughout this 3-week program, we worked closely with
our partners on implementing the system in their daily visits to clinics and community centers, detecting potential technical ‘bugs’, and liaising with the SIGHT core team in Hong Kong about debugging these issues. But, these were only a part and parcel of our story.</p>
          <p>An insightful takeaway from this 3-week journey has been the chance for us to exchange personal stories, thoughts, and experiences with not only our One-2-One partners,
but subsequently our friends too (not just Facebook friends, mind you!). It is also an occasion for us to get to know better about Cambodia, the country’s tumultuous history, its society, culture, current challenges, but also the aspiration of some of the people we’ve met and interacted with throughout the program. There’s the story of Channat,
a core programmer for the NGO who has been working with us closely in addressing some of the technical issues with the system. His life story is no less inspiring: in spite
of growing in a poor background, Channat defied all odds to receive education (and thus his expertise in programming). Thank you for your inspiration. Then there come
the doctors: Soursdey, Sophen, and Nhoel. Thank you for allowing us to ‘bug’ into your work, and despite your busy schedule, spend some time cracking jokes with us. And also for other staff at One-2-One: thank you to Lila and Laihorng for teaching us how
to cook Cambodian dishes, to Konnga for bringing us to taste Cambodian street food, and – apologies for starting to forget some names after all these five years! – countless others who have made our three-week stay felt like home! We also want to thank Empowering Youth in Cambodia (EYC) and Synoeun for helping to facilitate the design- thinking workshop in their school, and giving us detailed understanding about the neighborhood the school is located. And, no less important: thank you to Vaishak and Jonathan for the close-to-3-week company we had for the SIGHT Scholar 2017 program. Look forward to visiting Cambodia again (together) in the near future!</p>
        </article>
        <Image className="mx-auto w-1/3 sm:w-1/6 max-w-md" src="/artworks/kevin.png" width={644} height={662} alt=""/>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] text-2xl flex flex-col items-center py-24">
        <article className="text-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">One-2-One has been working with SIGHT for 7 years. We are very happy to have SIGHT’s help and to see them improved and updated every time they come back. We learned a lot from each other and we are grateful to have students who are dedicated and always work hard to make what we need.</p>
          <p>The most valuable project to us has been MedEasy. Before using MedEasy, we had to carry stacks of files with lots of paper for documentation into our clinics. With MedEasy, we no longer have to carry heavy stacks of paper, we can just do everything on a phone. It is now a lot easier to input and search for data. It also connects our pharmacy, consultation and _ teams in one single system, something that we did not know we could do. While our colleagues use the app frequently, it often takes a long time to train the volunteers at our clinic as they do not know how to use it. As we always have different volunteers coming in, the training could be challenging.</p>
          <p>On the technical side, we have experienced some problems with the app. Sometimes the app does not work, and we still hope that the app could store records and generate reports on demand. There is a need for continuous support from the SIGHT team, but it has been hard since we cannot travel because of COVID-19. We hope that COVID-19 will be gone soon so that the SIGHT team can come back and help us with MedEasy again.</p>
          <p>Another SIGHT project that we had is Healthy Snacks, for which SIGHT students came up with a new snack for the children in the community. It was a good snack, but only half of the children liked it. The kids here liked sweet food, and the Healthy Snack was not sweet enough for them. We think it is equally important to change the idea of the students - why is it called a “healthy” snack? Why is it better than the other snacks in the market? Apart from coming up with a good snack we will also have to educate the children on what is good for their health. It takes time to change their mindsets, but the children still had a wonderful time playing with the SIGHT team.</p>
          <p>It is always fun to talk to SIGHT students, and we are thankful that they brought new insights to us. We used to rely heavily on paper, but with technology we were able to reach more people in a way we had never imagined. MedEasy is solid proof that we should think outside the box and never limit ourselves to what we know. We also saw perseverance in SIGHT students, and they constantly remind us to keep trying and never give up on a problem.</p>
          <p>It has been an enjoyable and rewarding journey with SIGHT, and we hope that we could see the team again soon!</p>
        </article>
      </section>
    </Layout>
  )
}