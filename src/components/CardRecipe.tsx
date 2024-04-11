import '@/styles/components/card-recipe.css'
import { useEffect, useMemo } from 'react'
import { useRecipesStore } from '@/store/recipesStore'

export function CardRecipe() {
  const setRecipe = useRecipesStore((state) => state.setRecipe)
  const recipe = useRecipesStore((state) => state.recipe)

  useEffect(() => {
    fetch('/api/random-recipe')
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err))
  }, [])

  const ingredients = useMemo(() => {
    // strMealThumb
    const ingredients = []
    for (let i = 1; i <= 4; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push({
          name: recipe[`strIngredient${i}`],
          measure: recipe[`strMeasure${i}`],
        })
      }
    }
    return ingredients
  }, [recipe])

  return (
    <div className="card">
      <div className="recipe-img">
        <img src={recipe.strMealThumb} />
      </div>
      <h3 className="card-title">{recipe.strMeal}</h3>
      <p className="card-description">Descripcion receta</p>
      <div className="card-ingredients">
        {ingredients.map((ingredient, index) => (
          <span key={index} className="tag">
            {ingredient.name}
          </span>
        ))}
      </div>
    </div>
  )
}
