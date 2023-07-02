'use client'

import { Icon } from '@iconify/react'
import { Poppins } from 'next/font/google'
import React, { useState } from 'react'
import Image from 'next/image'
const poppinsFont = Poppins({ subsets: ['latin'], weight: '700' })

function About() {
     return (
          <div className='h-full md:pt-28 pt-10 justify-between lg:flex md:flex px-10 w-full -z-50 md:space-y-1'>
               <div className='flex flex-col md:space-y-4 space-y-2 items-center lg:w-[60%]'>
                    <div className='flex flex-col md:space-y-4 space-y-2 items-center w-full md:items-start lg:px-10 lg:mb-28 md:mb-20 mb-10'>
                         <div>
                              <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 ${poppinsFont.className}`} >About Me</h1>
                         </div>
                         <div className='text-justify'>
                              <p className='md:indent-20 indent-8 md:text-md text-sm leading-6 text-[#5a5a5a] dark:text-[#B5B5B5]'>I'm a skilled fullstack developer proficient in JavaScript, TypeScript, PHP, and Golang. With expertise in frontend and backend development, I create powerful and responsive web applications. My proficiency extends to server development, where I excel in utilizing Nginx and Apache to ensure optimal performance and security. Currently, I am actively involved in the development of <a href='https://farytaxi.com' target='_blank' className='text-blue-400'>farytaxi.com</a> and <a href='https://getbak.co' target='_blank' className='text-blue-400'>getbak.co</a>, microservices technologies like gRPC and Redis to build efficient and scalable solutions. With a passion for innovation and staying updated with the latest industry trends, I strive to deliver exceptional results that enhance user experiences and drive business growth.</p>
                         </div>
                    </div>
                    <div className='items-center'>
                         <Image src='/image/About.svg' width={500} height={500} alt={''} />
                    </div>
               </div>
               <div className='lg:w-[40%] lg:px-10 mt-10'>
                    <ul className="relative border-l border-gray-200 dark:border-gray-700">
                         <li className="mb-10 ml-6">
                              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-800 dark:text-blue-300" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6 1a1.75 1.75 0 0 0-1.75 1.75V4H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.25V2.75A1.75 1.75 0 0 0 10 1H6Zm4.25 3V2.75A.25.25 0 0 0 10 2.5H6a.25.25 0 0 0-.25.25V4h4.5ZM3 5.5h10a.5.5 0 0 1 .5.5v1h-11V6a.5.5 0 0 1 .5-.5Zm-.5 3V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5H9V10H7V8.5H2.5Z" /></svg>
                              </span>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Backend Developer</h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March-2022 to current</time>
                              <div className="mb-4 font-normal text-gray-500 dark:text-gray-400 md:text-md text-sm">
                                   <p className='text-gray-800 font-black dark:text-gray-400 py-2'> Responsibilities:</p>
                                   <ul className='list-disc space-y-1 lg:text-justify'>
                                        <li>Integration of user-facing elements developed by front-end and mobile developers with server side logic</li>
                                        <li>Writing reusable, testable, and efficient code</li>
                                        <li>Design and implementation of low-latency, high-availability, and performant applications</li>
                                        <li>Implementation of security and data protection</li>
                                        <li>Manage and optimize scalable distributed systems in the cloud</li>
                                        <li>Integration of data storage solutions may include databases, key-value stores, blob stores, etc.</li>
                                        <li>Implement real-time communication features using WebSocket and Socket.IO to enable bidirectional communication between the server and clients.</li>
                                   </ul>
                              </div>
                         </li>
                         <li className="mb-10 ml-6">
                              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-800 dark:text-blue-300" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6 1a1.75 1.75 0 0 0-1.75 1.75V4H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.25V2.75A1.75 1.75 0 0 0 10 1H6Zm4.25 3V2.75A.25.25 0 0 0 10 2.5H6a.25.25 0 0 0-.25.25V4h4.5ZM3 5.5h10a.5.5 0 0 1 .5.5v1h-11V6a.5.5 0 0 1 .5-.5Zm-.5 3V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5H9V10H7V8.5H2.5Z" /></svg>
                              </span>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Junior Web Developer</h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan-2021 to Feb-2022</time>
                              <div className="mb-4 font-normal text-gray-500 dark:text-gray-400 md:text-md text-sm">
                                   <p className='text-gray-800 font-black dark:text-gray-400 py-2'> Responsibilities:</p>
                                   <ul className='list-disc space-y-1 lg:text-justify'>
                                        <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.</li>
                                        <li>Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster programming resources</li>
                                        <li>Designed REST calls using React to streamline user interface performance.</li>
                                        <li>Oversaw back-end development using PHP,Node.js to maintain website integrity, security and efficiency.</li>
                                        <li>Designed and developed REST API with Node.js & PHP(Laravel) for web and mobile developments.</li>
                                   </ul>
                              </div>
                         </li>
                         <li className="mb-10 ml-6">
                              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-800 dark:text-blue-300" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6 1a1.75 1.75 0 0 0-1.75 1.75V4H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.25V2.75A1.75 1.75 0 0 0 10 1H6Zm4.25 3V2.75A.25.25 0 0 0 10 2.5H6a.25.25 0 0 0-.25.25V4h4.5ZM3 5.5h10a.5.5 0 0 1 .5.5v1h-11V6a.5.5 0 0 1 .5-.5Zm-.5 3V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5H9V10H7V8.5H2.5Z" /></svg>
                              </span>
                              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Data Center Operator , IT Support(Port EDI System)</h3>
                              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October-2018 to Feb-2022</time>
                              <div className="mb-4 font-normal text-gray-500 dark:text-gray-400 md:text-md text-sm">
                                   <p className='text-gray-800 font-black dark:text-gray-400 py-2'> Responsibilities:</p>
                                   <ul className='list-disc space-y-1 lg:text-justify'>
                                        <li>Provided network operations support when monitoring issues occurred unexpectedly.</li>
                                        <li>Regularly referenced reports or system operations, task lists, problems and resolution updates.</li>
                                        <li>Designed and evaluated WAN and LAN connectivity technologies.</li>
                                        <li>Provided network support services for devices such as hubs, bridges, routers and other hardware</li>
                                   </ul>
                              </div>
                         </li>
                    </ul>
               </div>
               {/* <div className='flex flex-col md:space-y-4 space-y-3 items-center md:items-start md:pt-10'>
                    <div className='md:pb-4'>
                         <h1 className={`md:text-xl text-xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >Work Experience</h1>
                    </div>
                    <div className='text-center md:text-start w-full border-b-2 py-2'>
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
                    <div className='text-center md:text-start w-full border-b-2 py-2'>
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
                    <div className='text-center md:text-start w-full border-b-2 py-2'>
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
               </div> */}
          </div >
     )
}

export default About