import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    id: '',
    firstName: '',
    subscriptionToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload._id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.subscriptionToken = action.payload.subscriptionToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
