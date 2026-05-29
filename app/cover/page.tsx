"use client";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";

export default function Cover() {
  return (
    <Layout
      prevPageHref="/"
      nextPageHref="/chapters"
      className="w-full">
      <Head>
        <title>Cover</title>
      </Head>
      <ExportedImage className="w-1/2 h-full mx-auto mt-32" src="/logo-chinese-vertical.svg" width={200} height={300} alt="SIGHT Name in Chinese"/>
    </Layout>
  )
}