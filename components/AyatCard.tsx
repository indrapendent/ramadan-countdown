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
    <div className="flex justify-center overflow-hidden">
      <div
        id="card"
        className="
          relative
          w-[1080px] h-[1920px]
          rounded-[48px]
          p-24
          text-white
          shadow-2xl
          bg-cover bg-center
          flex flex-col justify-between

          origin-top
          scale-[0.32]
          sm:scale-[0.42]
          md:scale-[0.6]
          lg:scale-[0.8]
          xl:scale-100
        "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/45 rounded-[48px]" />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* Ayat Arab */}
          <p
            className="
              font-arabic
              text-7xl
              leading-[2]
              text-right
              font-bold
            "
          >
            {ayat.arab}
          </p>

          {/* Arti */}
          <p
            className="
              mt-14
              text-4xl
              leading-relaxed
              opacity-95
            "
          >
            {ayat.arti}
          </p>

          {/* Sumber */}
          <p
            className="
              mt-8
              text-3xl
              opacity-80
            "
          >
            {ayat.sumber}
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-2xl opacity-70">
          🌙 Ramadan Countdown
        </div>
      </div>
    </div>
  )
}
