import { MainState } from '../../types/state.types';
import { ALL_GENRES_CONST } from '../../types/main-page.types';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/apiMethods';
import { fetchFavoriteFilms, fetchFilmsAction, fetchPromoFilm } from '../api-actions';
import { changeGenre } from '../action';

const initialState: MainState = {
  movies: [],
  currentGenre: ALL_GENRES_CONST,
  promoFilm: null,
  error: null,
  isDataLoaded: false,
  favoriteFilms: []
};

export const mainReducer = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(changeGenre, (state, action) => {
        state.currentGenre = action.payload;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
