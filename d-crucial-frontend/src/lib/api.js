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

export async function getTheLastPostByDate() {
  const { data } = await fetchAPI(`
    query TheLastPostByDate {
      posts(orderBy: [{ createdAt: desc }], take: 1) {
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


export async function updatePostWithChainMessage(postId, message) {
  const { data } = await fetchAPI(`
    mutation updatePostWithChainMessage($postId: ID!, $message: String!) {
      updatePost(where: { id: $postId }, data: { chainMessage: $message }) {
        id
      }
    }
  `, { postId, message })
  console.log(data)
  return {}
}