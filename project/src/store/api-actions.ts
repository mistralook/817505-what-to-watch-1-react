import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Movie } from '../types/main-page.types';
import { AppDispatch, State } from '../types/state.types';
import { User } from '../types/user.type';
import { ApiMethods } from '../const/apiMethods';
import { AuthInfo } from '../types/auth.type';
import { Review } from '../types/review.types';

export const fetchFilmsAction = createAsyncThunk<Movie[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Movie[]>(ApiMethods.FILMS);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { extra: api}) => {
    const { data: user } = await api.get<User>(ApiMethods.LOGIN);
    return user;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiMethods.LOGOUT);
  },
);

export const loginAction = createAsyncThunk<User, AuthInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email: email, password}, { extra: api}) => {
    const { data: user } = await api.post<User>(ApiMethods.LOGIN, {email, password});
    return user;
  },
);

export const fetchPromoFilm = createAsyncThunk<Movie, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Movie>(
      `${ApiMethods.PROMO}`
    );
    return data;
  }
);

export const fetchFavoriteFilms = createAsyncThunk<Movie[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchFavoriteFilm', async(_arg, {extra: api}) => {
  const {data} = await api.get<Movie[]>(
    ApiMethods.FAVOURITE
  );
  return data;
});

export const fetchSimilarById = createAsyncThunk<Movie[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>('fetchSimilarById', async (movieId: number, { extra: api }) => {
  const { data } = await api.get<Movie[]>(
    `${ApiMethods.FILMS}/${movieId}${ApiMethods.SIMILAR}`
  );
  return data;
});

export const fetchReviewsById = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchCommentsById', async (movieId: number, { extra: api }) => {
  const { data } = await api.get<Review[]>(
    `${ApiMethods.COMMENTS}/${movieId}`
  );
  return data;
});

export const fetchFilmById = createAsyncThunk<Movie, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchFilmById', async (movieId, { extra: api }) => {
  const { data } = await api.get<Movie>(`${ApiMethods.FILMS}/${movieId}`);
  return data;
});
