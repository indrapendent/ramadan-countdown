type Ayat = {
  arab: string
  arti: string
  sumber: string
}

export default function AyatCard({
  ayat,
  background,
}: {
  ayat: Ayat
  background: string
}) {
  return (
    <div
      id="card"
      className="
        w-full max-w-sm sm:max-w-md
        rounded-2xl overflow-hidden shadow-xl
      "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black/60 p-6 text-center">
        <p className="text-3xl sm:text-4xl leading-relaxed mb-4 font-arab">
          {ayat.arab}
        </p>

        <p className="text-base sm:text-lg italic mb-4">
          {ayat.arti}
        </p>

        <p className="text-sm opacity-80">
          {ayat.sumber}
        </p>
      </div>
    </div>
  )
}
