import type { Metadata } from 'next'
import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover Your Dream Car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
