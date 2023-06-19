import Navbar from '@/components/Header'
import './globals.css'
import { Roboto_Slab } from 'next/font/google'
import { InitialPageLoad } from '@/components/InitialPageLoad'
import Head from 'next/head'

const inter = Roboto_Slab({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Naing Linn Phyo',
  description: 'Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and SQL. Browse through my portfolio to see my projects, problem-solving abilities, and dedication to delivering high-quality software solutions.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <InitialPageLoad>
          <Navbar />
          {children}
        </InitialPageLoad>
      </body>
    </html>
  )
}
