import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Motto() {
  return (
    <Layout
      prevPageHref="/preface"
      nextPageHref="/design-thinking"
      className="w-full h-full text-[#142a44]">
      <Head>
        <title>Motto</title>
      </Head>
      <div className="hidden md:block h-screen w-screen bg-cover bg-no-repeat bg-[url('/media/motto.jpg')]"/>
      <div className="block md:hidden h-screen w-screen bg-cover bg-no-repeat bg-[url('/media/motto_2.png')]"/>
    </Layout>
  )
} 