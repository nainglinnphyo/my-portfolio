'use client'
import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Footer from '../Footer'

const poppinsFont = Poppins({ subsets: ['latin'], weight: '700' })

function Project() {
     return (
          <div className='pt-14'>
               <div className='text-center py-2 items-center'>
                    <h1 className={`md:text-3xl text-2xl text-[#5a5a5a] dark:text-[#B5B5B5] font-black tracking-wide leading-8 ${poppinsFont.className}`} >Projects</h1>
                    <p>Things I’ve built so far</p>
               </div>
               <div className='grid md:grid-cols-3 gap-4 grid-cols-1 md:mt-0 mt-4 md:px-20 w-[75%]  m-auto'>
                    <div className='bg-[#363636] rounded-lg'>
                         <Image src='/image/NestJs.jpeg' alt='' width={200} height={200} className='w-full rounded-t-lg h-40' />
                         <div className='p-4'>
                              <h1 className='text-[#cccccc]'>Nest js Microservices</h1>
                              <p className='text-sm text-[#818181] py-2'>
                                   This is a nest js & redis microservice architecture build mini project.
                              </p>
                              <p className='text-sm text-[#818181]'>
                                   Tech Stack: Nestjs,Redis
                              </p>
                              <Link href='https://github.com/nainglinnphyo/nest-microservice' target='_blank' className='flex py-2 text-white items-center space-x-1'>
                                   <Icon icon='mdi:github' />
                                   <p className={`text-[0.7rem] text-white font-mono underline`}>
                                        View Code
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <div className='bg-[#363636] rounded-lg'>
                         <Image src='/image/FoodDeliImage.png' alt='' width={200} height={200} className='w-full rounded-t-lg h-40' />
                         <div className='p-4'>
                              <h1 className='text-[#cccccc]'>Food Deli App Ui</h1>
                              <p className='text-sm text-[#818181] py-2'>
                                   This app develop with react native.Ui from Figma free source.
                              </p>
                              <p className='text-sm text-[#818181]'>
                                   Tech Stack: React Native,Expo
                              </p>
                              <Link href='https://github.com/nainglinnphyo/Food-Deli-App-Ui' target='_blank' className='flex py-2 text-white items-center space-x-1'>
                                   <Icon icon='mdi:github' />
                                   <p className={`text-[0.7rem] text-white font-mono underline`}>
                                        View Code
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <div className='bg-[#363636] rounded-lg'>
                         <Image src='/image/go.webp' alt='' width={200} height={200} className='w-full rounded-t-lg h-40' />
                         <div className='p-4'>
                              <h1 className='text-[#cccccc]'>Golang Gin Jwt Authentication</h1>
                              <p className='text-sm text-[#818181] py-2'>
                                   Golang with gin jwt authentication.
                              </p>
                              <p className='text-sm text-[#818181]'>
                                   Tech Stack: Go,Gin,Jwt
                              </p>
                              <Link href='https://github.com/nainglinnphyo/go-gin-jwt-authentication' target='_blank' className='flex py-2 text-white items-center space-x-1'>
                                   <Icon icon='mdi:github' />
                                   <p className={`text-[0.7rem] text-white font-mono underline`}>
                                        View Code
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <div className='bg-[#363636] rounded-lg'>
                         <Image src='/image/NestTypeOrm.png' alt='' width={200} height={200} className='w-full rounded-t-lg h-40 bg-gray-800 dark:bg-white' />
                         <div className='p-4'>
                              <h1 className='text-[#cccccc]'>Nest js Vue POS</h1>
                              <p className='text-sm text-[#818181] py-2'>
                                   This POS Project Build with nestjs,typeorm,Vuejs.
                              </p>
                              <p className='text-sm text-[#818181]'>
                                   Tech Stack: Nestjs,TypeOrm,Vuejs
                              </p>
                              <Link href='https://github.com/nainglinnphyo/nest-vue-pos' target='_blank' className='flex py-2 text-white items-center space-x-1'>
                                   <Icon icon='mdi:github' />
                                   <p className={`text-[0.7rem] text-white font-mono underline`}>
                                        View Code
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <div className='bg-[#363636] rounded-lg'>
                         <Image src='/image/reactNative.png' alt='' width={200} height={200} className='w-full rounded-t-lg h-40' />
                         <div className='p-4'>
                              <h1 className='text-[#cccccc]'>React Native Ecommerce UI </h1>
                              <p className='text-sm text-[#818181] py-2'>
                                   Ecommerce UI with react native,
                              </p>
                              <p className='text-sm text-[#818181]'>
                                   Tech Stack: React Native,Expo
                              </p>
                              <Link href='https://github.com/nainglinnphyo/react-native-ecommerce' target='_blank' className='flex py-2 text-white items-center space-x-1'>
                                   <Icon icon='mdi:github' />
                                   <p className={`text-[0.7rem] text-white font-mono underline`}>
                                        View Code
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <div className='bg-[#363636] rounded-lg'>
                         <Image src='/image/node.png' alt='' width={200} height={200} className='w-full rounded-t-lg h-40' />
                         <div className='p-4'>
                              <h1 className='text-[#cccccc]'>Nodejs  Mini Mart Api</h1>
                              <p className='text-sm text-[#818181] py-2'>
                                   Mini Mart Api wth nodejs,typescript,prisma
                              </p>
                              <p className='text-sm text-[#818181]'>
                                   Tech Stack: Nodejs,Typescript,Prisma
                              </p>
                              <Link href='https://github.com/nainglinnphyo/nodejs-typescript-mini-mart-api' target='_blank' className='flex py-2 text-white items-center space-x-1'>
                                   <Icon icon='mdi:github' />
                                   <p className={`text-[0.7rem] text-white font-mono underline`}>
                                        View Code
                                   </p>
                              </Link>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     )
}

export default Project