import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipeName: '',
  basket: [],
  image: '',
  recipes: [],
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipeName: (state, action) => {
      state.recipeName = action.payload;
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    clear: (state) => {
      state.recipeName = initialState.recipeName;
      state.basket = initialState.basket;
      state.image = initialState.image;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImage, setBasket, setRecipeName, clear, setRecipes } =
  recipeSlice.actions;

export default recipeSlice.reducer;
