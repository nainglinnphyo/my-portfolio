'use client'
import React, { useEffect } from 'react'
import ProfileIcon from '../icon/Profile'
import { Roboto_Slab } from 'next/font/google'
import { useSpring, animated, a } from '@react-spring/web'
import MyIcon from '../icon/MyIcon'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Icon } from '@iconify/react'


const inter = Roboto_Slab({ subsets: ['latin'] })
function HomePage() {
     const { systemTheme, theme } = useTheme();
     const currentTheme = theme === 'system' ? systemTheme : theme;
     const textStyles = useSpring({
          from: { transform: 'translate3d(-400px,0,0)', opacity: 0 },
          to: { transform: 'translate3d(0px,0,0)', opacity: 1 },
          delay: 400
     })

     const textStyles1 = useSpring({
          from: { transform: 'translate3d(-400px,0,0)', opacity: 0 },
          to: { transform: 'translate3d(0px,0,0)', opacity: 1 },
          delay: 500
     })

     const textStyles2 = useSpring({
          from: { transform: 'translate3d(-400px,0,0)', opacity: 0 },
          to: { transform: 'translate3d(0px,0,0)', opacity: 1 },
          delay: 600
     })
     const imageStyle = useSpring({
          from: { transform: 'translate3d(400px,0,0)', opacity: 0 },
          to: { transform: 'translate3d(0px,0,0)', opacity: 1 },
          delay: 100
     })

     return (
          <div className='items-center flex h-full  justify-center flex-col'>
               <div className='md:flex max-sm:flex-col flex md:space-y-0 space-y-10 justify-center items-center md:space-x-10 -z-50 dark:text-[#B5B5B5]'>
                    <div className={`${inter.className} pb-20 p-4 space-y-2`}>
                         <animated.h1 className='text-[2.7rem] font-bold whitespace-normal flex' style={textStyles}>
                              <div className='text-[#63c188]'>Hi</div> &nbsp; 👋,
                         </animated.h1>
                         <animated.h1 style={textStyles1} className='md:text-[1.8rem] text-[1.6rem] font-bold whitespace-normal'>
                              I'm Naing <span className='text-[#63c188]'>Linn</span> Phyo  {"</>"}
                         </animated.h1>
                         <animated.h1 style={textStyles2} className='text-base'>I'm a <span className='text-[#63c188] font-bold '>developer</span> based in Yangon.</animated.h1>
                    </div>
                    <animated.div style={imageStyle} className='md:w-96 pb-20 md:h-96 w-72 h-72 justify-center items-center flex inset-0 object-cover'>
                         <animated.div className='hover:scale-105 hover:duration-700 hover:cursor-pointer ease-in-out'>
                              <Image src='/image/profilePic.png' alt={''} width={1000} height={1000} className='' />
                         </animated.div>
                    </animated.div>
               </div >
               <div className='w-full flex justify-center pt-20'>
                    <ul className='flex space-x-3'>
                         <li className='w-36 h-12 rounded-md border-[#5a5a5a] dark:border-[#747474] border-[0.001rem] border-dashed flex justify-center items-center'>
                              <div className='flex items-center justify-center text-[#5a5a5a] dark:text-[#747474] space-x-1'>
                                   <Icon icon='mdi:github' width='1.6rem' height='1.6rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#B5B5B5'}`} />
                                   <span className='font-semibold'>Github</span>
                              </div>
                         </li>
                         <li className='w-36 h-12 rounded-md border-[#5a5a5a] dark:border-[#747474] border-[0.001rem] border-dashed flex justify-center items-center'>
                              <div className='flex items-center justify-center text-[#5a5a5a] dark:text-[#747474] space-x-1'>
                                   <Icon icon='entypo-social:linkedin-with-circle' width='1.6rem' height='1.6rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#B5B5B5'}`} />
                                   <span className='font-semibold'>Github</span>
                              </div>
                         </li>
                         <li className='w-36 h-12 rounded-md border-[#5a5a5a] dark:border-[#747474] border-[0.001rem] border-dashed flex justify-center items-center'>
                              <div className='flex items-center justify-center text-[#5a5a5a] dark:text-[#747474] space-x-1'>
                                   <Icon icon='simple-icons:telegram' width='1.6rem' height='1.6rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#B5B5B5'}`} />
                                   <span className='font-semibold'>Github</span>
                              </div>
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default HomePage