import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillMovieList, resetMoviesAmount, showMoreMoviesAmount } from './action';
import { MOVIE_LIST } from '../mocks/film';
import { Genre } from '../types/main-page.types';
import { AMOUNT_OF_VISIBLE_MOVIES_STEP } from '../const/const';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  movies: MOVIE_LIST,
  amountOfVisibleMovies: AMOUNT_OF_VISIBLE_MOVIES_STEP
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
    })
    .addCase(showMoreMoviesAmount, (state) => {
      state.amountOfVisibleMovies += AMOUNT_OF_VISIBLE_MOVIES_STEP;
    })
    .addCase(resetMoviesAmount, (state) => {
      state.amountOfVisibleMovies = AMOUNT_OF_VISIBLE_MOVIES_STEP;
    });
});
