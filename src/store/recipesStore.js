import { create } from 'zustand'

export const useRecipesStore = create((set) => ({
  recipe: {},
  setRecipe: (recipe) => set({ recipe }),
}))
