import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Safyro - Where Precision Meets Freedom',
  description: 'The Hybrid Project Management Platform combining Waterfall precision and Agile flexibility without compromise. Beta launching Spring 2026.',
  openGraph: {
    title: 'Safyro - Where Precision Meets Freedom',
    description: 'Beta launching Spring 2026',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safyro - Where Precision Meets Freedom',
    description: 'The first true hybrid project management platform',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
