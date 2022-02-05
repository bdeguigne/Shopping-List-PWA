import { createOrLogUserRequest } from '../serviceApi';
import { setUser } from '../userSlice';

export const createOrLogUser = (email, firstName) => async (dispatch) => {
  try {
    const res = await createOrLogUserRequest(email, firstName);
    if (res.data.success) {
      const user = res.data.data;
      dispatch(setUser(user));
    }
  } catch (error) {
    console.log('Error fetch ingredients', { error });
  }
  return null;
};
