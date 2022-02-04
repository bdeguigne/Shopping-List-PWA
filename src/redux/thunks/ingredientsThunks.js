import { fetchIngredients } from '../serviceApi';
import { setImages } from '../ingredientsSlice';

const fetchIngredientsThunk = async (dispatch) => {
  try {
    const response = await fetchIngredients();
    if (response.data.success) {
      dispatch(setImages(response.data.data));
    }
  } catch (error) {
    console.log('Error fetch ingredients', error);
  }
  return null;
};

export default fetchIngredientsThunk;
