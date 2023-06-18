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
     const imageStyle = useSpring({
          from: { transform: 'translate3d(400px,0,0)', opacity: 0 },
          to: { transform: 'translate3d(0px,0,0)', opacity: 1 },
          delay: 400
     })
     return (
          <div className='md:flex max-sm:flex-col flex md:space-y-0 space-y-10 items-center h-full justify-center md:space-x-10 -z-50 dark:text-[#B5B5B5]'>
               <div className={`${inter.className} md:space-y-2 p-8 space-y-2`}>
                    <animated.h1 className='text-[2.7rem] font-bold whitespace-normal' style={textStyles}>
                         Hi 👋,
                    </animated.h1>
                    <animated.h1 style={textStyles} className='md:text-[1.8rem] text-[1.6rem] font-bold whitespace-normal'>
                         I'm Naing Linn Phyo  {"</>"}
                    </animated.h1>
                    <animated.h1 style={textStyles} className='text-base'>I'm a developer based in Yangon.</animated.h1>
               </div>
               <animated.div style={imageStyle} className='p-8 md:w-96 md:h-96 w-96 h-96 justify-center items-center flex inset-0 object-cover'>
                    <Image src='/image/profilePic.png' alt={''} width={1200} height={1200} className='' />
               </animated.div>
          </div >
     )
}

export default HomePage