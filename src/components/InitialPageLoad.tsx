'use client'
import HashScroll from "@/app/hash-scroll";
import { animated, useSpring } from "@react-spring/web";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const InitialPageLoad = ({ children }: { children: React.ReactNode }) => {
     const [animation, setAnimation] = useSpring(() => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
     }));

     const [load, setLoad] = useState(false)


     useEffect(() => {
          setAnimation({ opacity: 1 });
          setLoad(true)
     }, []);

     return (
          <>
               {load && <ThemeProvider attribute="class">
                    <animated.div style={animation}>
                         {/* <HashScroll> */}
                         {children}
                         {/* </HashScroll> */}
                    </animated.div>
               </ThemeProvider>}
          </>
     );
};