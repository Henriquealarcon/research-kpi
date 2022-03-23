import { createSlice } from '@reduxjs/toolkit';

export const questionsKPI = createSlice({
  name: 'questionsKPI',
  initialState: {
    email: '',
    answers: [],
  },
  reducers: {
    createAnswers: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.answers = [...state.answers, action.payload];
    },
    updateAnswers: (state, action) => {
      const prevAnswerIndex = state.answers
        .findIndex((answer) => answer.id === action.payload.id);
      state.answers.splice(prevAnswerIndex, 1, action.payload);
    },
  },
});

export const {
  createAnswers,
  updateAnswers,
} = questionsKPI.actions;

export default questionsKPI.reducer;
