"use client"

import React from 'react'
import html2canvas from 'html2canvas'

import Editor from '@/components/Editor'
import MainLogo from '@/components/MainLogo'
import Button from '@/components/Button'

const Main = ({ data }) => {

  const ref = React.useRef()
  const [loading, setLoading] = React.useState(false)

  const generateScreenCapture = () => {
    if (!ref.current) return
    let { width, height } = ref.current.getBoundingClientRect()

    setLoading(true)
    html2canvas(ref.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas")
      let croppedCanvasContext = croppedCanvas.getContext("2d")

      croppedCanvas.width = width * 2
      croppedCanvas.height = height * 2

      croppedCanvasContext.drawImage(canvas, 0, 0)

      const a = document.createElement("a")
      a.href = croppedCanvas.toDataURL()
      a.download = "receipt.png"
      a.click()

      setLoading(false)
    })
  }
  return (
    <main>
      <section ref={ref} className="flex max-w-[1263px] mx-auto min-h-screen flex-col items-center justify-between pl-10 pr-10 pt-4 pb-4">
        <div className="mb-4">
          <MainLogo />
        </div>
        <Editor value={data.content.document} />
      </section>
      <div className="flex flex-row justify-end items-center fixed bottom-0 left-0 right-0 bg-white shadow-lg w-full h-[80px] z-1" style={{
        'background': 'rgba(255, 255, 255, 0.8)',
        'borderRadius': '16px',
        'backdropFilter': 'blur(5px)',
        'border': '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <p>Hello <strong>John Doe</strong>, The Journalist</p>
        <Button text="Generate NFT" onClick={() => {
          generateScreenCapture()
        }} disabled={loading} />
      </div>
    </main>
  )
}

export default Main