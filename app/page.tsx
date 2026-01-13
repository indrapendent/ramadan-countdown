import Countdown from '../components/Countdown'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center">


      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        🌙 Ramadan Countdown
      </h1>

      <p className="text-xl md:text-2xl text-slate-600">
  Menuju bulan suci Ramadan
</p>


      <Countdown />

      <Link
        href="/ayat"
        className="mt-4 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
      >
        Lihat Ayat Hari Ini
      </Link>

    </main>
  )
}
