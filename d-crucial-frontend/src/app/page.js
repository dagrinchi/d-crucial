import { notFound } from 'next/navigation'

import Editor from '@/components/Editor'
import MainLogo from '@/components/MainLogo'

import { getTheLastPostByDate } from '@/lib/api'

export default async function Home() {
  let date = new Date()
  date.setUTCHours(0, 0, 0, 0)

  const currentDate = date.toISOString()
  const pageData = await getTheLastPostByDate(currentDate)

  if (!pageData) return notFound()
  const data = pageData[0]

  return (
    <main>
      <section className="flex max-w-[1263px] mx-auto min-h-screen flex-col items-center justify-between pl-10 pr-10 pt-4 pb-4">
        <div className="mb-4">
          <MainLogo />
        </div>
        <Editor value={data.content.document} />
      </section>
      <div className="flex flex-row justify-end items-center fixed bottom-0 left-0 right-0 bg-white shadow-lg w-full h-[80px] z-[9999]" style={{
        'background': 'rgba(255, 255, 255, 0.8)',
        'border-radius': '16px',
        'backdrop-filter': 'blur(5px)',
        '-webkit-backdrop-filter': 'blur(5px)',
        'border': '1px solid rgba(255, 255, 255, 0.3)',
      }}>
        <p><strong>John Doe</strong>, The Journalist</p>
        <button type="button" className="bg-[#2563eb] text-white text-button rounded h-10 w-[150px] shadow-md mx-4">Generate NFT</button>
      </div>
    </main>
  )
}
