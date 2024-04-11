import { create } from 'zustand'

import type { Meal } from '@/lib/recipes'

interface RecipesStore {
  recipe: Meal | null
  setRecipe: (recipe: Meal) => void
}

export const useRecipesStore = create<RecipesStore>((set) => ({
  recipe: null,
  setRecipe: (recipe) => set({ recipe }),
}))
