import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Chapter() {
  const router = useRouter();
  return (
    <Layout
      prevPageHref="/chapters/drug-dispensing-box"
      nextPageHref="/chapters/moringa"
      className="w-full">
      <Head>
        <title>Diabetic Retinopathy Detection</title>
      </Head>
      <section className="h-screen bg-[#fffef7] text-[#c12239] text-lg sm:text-2xl py-16 sm:py-24">
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#c12239] rounded border-0 md:my-10"/>
        <p className="w-4/5 mx-auto">A platform that leverages portable fundus cameras and image analysis to detect diabetic retinopathy.</p>
        <p className="w-4/5 mx-auto mt-16">The problem : Helen Keller International conducts rural diabetic retinopathy screening in Yogyakarta, Indonesia. The fundus cameras are often not portable and they lack image graders to determine whether follow ups are needed.</p>
        <div className="flex justify-center my-16">Awards</div>
        <dl className="flex flex-col mx-auto w-4/5">
          <dt className="font-bold">Gold Award</dt>
          <dl className="text-base sm:text-xl">(HKUST President’s Cup – Competition for Undergraduate Research and Innovation)</dl>
        </dl>
        <hr className="my-4 mx-auto w-5/6 sm:w-4/5 h-0.5 bg-[#c12239] rounded border-0 md:my-10"/>
        <div className="w-5/6 mx-auto flex justify-center">
          <Image className="w-full sm:w-3/5" src={`/vectors/${router.pathname.replace('/chapters/', '')}.png`} width={430} height={150} alt=""/>
        </div>
      </section>
      <section className="bg-[#fffef7] text-[#142a44] flex flex-col items-center py-16 sm:py-24">
        <h1 className="font-black text-3xl sm:text-5xl">Reynaldi</h1>
        <h2 className="font-medium text-sm sm:text-lg">SIGHT member in 2016</h2>
        <h3 className="text-sm sm:text-lg">Diabetic Retinopathy Detection</h3>
        <article className="test-base sm:text-xl w-5/6 sm:w-4/5 mx-auto flex flex-col space-y-10">
          <p className="first-letter:text-2xl sm:first-letter:text-4xl">First and foremost, I (and on behalf of the team) would like to thank SIGHT for the amazing opportunity to work together with the team for our Final Year Project (FYP). Our FYP revolved around Early Detection of Diabetic Retinopathy Disease, which highlighting the importance of this diabetes symptom’s early detection in order to prevent more life degrading conditions which that can happen should this disease not be treated in its earlier stage.</p>
          <p>In the first phase of our research, there were a lot of hurdles that we had to face before we can move on. The project required a lot of retina photo samples from diabetic patients. However, being a group of students, such information and resource was not easy for us to obtain. Partnering with SIGHT enabled us to tap into SIGHT resources and acquire the much-needed samples that would otherwise have completely blocked us from our progress.</p>
          <p>Samples are just the start of our little yet many obstacles. The topic of our research requires some basic knowledge about diabetic retinopathy, which obviously was not our strength to begin with. SIGHT helped us by tapping into its partnering network, putting us in touch with Diabetic Retinopathy and medical experts with the much- needed knowledge about the disease, the symptoms, and the way to analyse our samples. Our conversation with the experts were not just unblocking us to the next phase of our project, but also helped us understand the danger of this subtle yet dangerous situation that we might not be aware of had we not converse with such experts.</p>
          <p>SIGHT also provided us with an opportunity to work closer with the patients. Through its partnering network, SIGHT introduced us to another researcher team from Gadjah Mada University in Indonesia, which opened another door for us to further improve the quality of our project. We were able to converse directly with the frontline medical workers staff medical worker, and also interact with some real diabetic patients that are threatened by diabetic retinopathy. This experience is much more valuable than what we gathered as quantitative data. Our conversation with the patient made us understand the importance of having this disease tackled as early as possible, seeing the patients who have their vision impaired by this disease.</p>
          <p>At the end, our journey together helped us more than just to finish our final year project. As people, we grew to understand that we can help people in whatever capacity we have. We might be just a student doing research, but what we have done could help the patients get treatment early and improve their quality of life significantly.</p>
        </article>
      </section>
    </Layout>
  )
}