import { createSlice } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    activeStep: 0,
  },
  reducers: {
    handleNext: (state) => {
      state.activeStep += 1;
    },
    handleBack: (state) => {
      state.activeStep -= 1;
    },
    handleStepChange: (state, action) => {
      state.activeStep = action.payload;
    },
    resetStep: (state) => {
      state.activeStep = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleNext, handleBack, handleStepChange, resetStep } =
  sliderSlice.actions;

export default sliderSlice.reducer;
