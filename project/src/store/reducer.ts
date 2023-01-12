import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre, loadMovies, setLoading,
} from './action';
import { Genre, Movie } from '../types/main-page.types';

type TInitialState = {
  activeGenre: Genre;
  movies: Movie[];
  isLoading: boolean;
};

const initialState: TInitialState = {
  activeGenre: Genre.ALL_GENRES,
  movies: [],
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.activeGenre = genre;
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});
