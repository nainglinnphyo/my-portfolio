'use client'

import { Icon } from '@iconify/react'
import { Poppins } from 'next/font/google'
import React, { useState } from 'react'
const poppinsFont = Poppins({ subsets: ['latin'], weight: '700' })

function TechStack() {
     return (
          <div className='h-ful md:pt-28 pt-20 justify-between flex flex-col md:px-52 md:w-[100%] lg:w-[75%] -z-50 md:space-y-8 space-y-8' >
               <div className='flex flex-col md:space-y-4 space-y-6 items-center md:items-start'>
                    <div>
                         <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >About Me</h1>
                         <p className='font-normal text-sm'> Technologies I’ve been working with recently</p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                         <div>01</div>
               
                         <div>09</div>
                    </div>
               </div>
          </div >
     )
}

export default TechStack