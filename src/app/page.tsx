import Navbar from '@/components/Header'
import SwitchModeButton from '@/components/Switcher'
import HomePage from '@/components/home/page'
import Image from 'next/image'
import React from 'react'

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className=''>
      <section id='' className='h-screen  pt-8 '>
        <HomePage />
      </section>
      <section id='about' className='h-screen  pt-8 ' >
        about
      </section>
      <section id='tech-stack' className='h-screen  pt-8 ' >
        tech stack
      </section>
      <section id='project' className='h-screen  pt-8 ' >
        project
      </section>
    </div >
  )
}
