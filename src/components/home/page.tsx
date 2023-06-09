'use client'
import React, { useEffect } from 'react'
import ProfileIcon from '../icon/Profile'
import { Roboto_Slab } from 'next/font/google'
import { useSpring, animated, a } from '@react-spring/web'
import MyIcon from '../icon/MyIcon'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Link from 'next/link'


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
          from: { transform: 'translateY(100%)', opacity: 0 },
          to: { transform: 'translateX(0%)', opacity: 1 },
          // delay: 100
     })

     const bT1 = useSpring({
          from: { transform: 'translate3d(0,80px,0)', opacity: 0 },
          to: { transform: 'translate3d(0,0,0)', opacity: 1 },
          delay: 500
     })

     const bT2 = useSpring({
          from: { transform: 'translate3d(0,80px,0)', opacity: 0 },
          to: { transform: 'translate3d(0,0,0)', opacity: 1 },
          delay: 600
     })

     const bT3 = useSpring({
          from: { transform: 'translate3d(0,80px,0)', opacity: 0 },
          to: { transform: 'translate3d(0,0,0)', opacity: 1 },
          delay: 700
     })

     const arrow = useSpring({
          from: { opacity: 0 },
          to: { opacity: 1 },
          delay: 1000
     })

     return (
          <div className="items-center flex h-full w-screen justify-evenly flex-col -z-50 ">
               <div className='md:flex max-sm:flex-col flex justify-center items-center md:space-x-10 md:pt-28 pt-2 dark:text-[#B5B5B5] '>
                    <div className={`${inter.className} pb-20 space-y-1`}>
                         <animated.h1 className='text-[2.2rem] md:text-[2.7rem]  font-bold whitespace-normal flex' style={textStyles}>
                              <div className='text-[#63c188]'>Hi</div> &nbsp; 👋,
                         </animated.h1>
                         <animated.h1 style={textStyles1} className='md:text-[1.8rem] dark:text-white text-[1.5rem] font-bold whitespace-normal'>
                              I'm Naing <span className='text-[#63c188]'>Linn</span> Phyo  {"</>"}
                         </animated.h1>
                         <animated.h1 style={textStyles2} className='text-base dark:text-white'>I'm a <span className='text-[#63c188] font-bold '>developer</span> based in Yangon.</animated.h1>
                    </div>
                    <animated.div className='duration-600 ease-in-out hover:scale-105 md:w-80 mb-8 border-green-500 border-4 md:h-80 w-64 h-64 items-center rounded-full overflow-hidden' style={imageStyle}>
                         <Image loading='lazy' src='/image/MyPic.png' alt={'profile'} width={500} height={500} />
                    </animated.div>
               </div >
               <div className='w-full flex justify-center mb-16'>
                    <ul className='flex space-x-2 md:space-x-6'>
                         <animated.li style={bT1} className='md:w-14 md:h-14 w-10 h-10 rounded-full border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.12rem] shadow-md hover:shadow-2xl hover:duration-700  hover:shadow-[#027b0c] flex justify-center items-center cursor-pointer'>
                              <Link href='https://github.com/nainglinnphyo' target='_blank' >
                                   <Icon icon='mdi:github' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#fff'}`} />
                              </Link>
                         </animated.li>
                         <animated.li style={bT2} className='md:w-14 md:h-14 w-10 h-10 rounded-full border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.12rem] shadow-md hover:shadow-2xl hover:duration-700  hover:shadow-[#027b0c] flex justify-center items-center cursor-pointer'>
                              <Link href='https://www.linkedin.com/in/naing-linn-phyo-768852175/' target='_blank'>
                                   <Icon icon='entypo-social:linkedin-with-circle' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#fff'}`} />
                              </Link>
                         </animated.li>
                         <animated.li style={bT3} className='md:w-14 md:h-14 w-10 h-10 rounded-full border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.12rem] shadow-md hover:shadow-2xl hover:duration-700  hover:shadow-[#027b0c]  flex justify-center items-center cursor-pointer'>
                              <Link href='https://telegram.me/defined_me' >
                                   <Icon icon='simple-icons:telegram' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#fff'}`} />
                              </Link>
                         </animated.li>
                    </ul>
               </div>
               {/* <animated.div style={arrow} className='flex md:justify-end justify-center h-10 items-center w-full px-10 animate-bounce sm:mb-20'>
                    <div className='flex'>
                         <Icon icon="tabler:arrow-big-down-line" width='1.2rem' height='1.2rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#B5B5B5'}`} />
                         <span className='text-[0.8rem] dark:text-[#B5B5B5]'>Scroll for more</span>
                    </div>
               </animated.div> */}
          </div>
     )
}

export default HomePage