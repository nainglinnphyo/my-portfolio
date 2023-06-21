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
          from: { transform: 'translate3d(400px,0,0)', opacity: 0 },
          to: { transform: 'translate3d(0px,0,0)', opacity: 1 },
          delay: 100
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
          <div className='items-center flex h-full justify-center flex-col -z-50 py-20 md:space-y-2'>
               <div className='md:flex max-sm:flex-col flex justify-center items-center md:space-x-10  dark:text-[#B5B5B5]'>
                    <div className={`${inter.className} pb-20 p-4 space-y-2`}>
                         <animated.h1 className='text-[2rem] md:text-[2.7rem]  font-bold whitespace-normal flex' style={textStyles}>
                              <div className='text-[#63c188]'>Hi</div> &nbsp; 👋,
                         </animated.h1>
                         <animated.h1 style={textStyles1} className='md:text-[1.8rem] text-[1.3rem] font-bold whitespace-normal'>
                              I'm Naing <span className='text-[#63c188]'>Linn</span> Phyo  {"</>"}
                         </animated.h1>
                         <animated.h1 style={textStyles2} className='text-base text-[0.85rem]'>I'm a <span className='text-[#63c188] font-bold '>developer</span> based in Yangon.</animated.h1>
                    </div>
                    <animated.div style={imageStyle} className='md:w-96 pb-20 md:h-96 w-64 h-64 justify-center items-center flex inset-0 object-cover'>
                         <animated.div className='transition duration-700 ease-in-out hover:scale-105 cursor-none'>
                              <Image loading='lazy' src='/image/profilePic.webp' alt={''} width={1000} height={1000} className='' />
                         </animated.div>
                    </animated.div>
               </div >
               <div className='w-full flex justify-center pt-2 md:pt-20'>
                    <ul className='flex space-x-2 md:space-x-6'>
                         <animated.li style={bT1} className='md:w-36 md:h-12 w-28 h-10 rounded-md border-[#5a5a5a] dark:border-[#9d9d9d] border-b-[0.008rem] shadow-sm hover:shadow-md duration-500 border-dashed flex justify-center items-center'>
                              <Link href='' >
                                   <div className='flex items-center justify-center text-[#5a5a5a] dark:text-[#eaeaea] space-x-1 '>
                                        <Icon icon='mdi:github' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#eaeaea'}`} />
                                        <span className='font-semibold'>Github</span>
                                   </div>
                              </Link>
                         </animated.li>
                         <animated.li style={bT2} className='md:w-36 md:h-12 w-28 h-10 rounded-md border-[#5a5a5a] dark:border-[#747474] border-b-[0.008rem] shadow-sm hover:shadow-md duration-500  border-dashed flex justify-center items-center'>
                              <Link href='' >
                                   <div className='flex items-center justify-center text-[#5a5a5a] dark:text-[#eaeaea] space-x-1'>
                                        <Icon icon='entypo-social:linkedin-with-circle' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#eaeaea'}`} />
                                        <span className='font-semibold'>LinkedIn</span>
                                   </div>
                              </Link>
                         </animated.li>
                         <animated.li style={bT3} className='md:w-36 md:h-12 w-28 h-10 rounded-md border-[#5a5a5a] dark:border-[#747474] border-b-[0.008rem] shadow-sm hover:shadow-md duration-500 border-dashed flex justify-center items-center'>
                              <Link href='' >
                                   <div className='flex items-center justify-center text-[#5a5a5a] dark:text-[#eaeaea] space-x-1'>
                                        <Icon icon='simple-icons:telegram' width='1.4rem' height='1.4rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#eaeaea'}`} />
                                        <span className='font-semibold'>Twitter</span>
                                   </div>
                              </Link>
                         </animated.li>
                    </ul>
               </div>
               <animated.div style={arrow} className='flex md:justify-end justify-center w-full px-10 mt-16 animate-bounce'>
                    <div className='flex'>
                         <Icon icon="tabler:arrow-big-down-line" width='1.2rem' height='1.2rem' color={`${currentTheme === 'light' ? '#5a5a5a' : '#eaeaea'}`} />
                         <span className='text-[0.8rem]'>Scroll for more</span>
                    </div>
               </animated.div>
          </div>
     )
}

export default HomePage