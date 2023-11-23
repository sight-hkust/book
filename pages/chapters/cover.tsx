import Layout from "../../components/Layout";
import Head from "next/head";

export default function Cover() {
  return (
    <Layout
      prevPageHref="/the-footprint"
      nextPageHref="/chapters/medeasy"
      className="w-full">
      <Head>
        <title>Our Projects</title>
      </Head>
      <div className="flex flex-row md:flex-col w-full h-full">
        
      </div>
    </Layout>
  )
}