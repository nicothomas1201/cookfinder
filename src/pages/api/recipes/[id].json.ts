import type { APIContext } from 'astro'
import config from '@/config'

export async function GET({ params }: APIContext) {
  const { id } = params
  console.log(id)
  const response = await fetch(`${config.apiBase}/lookup.php?i=${id}`)
  const data = await response.json()

  return new Response(JSON.stringify(data.meals[0]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
