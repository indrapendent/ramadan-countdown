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
        relative
        w-full max-w-md
        aspect-9/16
        rounded-2xl overflow-hidden
        shadow-xl
        bg-black
      "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        crossOrigin="anonymous"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center p-6 text-center text-white">
        <p className="text-3xl sm:text-4xl leading-relaxed mb-4">
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
