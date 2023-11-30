import React from 'react';
import Head from 'next/head';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Layout from '../components/Layout';
import Image from 'next/image';


const events = [
  {
    year: '2014',
    remarks: [
      {
        title: 'Scouting trip to Camdoia & meeting with One-2-One',
        thumbnail: 'scouting-1.jpeg'
      },
      {
        title: 'Course BMED4950A established',
        thumbnail: ''
      },
      {
        title: 'SIGHT Officially founded',
        thumbnail: 'founded.jpeg'
      }
    ],
    description: '',
  },
  {
    year: '2015',
    remarks: [
      {
        title: 'Collaborate with HKMPS, Guizhou Communist Youth League and Helen Keller International (HKI)',
        thumbnail: 'diabetic-retinography.jpg'
      },
      {
        title: '1st SIGHT Camp',
        thumbnail: 'sight-camp.jpg'
      }
    ],
    description: '',
  },
  {
    year: '2016',
    remarks: [
      {
        title: 'Partnership with Universities Gadjah Mada (GMU), Indonesia',
        thumbnail: 'GMU-1.jpg'
      }
    ],
    description: '',
  },
  {
    year: '2017',
    remarks: [
      {
        title: 'Contact with Seal of Love (SoL), Hong Kong Red Cross John F. Kennedy Centre & Homestay Volunteer Teachers Organization (HVTO), Siem Reap, Cambodia',
        thumbnail: 'seal-of-love-1.jpg'
      },
      {
        title: 'Team up with CUHK Eye Centre',
        thumbnail: 'cuhk-eye-1.jpg'
      }
    ],
    description: '',
  },
  {
    year: '2018',
    remarks: [
      {
        title: 'ENGG4930(A)',
        thumbnail: 'engg4930a-1.jpg'
      },
      {
        title: 'Work with Caritas Lok Kan School, Salvation Army & The Joint Shantou International Eye Center(JSIEC)',
        thumbnail: 'shantou-jsiec-1.jpg'
      }
    ],
    description: '',
  },
  {
    year: '2019',
    remarks: [
      {
        title: 'SIGHT Camp Winter Intensive January',
        thumbnail: 'winter-camp-1.jpg'
      },
      {
        title: 'ENGG1300',
        thumbnail: ''
      }
    ],
    description: '',
  },
  {
    year: '2020',
    remarks: [
      {
        title: 'Cooperate with TEA Project, Sri Lanka',
        thumbnail: 'tea-project.jpg'
      },
      {
        title: 'Hack Viral!',
        thumbnail: 'hack-viral-1.png'
      },
    ],
    description: '',
  },
  {
    year: '2021',
    remarks: [
      {
        title: 'UGC Teaching Award Finalist',
        thumbnail: 'UGC-1.jpg'
      },
      {
        title: 'Gen Z Trial & Better Class',
        thumbnail: 'trial-better-2.jpg'
      }
    ],
    description: '',
  },
]

export default function Timeline() {

  return (
    <Layout
      disableProgress={true}
      className='w-full'
      prevPageHref='/design-thinking'
      nextPageHref='/the-footprint'
    >
      <Head>
        <title>Timeline</title>
      </Head>
      <Splide className='bg-[#007152]' options={{
        wheel: true,
        direction: 'ttb',
        height: '100vh',
        arrows: false,
      }} aria-label="SIGHT Timeline">
        {
          events.map(({year, remarks}) => (
            <SplideSlide className='p-8 md:p-16' key={year}>
              <span className='text-[#c5cac7] font-bold text-4xl mb-4 md:mb-0'>{year}</span>
              <section className='flex items-center justify-center w-full h-full'>
                <ul className='w-full md:w-1/2 h-full mt-16'>
                  {
                    remarks.map(({ title, thumbnail }) => (
                      <li key={title} className='flex w-full h-auto md:h-[260px] items-center my-8 md:my-12'>
                        <div className='flex flex-col items-center'>
                          <span className='bg-[#c5cac7] w-4 md:w-8 h-4 md:h-8 rounded-full'></span>
                        </div>
                        {
                          thumbnail.length>0?(
                           <div className='ml-8'>
                             <Image className={`w-[240px] md:w-[320px] h-[120px] md:h-auto rounded-3xl shadow-xl mb-4`} style={{objectFit: "cover"}} src={`/media/timeline/${thumbnail}`} alt={title} width={320} height={160}/> 
                             <span className='text-[#c5cac7] text-sm md:text-2xl'>{title}</span>
                           </div>
                          ):<span className='ml-8 text-[#c5cac7] text-sm md:text-2xl'>{title}</span>
                        }
                      </li>
                    ))
                  }
                </ul>
              </section>
            </SplideSlide>
          ))
        }
      </Splide>
    </Layout>
  )
}