import { createAction } from '@reduxjs/toolkit';
import { Genre, Movie } from '../types/main-page.types';

export const changeGenre = createAction<{genre: Genre}>('changeGenre');
export const fillMovieList = createAction<{movies: Movie[]}>('fillMovieList');
