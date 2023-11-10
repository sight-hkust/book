import React from 'react';
import Layout from '../components/Layout';


export default function Timeline() {

  return (
    <Layout
      className='w-full'
      prevPageHref='/design-thinking'
      nextPageHref='/the-footprint'
    >
      <div className='bg-[#007152] w-full flex items-center justify-center'>
        <div className='w-0.5 h-full bg-[#c5cac7]'>
          <ul className='flex flex-col h-full justify-around'>
            {
              ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', 'NOW'].map(year => (
                <li key={year} className='w-1 h-48 -ml-[7px]'>
                  <span className='h-4 w-4 bg-[#c5cac7] rounded-full absolute mt-1'></span>
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