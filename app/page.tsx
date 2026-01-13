'use client'

import { useEffect, useState } from 'react'
import { toPng } from 'html-to-image'
import AyatCard from '@/components/AyatCard'
import ayatData from '@/data/ayat.json'
import { getRandomBackground } from '@/lib/getBackground'

type Ayat = {
  arab: string
  arti: string
  sumber: string
}

type ShareTarget = 'ig' | 'wa'

export default function HomePage() {
  const [ayat, setAyat] = useState<Ayat | null>(null)
  const [background, setBackground] = useState<string>('')
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false)

  // ambil ayat & background saat load
  useEffect(() => {
    const randomAyat =
      ayatData[Math.floor(Math.random() * ayatData.length)]
    setAyat(randomAyat)
    setBackground(getRandomBackground())
  }, [])

  // generate image dari card
  const generateImage = async (): Promise<string | null> => {
    const node = document.getElementById('card')
    if (!node) return null

    return await toPng(node, {
      pixelRatio: 2,
      cacheBust: true,
    })
  }

  // share image (IG / WA via share sheet)
  const shareImage = async (type: ShareTarget): Promise<void> => {
    const dataUrl = await generateImage()
    if (!dataUrl) return

    const blob = await (await fetch(dataUrl)).blob()
    const file = new File([blob], 'ramadan-countdown.png', {
      type: 'image/png',
    })

    // Mobile browser share
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: 'Ramadan Countdown',
      })
    } else {
      // fallback desktop
      const link = document.createElement('a')
      link.href = dataUrl
      link.download = 'ramadan-countdown.png'
      link.click()
    }

    setShowShareOptions(false)
  }

  if (!ayat) return null

  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 overflow-x-hidden">
      <div className="flex flex-col items-center gap-4">
        {/* CARD */}
        <AyatCard ayat={ayat} background={background} />

        {/* SHARE BUTTON + OPTIONS */}
        <div className="relative">
          <button
            onClick={() => setShowShareOptions(!showShareOptions)}
            className="
              px-6 py-3 rounded-full
              bg-emerald-500 hover:bg-emerald-600
              text-white font-semibold
              transition
            "
          >
            Share ke Story
          </button>

          {showShareOptions && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-lg overflow-hidden z-20">
              <button
                onClick={() => shareImage('ig')}
                className="w-full px-6 py-3 text-sm hover:bg-gray-100"
              >
                📸 Instagram Story
              </button>
              <button
                onClick={() => shareImage('wa')}
                className="w-full px-6 py-3 text-sm hover:bg-gray-100"
              >
                💬 WhatsApp Status
              </button>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <p className="text-xs text-white/60 mt-2">
          🌙 Ramadan Countdown
        </p>
      </div>
    </main>
  )
}
