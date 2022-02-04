import { createSlice } from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    images: [],
    ingredientSelected: '',
    recipeName: '',
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setIngredient: (state, action) => {
      state.ingredientSelected = action.payload;
    },
    setRecipeName: (state, action) => {
      state.recipeName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImages, setIngredient, setRecipeName } =
  ingredientsSlice.actions;

export default ingredientsSlice.reducer;
