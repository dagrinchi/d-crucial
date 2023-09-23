import { notFound } from 'next/navigation'

import { getTheLastPostByDate } from '@/lib/api'
import Editor from '@/components/Editor'

export default async function Home() {
  let date = new Date()
  date.setUTCHours(0,0,0,0)
  
  const currentDate = date.toISOString()
  const pageData = await getTheLastPostByDate(currentDate)
  
  if (!pageData) return notFound()
  const data = pageData[0]
  
  console.log(data.content.document[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Editor value={data.content.document} />
    </main>
  )
}
