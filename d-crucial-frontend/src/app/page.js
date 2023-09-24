import { notFound } from 'next/navigation'

import Main from '@/components/Main'

import { getTheLastPostByDate } from '@/lib/api'

export default async function Home() {
  const pageData = await getTheLastPostByDate()

  if (!pageData) return notFound()
  const data = pageData[0]

  if (!data?.content) return notFound()

  return (
    <Main data={data} />    
  )
}
