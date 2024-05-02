import type { Meal } from '@/lib/recipes'

type Ingredients = {
  name: string
  measure: string
}

export const getIngredients = (
  recipe: Meal | null,
  max: number | null = null,
): Ingredients[] => {
  console.log(recipe)
  const ingredients: Ingredients[] = []

  if (!recipe) return []
  let maxIngredients = 0

  if (max && max > 0) {
    maxIngredients = max
  } else {
    maxIngredients = 20
  }

  for (let i = 1; i <= maxIngredients; i++) {
    if (recipe[`strIngredient${i}`] && recipe[`strIngredient${i}`] !== '') {
      ingredients.push({
        name: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`],
      })
    }
  }

  return ingredients
}
