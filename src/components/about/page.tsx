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
                              {/* <p>Hello, I'm Naing Linn Phyo, a highly skilled fullstack developer with expertise in JavaScript, TypeScript, PHP, and Golang. With a deep understanding of frontend and backend development, I have the ability to create robust and dynamic web applications. My proficiency extends to server development, where I excel in configuring and managing servers using Nginx and Apache, ensuring optimal performance and security for web applications.

                                   I am currently engaged in the development of two exciting products: <a href='https://farytaxi.com' target='_blank' className='text-blue-400'>farytaxi.com</a>  and <a href='https://getbak.com' target='_blank' className='text-blue-400'>farytaxi.com</a> . Leveraging cutting-edge technologies such as gRPC and Redis, I am building scalable and efficient solutions that address complex challenges. These projects demonstrate my ability to design and implement high-performance systems that provide seamless user experiences.

                                   With a passion for continuous learning and staying up-to-date with emerging trends, I constantly seek opportunities to expand my skill set and explore new technologies. I am dedicated to delivering exceptional results by combining my technical expertise with a creative and problem-solving mindset.

                                   Throughout my career, I have demonstrated a strong work ethic, effective communication skills, and the ability to collaborate effectively in both team environments and individual projects. I thrive in dynamic and challenging environments, where I can utilize my diverse skill set to drive innovation and deliver outstanding software solutions.

                                   I am excited about the opportunity to contribute my skills and experience to projects that push the boundaries of what is possible in the world of web development. If you are looking for a dedicated and versatile fullstack developer, I would love to connect and discuss how I can contribute to your next venture.</p> */}
                              <p className='md:indent-20 indent-8 md:text-md text-sm leading-6 text-[#5a5a5a] dark:text-[#B5B5B5]'>I'm a skilled fullstack developer proficient in JavaScript, TypeScript, PHP, and Golang. With expertise in frontend and backend development, I create powerful and responsive web applications. My proficiency extends to server development, where I excel in utilizing Nginx and Apache to ensure optimal performance and security. Currently, I am actively involved in the development of and <a href='https://getbak.co' target='_blank' className='text-blue-400'>getbak.co</a>, microservices technologies like gRPC and Redis to build efficient and scalable solutions. With a passion for innovation and staying updated with the latest industry trends, I strive to deliver exceptional results that enhance user experiences and drive business growth.</p>
                         </div>
                    </div>
                    <div className='items-center hidden md:block'>
                         <Image src='/image/About.svg' width={400} height={400} alt={''} />
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
          </div >
     )
}

export default About