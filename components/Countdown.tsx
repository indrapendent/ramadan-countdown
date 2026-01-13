'use client'

import { useEffect, useState } from 'react'

export default function Countdown() {
  const ramadanDate = new Date('2026-02-17T00:00:00')
  const [text, setText] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now()
      const diff = ramadanDate.getTime() - now

      if (diff <= 0) {
        setText('Ramadan telah tiba 🌙')
        clearInterval(timer)
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setText(`${days} hari ${hours} jam ${minutes} menit`)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-2xl sm:text-3xl font-semibold">
      {text}
    </div>
  )
}
