import React, { useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Icon } from '@iconify/react';
import SwitchModeButton from './Switcher';
import { CustomLink } from './Header';

function MiniNav({ setOpenMini, activeSectionId, setActiveSectionId }: any) {
     const props = useSpring({
          from: { opacity: 1, marginRight: '-100vh' },
          to: { opacity: 1, marginRight: '0vh' },
          delay: 200
     });

     const text = useSpring({
          from: { opacity: 0, marginRight: "-100vh" },
          to: { opacity: 1, marginRight: "0" },
          delay: 200
     })

     const text1 = useSpring({
          from: { opacity: 0, marginRight: "-100vh" },
          to: { opacity: 1, marginRight: "0" },
          delay: 300
     })

     const text2 = useSpring({
          from: { opacity: 0, marginRight: "-100vh" },
          to: { opacity: 1, marginRight: "0" },
          delay: 400
     })

     const text3 = useSpring({
          from: { opacity: 0, marginRight: "-100vh" },
          to: { opacity: 1, marginRight: "0" },
          delay: 500
     })


     return (
          <animated.div className='w-full h-screen p-4 z-50' style={props}>
               <div className=' flex justify-between p-2'>
                    <div>

                    </div>
                    <div className='' onClick={() => setOpenMini(false)}>
                         <Icon icon='line-md:menu-to-close-alt-transition' width='1.7rem' height='1.7rem' />
                    </div>
               </div>
               <div className='items-center text-center flex justify-center w-full h-1/2'>
                    <ul className='space-y-6 text-lg font-normal'>
                         <animated.li style={text} className='space-y-8' onClick={() => {
                              setOpenMini(false)
                              setActiveSectionId('')
                         }}>
                              <CustomLink href='' title='Home' activeSectionId={activeSectionId} />
                         </animated.li>
                         <animated.li style={text1} onClick={() => {
                              setOpenMini(false)
                              setActiveSectionId('#about')
                         }}>
                              <CustomLink href='#about' title='About' activeSectionId={activeSectionId} />
                         </animated.li>
                         <animated.li style={text2} onClick={() => {
                              setOpenMini(false)
                              setActiveSectionId('#tech-stack')
                         }}>
                              <CustomLink href='#tech-stack' title='Tech Stack' activeSectionId={activeSectionId} />
                         </animated.li>
                         <animated.li style={text3} onClick={() => {
                              setOpenMini(false)
                              setActiveSectionId('#project')
                         }}>
                              <CustomLink href='#project' title='Project' activeSectionId={activeSectionId} />
                         </animated.li>
                    </ul>
               </div>
          </animated.div>
     )
}

export default MiniNav