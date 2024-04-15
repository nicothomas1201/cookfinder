import type { APIContext } from 'astro'
import config from '@/config'

export async function GET({ params, request }: APIContext) {
  const response = await fetch(`${config.apiBase}/random.php`)
  const data = await response.json()

  return new Response(JSON.stringify(data.meals[0]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
