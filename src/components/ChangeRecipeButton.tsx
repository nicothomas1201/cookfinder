import '@/styles/components/change-recipe.css'

import { useRecipesStore } from '@/store/recipesStore'

export function ChangeRecipeButton() {
  const setRecipe = useRecipesStore((state) => state.setRecipe)

  const changeRecipe = async () => {
    const response = await fetch('/api/random-recipe')
    const data = await response.json()
    setRecipe(data)
  }

  return (
    <button onClick={changeRecipe} className="button">
      <span className="change-title">Change</span>
    </button>
  )
}
