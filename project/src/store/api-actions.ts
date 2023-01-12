import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Movie } from '../types/main-page.types';
import { AppDispatch, State } from '../types/state.types';
import { loadMovies, setLoading } from './action';

const methodUrl = '/films';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movie[]>(methodUrl);
    dispatch(setLoading(true));
    dispatch(loadMovies(data));
    dispatch(setLoading(false));
  },
);
