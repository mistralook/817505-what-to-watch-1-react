import { MovieState } from '../../types/state.types';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/apiMethods';
import { fetchFilmById, fetchReviewsById, fetchSimilarById } from '../api-actions';

const initialState: MovieState = {
  movie: null,
  similarMovies: [],
  reviews: []
};

export const movieReducer = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.movie = action.payload;
      })
      .addCase(fetchSimilarById.fulfilled, (state, action) => {
        state.similarMovies = action.payload;
      })
      .addCase(fetchReviewsById.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
