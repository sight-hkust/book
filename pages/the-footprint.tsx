import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

interface RegionProjectsGroupProps {
  label: string;
  projects: string[];
}

function RegionProjectsGroup({ label, projects }: RegionProjectsGroupProps) {
  return (
    <div className="flex items-center my-16 text-[#482329]">
      <span className="h-10 w-10 rounded-full font-bold text-white bg-[#482329] flex items-center justify-center">{label}</span>
      <ul className="flex flex-col ml-4 max-w-[240px]">
        {projects.map((project, index) => (
          <li key={project} className="text-sm">
            {index < 9?`0${index+1}`:index+1}.&nbsp;
            {project}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footprint() {
  const regions = [
    {
      label: 'HK',
      projects: [
        'Sip-n-Puff',
        'Softkeyboard',
        'Lavatory Management System',
        'CollaBox',
        'Dr. Level Up',
        'ForeSee',
        'Reducing digital dependency among children',
        'eyessistant',
        'Pinocchio',
        'Space Design',
        'Feed You Well',
        'Zi Saam Dim Sum',
        'Trial and Better'
      ]
    },
    {
      label: 'CN',
      projects: [
        'Ms. Moringa',
        'SightSeeing'
      ]
    },
    {
      label: 'MM',
      projects: [
        'Malaria Prevention'
      ]
    },
    {
      label: 'KH',
      projects: [
        'MedEasy',
        'Drug Dispensing Box',
        'Hand Hygiene and Soup Production',
        'Pace It'
      ]
    },
    {
      label: 'LK',
      projects: [
        'Environmental Awareness in Sri Lanka'
      ]
    },
    {
      label: 'ID',
      projects: [
        'Diabetic Retinopathy Detection'
      ]
    },
    {
      label: 'IN',
      projects: [
        'Education and Nutrition',
      ]
    },
  ]
  return (
    <Layout
      prevPageHref="/timeline"
      nextPageHref="/chapters/medeasy"
      className="w-screen md:h-screen flex flex-col md:flex-row text-[#142a44]">
        <Head>
          <title>The Footprint</title>
        </Head>
        <div className="w-full md:w-1/2 bg-[#482329] h-[640px] md:h-screen bg-[url('/media/footprint.png')] bg-contain bg-no-repeat">
        </div>
        <div className="w-full md:w-1/2 bg-[#fffef7] flex-col h-screen p-16">
          <h2 className="uppercase text-4xl font-bold text-[#B3BCB6]">the<br/><span className="text-[#482329]">footprint</span></h2>
          <section className="flex flex-col flex-wrap h-[840px]">
            {
              regions.map(region => (
                <RegionProjectsGroup key={region.label} label={region.label} projects={region.projects} />
              ))
            }
          </section>
        </div>
    </Layout>
  )
}
