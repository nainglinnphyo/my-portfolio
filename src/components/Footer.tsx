'use client'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes';
import Link from 'next/link'
import React from 'react'

function Footer() {
     const { systemTheme, theme, setTheme } = useTheme();
     const currentTheme = theme === 'system' ? systemTheme : theme;
     return (
          <footer className="bg-white shadow dark:bg-gray-800 flex-col justify-center text-center items-center p-4 mt-10">
               <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <div className='w-full flex justify-center'>
                         <ul className='flex space-x-2 md:space-x-6'>
                              <li className='md:w-10 md:h-10 w-10 h-10 rounded-full border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.10rem] shadow-md hover:shadow-2xl hover:duration-700  hover:shadow-[#027b0c] flex justify-center items-center cursor-pointer'>
                                   <Link href='https://github.com/nainglinnphyo' target='_blank' >
                                        <Icon icon='mdi:github' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#fff'}`} />
                                   </Link>
                              </li>
                              <li className='md:w-10 md:h-10 w-10 h-10 rounded-full border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.10rem] shadow-md hover:shadow-2xl hover:duration-700  hover:shadow-[#027b0c] flex justify-center items-center cursor-pointer'>
                                   <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank'>
                                        <Icon icon='entypo-social:linkedin-with-circle' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#fff'}`} />
                                   </Link>
                              </li>
                              <li className='md:w-10 md:h-10 w-10 h-10 rounded-full border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.10rem] shadow-md hover:shadow-2xl hover:duration-700  hover:shadow-[#027b0c]  flex justify-center items-center cursor-pointer'>
                                   <Link href='https://telegram.me/defined_me' >
                                        <Icon icon='simple-icons:telegram' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#fff'}`} />
                                   </Link>
                              </li>
                         </ul>
                    </div>
               </div>
               <p className='text-xs'>Copyright © 2023 Naing Linn Phyo, All Rights Reserved.</p>
          </footer>
     )
}

export default Footer