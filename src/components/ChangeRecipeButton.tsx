import '@/styles/components/change-recipe.css'

import { useRecipesStore } from '@/store/recipesStore'

export function ChangeRecipeButton() {
  const setRecipe = useRecipesStore((state) => state.setRecipe)
  const setLoading = useRecipesStore((state) => state.setLoading)

  const changeRecipe = async () => {
    setLoading(true)
    const response = await fetch('/api/recipes/random.json')
    const data = await response.json()
    setLoading(false)
    setRecipe(data)
  }

  return (
    <button onClick={changeRecipe} className="button">
      <span className="change-title">Change</span>
    </button>
  )
}
