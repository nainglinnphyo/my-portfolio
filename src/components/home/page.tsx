'use client'
import React, { useEffect } from 'react'
import ProfileIcon from '../icon/Profile'
import { Roboto_Slab } from 'next/font/google'
import { useSpring, animated } from '@react-spring/web'
import MyIcon from '../icon/MyIcon'
import { useTheme } from 'next-themes'
import Image from 'next/image'


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
          <div className='md:flex max-sm:flex-col flex md:space-y-0 space-y-10 items-center h-full justify-center md:space-x-10 -z-50 dark:text-[#B5B5B5]'>
               <div className={`${inter.className} pb-20 p-4 space-y-2`}>
                    <animated.h1 className='text-[2.7rem] font-bold whitespace-normal flex' style={textStyles}>
                         <div className='text-green-600 dark:text-green-500'>Hi</div> &nbsp; 👋,
                    </animated.h1>
                    <animated.h1 style={textStyles1} className='md:text-[1.8rem] text-[1.6rem] font-bold whitespace-normal'>
                         I'm Naing <span className='text-green-600 dark:text-green-500'>Linn</span> Phyo  {"</>"}
                    </animated.h1>
                    <animated.h1 style={textStyles2} className='text-base'>I'm a <span className='text-green-600 font-bold dark:text-green-500'>developer</span> based in Yangon.</animated.h1>
               </div>
               <animated.div style={imageStyle} className='md:w-96  pb-20 md:h-96 w-72 h-72 justify-center items-center flex inset-0 object-cover'>
                    <Image src='/image/profilePic.png' alt={''} width={1000} height={1000} className='' />
               </animated.div>
          </div >
     )
}

export default HomePage