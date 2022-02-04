import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredientsSlice';
import sliderReducer from './sliderSlice';

export default configureStore({
  reducer: {
    ingredients: ingredientReducer,
    slider: sliderReducer,
  },
});
