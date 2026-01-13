'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
}

const RAMADAN_DATE = new Date('2026-02-18T00:00:00')

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = RAMADAN_DATE.getTime() - Date.now()

      setTime({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 flex gap-10">
      {Object.entries(time).map(([key, value]) => (
        <div key={key} className="text-center">
          <p className="text-6xl md:text-7xl font-extrabold text-green-500">
            {value}
          </p>
          <p className="text-lg uppercase tracking-wide text-slate-500">
            {key}
          </p>
        </div>
      ))}
    </div>
  )
}
