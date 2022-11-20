import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillMovieList } from './action';
import { MOVIE_LIST } from '../mocks/film';
import { Genre } from '../types/main-page.types';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  movies: MOVIE_LIST
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.activeGenre = genre;
    })
    .addCase(fillMovieList, (state, action) => {
      const { movies } = action.payload;
      state.movies = movies;
    });
});
