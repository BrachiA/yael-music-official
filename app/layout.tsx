import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Amatic_SC } from 'next/font/google'

const amatic = Amatic_SC({ 
  subsets: ['hebrew'],
  weight: ['400', '700'],
})


export const metadata: Metadata = {
  title: 'יעל אנגל - אתר רשמי',
  description: 'האתר הרשמי של יעל אנגל, זמרת יוצרת ומפיקה מוזיקה. גלה את המוזיקה, שירות הפקה ומידע על הופעות.',
  openGraph: {
    title: 'יעל אנגל - אתר רשמי',
    description: 'האתר הרשמי של יעל אנגל, זמרת יוצרת ומפיקה מוזיקה.',
    type: 'website',
    url: 'https://yael-music-official.com',

  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="he" dir="rtl">
        <body className="bg-dark text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

