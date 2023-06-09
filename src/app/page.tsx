import Footer from '@/components/Footer'
import Navbar from '@/components/Header'
import SwitchModeButton from '@/components/Switcher'
import About from '@/components/about/page'
import HomePage from '@/components/home/page'
import Project from '@/components/project/page'
import TechStack from '@/components/tech-stack/page'
import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className="mt-4 md:mt-0">
      <section id='home' className="h-screen md:pt-8 w-screen bg-background_one">
        <HomePage />
      </section>
      <section id='about' className="h-full pt-4 max-sm:mt-4" >
        <About />
      </section>
      <section id='tech-stack' className='h-screen ' >
        <TechStack />
      </section>
      <section id='project' className='h-screen' >
        <Project />
      </section>
      {/* <Footer /> */}
    </div >
  )
}

export default Home;
