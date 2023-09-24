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

    setLoading(true)
    html2canvas(ref.current).then(canvas => {
      const message = canvas.toDataURL('image/png')
      fetch("/api/update_post", {
        method: "POST",
        body: JSON.stringify({ message })
      })
        .then(() => {
          setLoading(false)
        })
        .catch(err => {
          console.error(err)
          setLoading(false)
        })
    })
  }
  return (
    <main>
      <section ref={ref} className="flex max-w-[1263px] mx-auto min-h-screen flex-col items-center justify-between px-10 py-4">
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