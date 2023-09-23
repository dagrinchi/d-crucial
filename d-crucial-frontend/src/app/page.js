import { notFound } from 'next/navigation'

import Main from '@/components/Main'

import { getTheLastPostByDate } from '@/lib/api'

export default async function Home() {
  let date = new Date()
  date.setUTCHours(0, 0, 0, 0)

  const currentDate = date.toISOString()
  const pageData = await getTheLastPostByDate(currentDate)

  if (!pageData) return notFound()
  const data = pageData[0]

  return (
    <Main data={data} />    
  )
}
