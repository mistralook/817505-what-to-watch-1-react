import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { configureAxios } from '../transport/api';

export const axiosApi = configureAxios();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi,
      },
    }),
});
