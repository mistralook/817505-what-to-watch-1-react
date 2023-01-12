import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
} from './action';
import { Genre } from '../types/main-page.types';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.activeGenre = genre;
    });
});
