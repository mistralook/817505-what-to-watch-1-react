import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { configureAxios } from '../transport/api';

export const axiosApi = configureAxios();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi,
      },
    }),
});
