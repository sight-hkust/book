import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Chapters() {
  return (
    <Layout
      prevPageHref="/"
      nextPageHref="/preface"
      className="bg-[#fffef7] w-full h-full text-[#142a44] pt-16 sm:pt-24">
      <Head>
        <title>Chapters</title>
      </Head>
      <div className="w-5/6 sm:w-4/5 mx-auto">
        <h1 className="uppercase font-bold text-2xl sm:text-4xl">index</h1>
      </div>
      <div id="index" className="text-[#142a44] sm:text-2xl flex w-5/6 sm:w-4/5 justify-evenly mx-auto">
        <ul>
          <li className="my-16">
            <Link href="/preface" className="flex items-center">
              <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
              <span>Preface</span>
            </Link>
          </li>
          <li className="my-16">
            <Link className="flex items-center" href="/timeline">
              <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
              <span>Timeline</span>
            </Link>
          </li>
        </ul>
        <ul className="mt-8">
          <li className="my-16">
            <Link className="flex items-center" href="/motto">
              <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
              <span>Motto</span>
            </Link>
          </li>
          <li className="my-16">
            <Link className="flex items-center" href="/the-footprint">
              <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
              <span>The<br/>Footprint</span>
            </Link>
          </li>
        </ul>
        <ul className="mt-12">
          <li className="my-16">
            <Link className="flex items-center" href="/design-thinking">
              <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
              <span>Design Thinking</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-16 sm:mt-24 w-5/6 sm:w-4/5 mx-auto flex flex-row-reverse">
        <h1 className="font-bold text-2xl sm:text-4xl">Our Projects</h1>
      </div>
      <div id="chapters" className="text-[#142a44] sm:text-2xl text-base flex w-5/6 sm:w-4/5 justify-evenly mx-auto">
        <ul>
          {
            [
              {
                title: 'MedEasy',
                href: '/chapters/medeasy'
              },
              {
                title: 'Ms. Moringa',
                href: '/chapters/moringa'
              },
              {
                title: 'SightSeeing',
                href: '/chapters/sightseeing'
              },
              {
                title: 'Softkeyboard',
                href: '/chapters/softkeyboard'
              },
              {
                title: 'eyessistant',
                href: '/chapters/eyessistant'
              },
              {
                title: 'Pinocchio',
                href: '/chapters/pinocchio'
              },
              {
                title: 'Zi Saam Dim Sum',
                href: '/chapters/zi-saam-dim-sum'
              },
              {
                title: 'Trial & Better',
                href: '/chapters/trial-and-better'
              },
              {
                title: 'Thanks & Credits',
                href: '/attributions'
              },
            ].map(item => (
              <li key={item.title} className="my-16">
                <Link className="flex items-center" href={item.href}>
                  <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
                  <span className="whitespace-pre-line">{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="mt-8">
          {
            [
              {
                title: 'Drug\nDispensing\nBox',
                href: '/chapters/drug-dispensing-box'
              },
              {
                title: 'Sip-n-Puff',
                href: '/chapters/sip-n-puff'
              },
              {
                title: 'Foresee',
                href: '/chapters/foresee'
              },
              {
                title: 'Lavatory\nManagement\nSystem',
                href: '/chapters/lavatory-management-system'
              },
              {
                title: 'Pace It',
                href: '/chapters/pace-it'
              },
              {
                title: 'Space Design',
                href: '/chapters/space-design'
              },
              {
                title: 'Malaria\nPrevention',
                href: '/chapters/malaria-prevention'
              },
              {
                title: 'Behind\nthe Scene',
                href: '/behind-the-scene'
              },
            ].map(item => (
              <li key={item.title} className="my-16">
                <Link className="flex items-center" href={item.href}>
                  <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
                  <span className="whitespace-pre-line">{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="mt-12">
          {
            [
              {
                title: 'Diabetic\nRetina\nDetection',
                href: '/chapters/diabetic-retinopathy-detection'
              },
              {
                title: 'Dr. Level Up',
                href: '/chapters/dr-level-up'
              },
              {
                title: 'ENGG1300 - \nReducing digital\ndependency\namong children',
                href: '/chapters/reducing-digital-dependency-among-children'
              },
              {
                title: 'Hand Hygiene\nand\nSoap Production',
                href: '/chapters/hand-hygiene-and-soap-production'
              },
              {
                title: 'CollaBox',
                href: '/chapters/collabox'
              },
              {
                title: 'Feed You Well',
                href: '/chapters/feed-you-well'
              },
              {
                title: 'Environmental\nAwareness in\nSri Lanka',
                href: '/chapters/environmental-awareness-in-sri-lanka'
              },
              {
                title: 'Epilogue',
                href: '/epilogue'
              },
            ].map(item => (
              <li key={item.title} className="my-16">
                <Link className="flex items-center" href={item.href}>
                  <div className="bg-[#142a44] sm:w-8 sm:h-8 w-4 h-4 rounded-full mr-3 sm:mr-5"></div>
                  <span className="whitespace-pre-line">{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}