import Navbar from '@/components/Header'
import SwitchModeButton from '@/components/Switcher'
import About from '@/components/about/page'
import HomePage from '@/components/home/page'
import TechStack from '@/components/tech-stack/page'
import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className="">
      <section id='' className='h-screen md:pt-8 '>
        <HomePage />
      </section>
      <section id='about' className='h-full pt-4 ' >
        <About />
      </section>
      <section id='tech-stack' className='h-screen ' >
        <TechStack />
      </section>
      {/* <section id='project' className='h-screen  pt-8 ' >
        project
      </section> */}
    </div >
  )
}

export default Home;
