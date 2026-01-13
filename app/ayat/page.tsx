'use client'

import { useEffect, useState } from 'react'
import { toPng } from 'html-to-image'
import ayatData from '@/data/ayat.json'
import AyatCard from '@/components/AyatCard'
import { getRandomBackground } from '@/lib/getBackground'
import Link from 'next/link'

type Ayat = {
  arab: string
  arti: string
  sumber: string
}

type ShareType = 'ig' | 'wa'

export default function AyatPage() {
  const [ayat, setAyat] = useState<Ayat | null>(null)
  const [bg, setBg] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setAyat(ayatData[Math.floor(Math.random() * ayatData.length)])
    setBg(getRandomBackground())
  }, [])

  const share = async (_type: ShareType) => {
    const node = document.getElementById('card')
    if (!node) return

    const dataUrl = await toPng(node, { pixelRatio: 2 })
    const blob = await (await fetch(dataUrl)).blob()
    const file = new File([blob], 'ayat.png', { type: 'image/png' })

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file] })
    } else {
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = 'ayat.png'
      a.click()
    }

    setOpen(false)
  }

  if (!ayat) return null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <AyatCard ayat={ayat} background={bg} />

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="px-6 py-3 bg-emerald-500 rounded-full font-semibold"
        >
          Share ke Story
        </button>

        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-xl shadow">
            <button
              onClick={() => share('ig')}
              className="block w-full px-6 py-3 hover:bg-gray-100"
            >
              📸 Instagram
            </button>
            <button
              onClick={() => share('wa')}
              className="block w-full px-6 py-3 hover:bg-gray-100"
            >
              💬 WhatsApp
            </button>
          </div>
        )}
      </div>

      <Link href="/" className="text-sm opacity-70">
        ← Kembali ke Countdown
      </Link>
    </main>
  )
}
