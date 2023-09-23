const BACKEND_ENDPOINT = 'http://localhost:8000/api/graphql'

async function fetchAPI(query, variables = {}) {
  try {
    const response = await fetch(BACKEND_ENDPOINT, {
      method: 'post',
      body: JSON.stringify({ query, variables }),
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return await response.json()
  } catch (error) {
    console.error(JSON.stringify(error))
  }
  return { data: undefined }
}

export async function getTheLastPostByDate(date) {
  const { data } = await fetchAPI(`
    query TheLastPostByDate {
      posts(orderBy: [{ createdAt: desc }], take: 1, where: { createdAt: { gte: "${date}" }}) {
        author {
          name
          email
        }
        content {
          document(hydrateRelationships: true)
        }
        title
        tags {
          id
          name
        }
        createdAt
      }
    }
  `)
  return data?.posts
}
