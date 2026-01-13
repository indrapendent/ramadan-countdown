import './globals.css'
import { Inter, Amiri } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-arabic',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${amiri.variable}`}>
      <body className="bg-slate-50 text-slate-900 font-inter">
        {children}
      </body>
    </html>
  )
}
