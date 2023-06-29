'use client'

import { Icon } from '@iconify/react'
import { Poppins } from 'next/font/google'
import React, { useState } from 'react'
const poppinsFont = Poppins({ subsets: ['latin'], weight: '700' })

function About() {
     return (
          <div className='h-ful md:pt-28 pt-20 justify-between flex flex-col md:px-52 md:w-[100%] lg:w-[75%] -z-50 md:space-y-8 space-y-8'>
               <div className='flex flex-col md:space-y-4 space-y-6 items-center md:items-start'>
                    <div>
                         <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >About Me</h1>
                    </div>
                    <div className='text-center md:text-start'>
                         <p className='md:indent-20 indent-8 md:text-md text-sm leading-6 text-[#5a5a5a] dark:text-[#B5B5B5]'>I'm a skilled fullstack developer proficient in JavaScript, TypeScript, PHP, and Golang. With expertise in frontend and backend development, I create powerful and responsive web applications. My proficiency extends to server development, where I excel in utilizing Nginx and Apache to ensure optimal performance and security. Currently, I am actively involved in the development of <a href='https://farytaxi.com' target='_blank' className='text-blue-400'>farytaxi.com</a> and <a href='https://getbak.co' target='_blank' className='text-blue-400'>getbak.co</a>, microservices technologies like gRPC and Redis to build efficient and scalable solutions. With a passion for innovation and staying updated with the latest industry trends, I strive to deliver exceptional results that enhance user experiences and drive business growth.</p>
                    </div>
               </div>

               <div className='flex flex-col md:space-y-4 space-y-6 items-center md:items-start md:pt-10'>
                    <div className='md:pb-4'>
                         <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >Work Experience</h1>
                    </div>
                    <div className='text-center md:text-start w-full border-b-2'>
                         <div className='flex justify-between md:pb-6 pb-2'>
                              <div className='flex justify-between flex-col w-1/2 space-y-2  text-[#5a5a5a] dark:text-[#B5B5B5]'>
                                   <h1 className='md:text-base text-[0.9rem] text-start'>Backend Developer </h1>
                                   <div className='flex justify-between'>
                                        <div className='flex space-x-1'>
                                             <Icon icon='material-symbols:apartment-rounded' />
                                             <h1 className='md:text-xs text-[0.7rem] font-semibold'>Xsphere Co.,Ltd</h1>
                                        </div>
                                        <div className='space-x-1 hidden md:flex'>
                                             <Icon icon='ep:location-filled' />
                                             <h1 className='text-xs font-semibold'>Yangon</h1>
                                        </div>
                                   </div>
                              </div>
                              <div className='space-y-2 flex flex-col text-[#5a5a5a] dark:text-[#B5B5B5]'>
                                   <div className='items-end flex justify-end'>
                                        <h1 className='px-2 py-1 rounded-xl bg-[#d7ffe1] text-xs text-[#008C0E] '>fulltime</h1>
                                   </div>
                                   <div className='flex space-x-2'>
                                        <Icon icon='uis:calender' />
                                        <h1 className='text-xs'>March-2022 to current</h1>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='text-center md:text-start w-full border-b-2'>
                         <div className='flex justify-between md:pb-6 pb-2'>
                              <div className='flex justify-between flex-col md:w-1/2 space-y-2  text-[#5a5a5a] dark:text-[#B5B5B5]'>
                                   <h1 className='md:text-base text-[0.9rem] text-start'>Backend Developer </h1>
                                   <div className='flex justify-between'>
                                        <div className='flex space-x-1'>
                                             <Icon icon='material-symbols:apartment-rounded' />
                                             <h1 className='md:text-xs text-[0.7rem] font-semibold'>Xsphere Co.,Ltd</h1>
                                        </div>
                                        <div className='space-x-1 hidden md:flex'>
                                             <Icon icon='ep:location-filled' />
                                             <h1 className='text-xs font-semibold'>Yangon</h1>
                                        </div>
                                   </div>
                              </div>
                              <div className='space-y-2 flex flex-col text-[#5a5a5a] dark:text-[#B5B5B5]'>
                                   <div className='items-end flex justify-end'>
                                        <h1 className='px-2 py-1 rounded-xl bg-[#d7ffe1] text-xs text-[#008C0E] '>fulltime</h1>
                                   </div>
                                   <div className='flex space-x-2'>
                                        <Icon icon='uis:calender' />
                                        <h1 className='text-xs'>March-2022 to current</h1>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='text-center md:text-start w-full border-b-2'>
                         <div className='flex justify-between md:pb-6 pb-2'>
                              <div className='flex justify-between flex-col w-1/2 space-y-2  text-[#5a5a5a] dark:text-[#B5B5B5]'>
                                   <h1 className='md:text-base text-[0.9rem] text-start'>Backend Developer </h1>
                                   <div className='flex justify-between'>
                                        <div className='flex space-x-1'>
                                             <Icon icon='material-symbols:apartment-rounded' />
                                             <h1 className='md:text-xs text-[0.7rem] font-semibold'>Xsphere Co.,Ltd</h1>
                                        </div>
                                        <div className='space-x-1 hidden md:flex'>
                                             <Icon icon='ep:location-filled' />
                                             <h1 className='text-xs font-semibold'>Yangon</h1>
                                        </div>
                                   </div>
                              </div>
                              <div className='space-y-2 flex flex-col text-[#5a5a5a] dark:text-[#B5B5B5]'>
                                   <div className='items-end flex justify-end'>
                                        <h1 className='px-2 py-1 rounded-xl bg-[#d7ffe1] text-xs text-[#008C0E] '>fulltime</h1>
                                   </div>
                                   <div className='flex space-x-2'>
                                        <Icon icon='uis:calender' />
                                        <h1 className='text-xs'>March-2022 to current</h1>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div >
     )
}

export default About