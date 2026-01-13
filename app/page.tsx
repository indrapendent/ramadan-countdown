import { toPng } from 'html-to-image'

const waitForImage = async (el: HTMLElement) => {
  return new Promise<void>((resolve) => {
    const check = () => {
      if (el.dataset.bgLoaded === 'true') {
        resolve()
      } else {
        setTimeout(check, 100)
      }
    }
    check()
  })
}

const share = async () => {
  const node = document.getElementById('card')
  if (!node) return

  // ⏳ TUNGGU IMAGE SELESAI LOAD
  await waitForImage(node)

  const dataUrl = await toPng(node, {
    pixelRatio: 2,
    cacheBust: true,
  })

  const link = document.createElement('a')
  link.download = 'ayat.png'
  link.href = dataUrl
  link.click()
}
