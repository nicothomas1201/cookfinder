import '@/styles/components/card-recipe.css'
import { useEffect } from 'react'
import { useRecipesStore } from '@/store/recipesStore'
import { getIngredients } from '@/utils'
import type { Meal } from '@/lib/recipes'

export function CardRecipe() {
  const setRecipe = useRecipesStore((state) => state.setRecipe)
  const recipe = useRecipesStore((state) => state.recipe)
  const [loading, setLoading] = useRecipesStore((state) => [
    state.loading,
    state.setLoading,
  ])

  useEffect(() => {
    setLoading(true)
    fetch('/api/recipes/random.json')
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="skeleton">
        <div className="skeleton-img"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-ingredients"></div>
      </div>
    )
  }

  return (
    <a href={`/recipes/${recipe?.idMeal}`} className="card">
      <div className="recipe-img">
        <img src={recipe?.strMealThumb} />
      </div>
      <h3 className="card-title">{recipe?.strMeal}</h3>
      <p className="card-description">Descripcion receta</p>
      <div className="card-ingredients">
        {getIngredients(recipe, 4).map((ingredient, index) => (
          <span key={index} className="tag">
            {ingredient.name}
          </span>
        ))}
      </div>
    </a>
  )
}
