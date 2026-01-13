export function getRandomBackground() {
  const images = [
    '/backgrounds/ramadan-1.jpg',
    '/backgrounds/ramadan-2.jpg',
    '/backgrounds/ramadan-3.jpg',
    '/backgrounds/ramadan-5.jpg',
    '/backgrounds/ramadan-6.jpg',
    '/backgrounds/ramadan-7.jpg',
    '/backgrounds/ramadan-8.jpg',
    '/backgrounds/ramadan-9.jpg',
  ]

  return images[Math.floor(Math.random() * images.length)]
}
