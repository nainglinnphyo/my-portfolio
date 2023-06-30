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
     const size = useWindowSize();
     const mobile: Boolean = size.width <= 640 ? true : false
     const bT1 = useSpring({
          transform: scrollY >= (mobile ? 2200 : 1600) ? 'translateY(100%)' : 'translateY(200%)', opacity: scrollY >= (mobile ? 2200 : 1600) ? 1 : 0
     })
     const bT2 = useSpring({
          transform: scrollY >= (mobile ? 2400 : 1800) ? 'translateY(100%)' : 'translateY(200%)', opacity: scrollY >= (mobile ? 2400 : 1800) ? 1 : 0
     })
     // 1250
     return (
          <div className='h-ful md:pt-28 pt-20 justify-between flex flex-col md:px-52 px-10 w-full -z-50 md:space-y-8 space-y-8 ' >
               <div className='flex flex-col md:space-y-4 items-center'>
                    <div className='text-center'>
                         <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >My Tech Stack</h1>
                         <p className='font-normal text-sm'> Technologies I’ve been working with recently</p>
                    </div>
                    <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-4 gap-8 w-full justify-center">
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT1}>
                              <Icon icon='logos:javascript' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>Javascript</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT1}>
                              <Icon icon='logos:react' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>React</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT1}>
                              <Icon icon='devicon:nextjs' width={50} height={50} className='w-full lg:h-16 h-18 dark:invert' />
                              <p>Nextjs</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT1}>
                              <Icon icon='devicon:nodejs' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>Nodejs</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT2}>
                              <Icon icon='logos:nestjs' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>Nestjs</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT2}>
                              <Icon icon='logos:laravel' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>Laravel</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT2}>
                              <Icon icon='skill-icons:golang' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>Golang</p>
                         </animated.div>
                         <animated.div className='justify-center flex-col text-center space-y-1 items-center w-full pb-4 lg:pb-10 md:pb-10' style={bT2}>
                              <Icon icon='logos:graphql' width={50} height={50} className='w-full lg:h-16 h-18' />
                              <p>Graphql</p>
                         </animated.div>
                    </div>
               </div>
          </div >
     )
}

function useWindowSize() {
     const [windowSize, setWindowSize] = useState({
          width: 0,
          height: 0,
     });

     useEffect(() => {
          // only execute all the code below in client side
          // Handler to call on window resize
          function handleResize() {
               // Set window width/height to state
               setWindowSize({
                    width: window.innerWidth || 0,
                    height: window.innerHeight || 0,
               });
          }

          // Add event listener
          window.addEventListener("resize", handleResize);

          // Call handler right away so state gets updated with initial window size
          handleResize();

          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
     }, []); // Empty array ensures that effect is only run on mount
     return windowSize;
}

export default TechStack