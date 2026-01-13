'use client'

import { useEffect, useState } from 'react'
import { toPng } from 'html-to-image'
import AyatCard from '@/components/AyatCard'
import ayatData from '@/data/ayat.json'
import { getRandomBackground } from '@/lib/getBackground'

export default function HomePage() {
  const [ayat, setAyat] = useState(null)
  const [background, setBackground] = useState('')

  // ambil ayat & background saat page load
  useEffect(() => {
    const randomAyat =
      ayatData[Math.floor(Math.random() * ayatData.length)]
    setAyat(randomAyat)
    setBackground(getRandomBackground())
  }, [])

  // fungsi share (download image)
  const handleShare = async () => {
    const node = document.getElementById('card')
    if (!node) return

    const dataUrl = await toPng(node, {
      pixelRatio: 2,
      cacheBust: true,
    })

    const link = document.createElement('a')
    link.download = 'ramadan-countdown.png'
    link.href = dataUrl
    link.click()
  }

  if (!ayat) return null

  return (
    <main className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-6 p-6">
      {/* CARD */}
      <AyatCard ayat={ayat} background={background} />

      {/* BUTTON */}
      <button
        onClick={handleShare}
        className="
          px-6 py-3 rounded-full
          bg-emerald-500 hover:bg-emerald-600
          text-white font-semibold
          transition
        "
      >
        Share ke Story
      </button>

      {/* FOOTER */}
      <p className="text-sm text-white/60 mt-4">
        🌙 Ramadan Countdown
      </p>
    </main>
  )
}
