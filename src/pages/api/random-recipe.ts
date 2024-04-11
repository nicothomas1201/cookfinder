import type { APIContext } from 'astro'

export async function GET({ params, request }: APIContext) {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php',
  )
  const data = await response.json()

  return new Response(JSON.stringify(data.meals[0]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
