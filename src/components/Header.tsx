'use client'
import React, { useEffect, useState } from 'react'
import SwitchModeButton from './Switcher'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import MiniNav from './MiniNav';
import { animated, useSpring } from '@react-spring/web'
import { useTheme } from 'next-themes';

export const CustomLink = ({ title, href, className, activeSectionId }: { title: string, href: string, className?: string, activeSectionId: string }) => {
     return (
          <Link href={href} className={`relative group cursor-pointer text-[#000] dark:text-[#B5B5B5] font-bold`}>
               {title}<span className='font-bold'>.</span>
               <span className={` h-[0.12rem] bg-black dark:bg-[#B5B5B5] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${href === activeSectionId ? 'w-full' : 'w-0'}`}>
               </span>
          </Link>
     )
}

function Navbar() {
     const { systemTheme, theme, setTheme } = useTheme();
     const currentTheme = theme === 'system' ? systemTheme : theme;
     const [openMini, setOpenMini] = useState(false)
     const [activeSectionId, setActiveSectionId] = useState('');
     useEffect(() => {
          const handleScroll = () => {
               const sections = document.querySelectorAll('section');
               sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const scrollPosition = window.scrollY;
                    if (
                         scrollPosition >= sectionTop - sectionHeight / 2 &&
                         scrollPosition < sectionTop + sectionHeight - sectionHeight / 2
                    ) {
                         console.log(section.id);

                         setActiveSectionId(`${section.id === '' ? '' : `#${section.id}`}`);
                    }
               });
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const animateProps = useSpring({
          from: { transform: 'translate3d(0,-400px,0)', opacity: 0, blur: 10 },
          to: { transform: 'translate3d(0,0,0)', opacity: 1, blur: 0 },
          delay: 400
     })

     return (
          <div className={`fixed top-0 left-0 w-full md:h-16 ${!openMini && 'h-14'} backdrop-blur-md z-50 md:text-base dark:text-[#B5B5B5] text-black `}>
               {
                    openMini ? <MiniNav setOpenMini={setOpenMini} activeSectionId={activeSectionId} setActiveSectionId={setActiveSectionId} /> :
                         <animated.nav className='flex justify-between p-4' style={animateProps}>
                              <div className='p-2'>
                                   <div className='md:hidden'>
                                        <SwitchModeButton />
                                   </div>
                                   <div className='hidden md:block text-black dark:text-[#B5B5B5]'></div>
                              </div>
                              <div className='flex space-x-16 p-2'>
                                   <div className='md:hidden' onClick={() => setOpenMini(true)}>
                                        <Icon icon='line-md:close-to-menu-alt-transition' width='1.7rem' height='1.7rem' />
                                   </div>
                                   <ul className={`space-x-10 md:flex hidden`}>
                                        <li onClick={() => {
                                             setActiveSectionId('')
                                        }}>
                                             <CustomLink href='' title='Home' activeSectionId={activeSectionId} />
                                        </li>
                                        <li onClick={() => setActiveSectionId('#about')}>
                                             <CustomLink href='#about' title='About' activeSectionId={activeSectionId} />
                                        </li>
                                        <li onClick={() => setActiveSectionId('#tech-stack')}>
                                             <CustomLink href='#tech-stack' title='Tech Stack' activeSectionId={activeSectionId} />
                                        </li>
                                        <li onClick={() => setActiveSectionId('#project')}>
                                             <CustomLink href='#project' title='Project' activeSectionId={activeSectionId} />
                                        </li>
                                        <li className='cursor-pointer'>
                                             <SwitchModeButton />
                                        </li>
                                   </ul>

                              </div>

                         </animated.nav >
               }
          </div>
     )
}
export default Navbar