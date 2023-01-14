import { State } from '../../types/state.types';
import { NameSpace } from '../../const/apiMethods';
import { Movie } from '../../types/main-page.types';

export const getFilms = (state: State): Movie[] => state[NameSpace.Main].movies;
export const getPromoFilm = (state: State): Movie | null => state[NameSpace.Main].promoFilm;
export const getCurrentGenre = (state: State): string => state[NameSpace.Main].currentGenre;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Main].isDataLoaded;
export const getFavoriteFilms = (state: State): Movie[] => state[NameSpace.Main].favoriteFilms;
export const getError = (state: State): string|null => state[NameSpace.Main].error;
