'use client'

import { Icon } from '@iconify/react'
import { useSpring, a, animated } from '@react-spring/web'
import { Poppins } from 'next/font/google'
import React, { useEffect, useState } from 'react'
const poppinsFont = Poppins({ subsets: ['latin'], weight: '700' })

function TechStack() {
     const [scrollY, setScrollY] = useState(0);

     useEffect(() => {
          const handleScroll = () => {
               setScrollY(window.scrollY);
          };
          handleScroll();

          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };

     }, []);

     const bT1 = useSpring({
          transform: scrollY >= 1300 ? 'translateY(100%)' : 'translateY(200%)', opacity: scrollY >= 1300 ? 1 : 0
     })
     const bT2 = useSpring({
          transform: scrollY >= 1500 ? 'translateY(100%)' : 'translateY(200%)', opacity: scrollY >= 1500 ? 1 : 0
     })
     // 1250
     return (
          <div className='h-ful md:pt-28 pt-20 justify-between flex flex-col md:px-52 px-10 w-full -z-50 md:space-y-8 space-y-8' >
               <div className='flex flex-col md:space-y-4 space-y-6 items-center'>
                    <div>
                         <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >My Tech Stack</h1>
                         <p className='font-normal text-sm'> Technologies I’ve been working with recently</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full justify-center">
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT1}>
                              <Icon icon='logos:javascript' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT1}>
                              <Icon icon='logos:react' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT1}>
                              <Icon icon='devicon:nextjs' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT1}>
                              <Icon icon='devicon:nodejs' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT2}>
                              <Icon icon='logos:nestjs' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT2}>
                              <Icon icon='logos:laravel' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT2}>
                              <Icon icon='skill-icons:golang' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                         <animated.div className='justify-center flex items-center w-full pb-4 lg:pb-10' style={bT2}>
                              <Icon icon='logos:graphql' width={50} height={50} className='w-full lg:h-16 h-10' />
                         </animated.div>
                    </div>
               </div>
          </div >
     )
}

export default TechStack