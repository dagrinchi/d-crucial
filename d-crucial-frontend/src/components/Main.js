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
        body: JSON.stringify({ postId: data.id, message })
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
  const tags = data.tags.map(t => t.name).join(', ')
  return (
    <main className="pb-[80px]">
      <section ref={ref} className="flex max-w-[1200px] mx-auto min-h-screen flex-col items-center justify-between px-10 py-4">
        <div className="mb-6">
          <MainLogo />
          <p className="text-center text-h4 mt-4">{new Date(data.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
        </div>
        <Editor value={data.content.document} />
        <div className="flex w-full flex-col justify-end items-end">
          <p className="italic text-h4 font-italic">{data.author.name}</p>
          <p className="italic text-h5 font-italic">{tags}</p>
          <p className="text-center text-h4 mt-4">{new Date(data.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
        </div>
      </section>
      <div className="flex flex-row justify-end items-center fixed bottom-0 left-0 right-0 bg-white shadow-lg w-full h-[80px] z-1" style={{
        'background': 'rgba(255, 255, 255, 0.8)',
        'borderRadius': '16px',
        'backdropFilter': 'blur(5px)',
        'border': '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <h3 className="text-h3 font-bold mr-auto pl-4">Preview</h3>
        <p>Hello <strong>{data.author.name}</strong></p>
        <Button text="1. Capture and update" onClick={() => {
          generateScreenCapture()
        }} disabled={loading} className="mx-4" />
        <Button text="2. Connect metamask wallet" onClick={() => {

        }} disabled className="ml-4" />
        <Button text="3. Generate NFT" onClick={() => {

        }} disabled className="mr-4" />
        <Button text="4. Publish resources IPFS" onClick={() => {

        }} disabled className="mr-4" />
      </div>
    </main>
  )
}

export default Main