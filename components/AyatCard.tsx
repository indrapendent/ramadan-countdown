interface Ayat {
  arab: string
  arti: string
  sumber: string
}

interface Props {
  ayat: Ayat
  background: string
}

export default function AyatCard({ ayat, background }: Props) {
  return (
    <div
      id="card"
      className="relative w-[1080px] h-[1920px] rounded-[48px] p-24
      text-white shadow-2xl bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/45 rounded-[48px]" />

      <div className="relative">
        <p className="font-arabic text-7xl leading-[2] text-right font-bold">
          {ayat.arab}
        </p>

        <p className="mt-14 text-4xl leading-relaxed">
          {ayat.arti}
        </p>

        <p className="mt-8 text-3xl opacity-80">
          {ayat.sumber}
        </p>
      </div>

      <div className="relative text-2xl opacity-70">
        🌙 Ramadan Countdown
      </div>
    </div>
  )
}
