import React from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";

export default function DesignThinking() {
  return (
    <Layout
      prevPageHref="/motto"
      nextPageHref="/timeline"
      className="w-screen h-screen bg-[#6D403A] flex justify-center items-center">
      {/* <div className={`w-screen h-screen fixed rounded-[10px] bg-[url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='white' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`}></div> */}
      <Head>
        <title>Design Thinking</title>
      </Head>
      <Image src={'/media/design_thinking.png'} className="h-full md:w-auto w-full" width={1920} height={3422} alt=""/>
      <section className="text-[#6D403A] absolute top-20 sm:top-60 md:top-40 w-[210px] sm:w-[250px] md:w-[280px] flex flex-col items-center justify-center text-justify">
        <h2 className="font-bold text-base sm:text-lg md:text-xl mb-2 md:mb-4">Description</h2>
        <p className="text-xs sm:text-sm md:text-base">The Design Thinking Workshop is an introduction to
          the iterative design process. Using everyday examples,
          students break down problems, generate and then test
          ideas collaboratively. By experiencing the methodology
          and power of Design Thinking first-hand, students can
          then apply the approach to their own projects.</p>
      </section>
    </Layout>
  )
} 