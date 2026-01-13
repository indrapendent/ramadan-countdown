import './globals.css'

export const metadata = {
  title: 'Ramadan Countdown',
  description: 'Hitung mundur Ramadan & Ayat Harian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-[#0f172a] text-white">
        {children}
      </body>
    </html>
  )
}
