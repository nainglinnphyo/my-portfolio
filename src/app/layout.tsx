import Navbar from '@/components/Header'
import './globals.css'
import { Roboto_Slab } from 'next/font/google'
import { InitialPageLoad } from '@/components/InitialPageLoad'
import Head from 'next/head'
import favicon from './favicon.ico';

const inter = Roboto_Slab({ subsets: ['latin'], weight: '400' })

// export const metadata = {
//   title: 'Naing Linn Phyo | fullstack Dev',
//   description: 'Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and SQL. Browse through my portfolio to see my projects, problem-solving abilities, and dedication to delivering high-quality software solutions.',
// }
export const metadata = {
  title: 'Naing Linn Phyo | fullstack Dev',
  description: 'Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and SQL.',
  openGraph: {
    title: 'Naing Linn Phyo | fullstack Dev',
    description: 'Experienced full-stack developer skilled in building robust web applications. Proficient in front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and SQL.',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </head>
      <body className={`${inter.className} w-full`}>
        <InitialPageLoad>
          <Navbar />
          {children}
        </InitialPageLoad>
      </body>
    </html>
  )
}
