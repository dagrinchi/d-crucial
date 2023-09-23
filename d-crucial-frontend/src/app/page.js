import { notFound } from 'next/navigation'

import Editor from '@/components/Editor'
import MainLogo from '@/components/MainLogo'

import { getTheLastPostByDate } from '@/lib/api'

export default async function Home() {
  let date = new Date()
  date.setUTCHours(0,0,0,0)
  
  const currentDate = date.toISOString()
  const pageData = await getTheLastPostByDate(currentDate)
  
  if (!pageData) return notFound()
  const data = pageData[0]
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="mb-4">
        <MainLogo />
      </div>
      <Editor value={data.content.document} />
    </main>
  )
}
