'use client'

import Countdown from '@/components/Countdown'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">
        🌙 Ramadan Countdown
      </h1>

      <Countdown />

      <Link
        href="/ayat"
        className="mt-8 px-6 py-3 bg-emerald-500 rounded-full font-semibold"
      >
        Lihat Ayat Hari Ini
      </Link>
    </main>
  )
}
