import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'

const font = Raleway({ subsets: ['latin'], weight: ['300', '500', '700', '900']})

export const metadata: Metadata = {
  title: 'Tin Lanh Knoxville',
  description: 'Hoi Thanh Tin Lanh Viet Nam tai Knoxville',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
