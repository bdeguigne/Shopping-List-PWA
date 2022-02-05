import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredientsSlice';
import sliderReducer from './sliderSlice';
import recipeReducer from './recipeSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    ingredients: ingredientReducer,
    slider: sliderReducer,
    recipe: recipeReducer,
    user: userReducer,
  },
});
