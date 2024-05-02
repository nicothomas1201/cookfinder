import { create } from 'zustand'

import type { Meal } from '@/lib/recipes'

interface RecipesStore {
  recipe: Meal | null
  loading: boolean
  setRecipe: (recipe: Meal) => void
  setLoading: (loading: boolean) => void
}

export const useRecipesStore = create<RecipesStore>((set) => ({
  recipe: null,
  loading: true,
  setLoading: (loading) => set({ loading }),
  setRecipe: (recipe) => set({ recipe }),
}))
