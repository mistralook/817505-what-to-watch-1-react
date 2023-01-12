import { createReducer } from '@reduxjs/toolkit';
import {
  changeAuthStatus,
  changeGenre, loadMovies, setLoading, setUserData,
} from './action';
import { Genre, Movie } from '../types/main-page.types';
import { AuthorizationStatus } from '../app-routes.const';
import { User } from '../types/user.type';

type TInitialState = {
  activeGenre: Genre;
  movies: Movie[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const initialState: TInitialState = {
  activeGenre: Genre.ALL_GENRES,
  movies: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    })
    .addCase(changeAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});
