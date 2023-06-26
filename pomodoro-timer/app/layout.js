import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, Nav } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tomatillo - Focus Timer',
  description: 'Tomatillo tracker and to-do list.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Nav />
        {children}
          <Footer />
      </body>
    </html>
  )
}
