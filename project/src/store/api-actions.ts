import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Movie } from '../types/main-page.types';
import { AppDispatch, State } from '../types/state.types';
import { changeAuthStatus, loadMovies, setLoading, setUserData } from './action';
import { dropToken, saveToken } from '../transport/api.token';
import { AuthorizationStatus } from '../app-routes.const';
import { User } from '../types/user.type';
import { ApiMethods } from '../const/apiMethods';
import { AuthInfo } from '../types/auth.type';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movie[]>(ApiMethods.FILMS);
    dispatch(setLoading(true));
    dispatch(loadMovies(data));
    dispatch(setLoading(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiMethods.LOGIN);
      dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
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
    dropToken();
    dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    dispatch(setUserData(null));
  },
);

export const loginAction = createAsyncThunk<void, AuthInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const { data: user } = await api.post<User>(ApiMethods.LOGIN, {email, password});
    saveToken(user.token);
    dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    dispatch(setUserData(user));
  },
);


