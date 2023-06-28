import { Poppins } from 'next/font/google'
import React from 'react'
const poppinsFont = Poppins({ subsets: ['latin'], weight: '700' })
function About() {
     return (
          <div className='h-ful md:pt-28 justify-between flex flex-col md:px-52 px-10'>
               <div className='flex flex-col md:space-y-4 space-y-6 items-center md:items-start'>
                    <div>
                         {/* text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */}
                         <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 drop-shadow-2xl ${poppinsFont.className}`} >About Me</h1>
                    </div>
                    <div className='text-center md:text-start'>
                         <p className='md:indent-20 indent-8 md:text-md text-sm leading-7 text-[#5a5a5a] dark:text-[#B5B5B5]'>I'm a versatile fullstack developer specializing in JavaScript, TypeScript, PHP, and Golang. With expertise in both frontend and backend development, I create dynamic and responsive web applications also cross platform applications. Additionally, I possess a strong skill set in server development, working with renowned platforms like Nginx and Apache. Through my proficiency in configuring and managing servers, I ensure optimal performance, security, and scalability for web applications. With a passion for continuous learning and staying up-to-date with the latest technologies, I strive to deliver cutting-edge solutions that enhance user experiences and drive business success.</p>
                    </div>
               </div>
               {/* <div className='bg-blue-200'>
                    page 2
               </div>
               <div className='bg-yellow-200'>
                    page 3
               </div> */}
          </div >
     )
}

export default About