import { createAction } from '@reduxjs/toolkit';
import { Genre, Movie } from '../types/main-page.types';
import { AuthorizationStatus } from '../app-routes.const';
import { User } from '../types/user.type';

export const changeGenre = createAction<{genre: Genre}>('changeGenre');
export const loadMovies = createAction<Movie[]>('loadFilms');
export const setLoading = createAction<boolean>('setLoading');
export const changeAuthStatus = createAction<AuthorizationStatus>('changeAuthStatus');
export const setUserData = createAction<User | null>('setUserInfo');
