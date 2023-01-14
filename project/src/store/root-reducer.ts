import { combineReducers } from '@reduxjs/toolkit';
import { mainReducer } from './main-reducer/main-reducer';
import { movieReducer } from './movie-reducer/movie-reducer';
import { userReducer } from './user-reducer/user-reducer';
import { NameSpace } from '../const/apiMethods';


export const rootReducer = combineReducers({
  [NameSpace.Main]: mainReducer.reducer,
  [NameSpace.Film]: movieReducer.reducer,
  [NameSpace.User]: userReducer.reducer
});
