'use client'
import HashScroll from "@/app/hash-scroll";
import { animated, useSpring } from "@react-spring/web";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";

export const InitialPageLoad = ({ children }: { children: React.ReactNode }) => {
     const [animation, setAnimation] = useSpring(() => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
     }));
     const [load, setLoad] = useState(false)
     useEffect(() => {
          setAnimation({ opacity: 1 });
          setTimeout(() => {
               setLoad(true)
          }, 1200);
     }, []);
     if (!load) return <LoadingPage />
     return (
          <>
               <Suspense fallback={<LoadingPage />}>
                    {load && <ThemeProvider attribute="class">
                         <animated.div style={animation}>
                              {children}
                         </animated.div>
                    </ThemeProvider>}
               </Suspense>
          </>
     );
};

const LoadingPage = () => {
     const animateProps1 = useSpring({
          from: { transform: 'translate3d(0,0,0)', opacity: 1, blur: 10 },
          to: { transform: 'translate3d(-2000px,0,0)', opacity: 1, blur: 0 },

     })
     const animateProps2 = useSpring({
          from: { transform: 'translate3d(0,0,0)', opacity: 1, blur: 10 },
          to: { transform: 'translate3d(2000px,0,0)', opacity: 1, blur: 0 },
     })
     return (
          <ThemeProvider attribute="class">
               <div className="w-full h-screen flex dark:bg-[#121212] bg-white">
                    <animated.div style={animateProps1} className="w-1/2 bg-[#63C188] h-screen duration-[1800ms] opacity-5">
                    </animated.div>
                    <animated.div style={animateProps2} className="w-1/2 bg-[#63C188] h-screen  duration-[1800ms] opacity-5">
                    </animated.div>
               </div>
          </ThemeProvider>
     )
}