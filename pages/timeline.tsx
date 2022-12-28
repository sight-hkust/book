import React from 'react';
import Layout from '../components/Layout';

export default function Timeline() {
  return (
    <Layout
      className='w-full'
      prevPageHref='/design-thinking'
      nextPageHref='/the-footprint'
    >
      <div className='bg-[#007152] h-screen w-full flex items-center justify-center'>
        <div className='w-0.5 h-full bg-[#c5cac7]'>
          <ul className='flex flex-col h-full justify-around'>
            {
              ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', 'NOW'].map(year => (
                <li key={year} className='w-4 h-4 -ml-[7px] bg-[#c5cac7] rounded-full'>
                  <span className='text-[#c5cac7] font-bold -ml-12'>{year}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
}