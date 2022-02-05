import { sendNotificationToAll } from '../notificationService';
import { clear, setRecipes } from '../recipeSlice';
import { addRecipeToDatabase, fetchRecipes } from '../serviceApi';

export const fetchAllRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await fetchRecipes();
      if (response.data.success) {
        dispatch(setRecipes(response.data.data));
      }
    } catch (error) {
      console.log('Error fetch recipes', error);
    }
  };
};

export const storeRecipeThunk = () => {
  return async (dispatch, getState) => {
    const { recipe } = getState();
    const response = await addRecipeToDatabase({ ...recipe });
    if (response.data.success) {
      const { data } = response.data;
      console.log('Successfully create recipe', data);
      sendNotificationToAll(data.recipeName, data._id);
      dispatch(clear());
      dispatch(fetchAllRecipes());
    }
  };
};
