import { State } from '../../types/state.types';
import { Movie } from '../../types/main-page.types';
import { NameSpace } from '../../const/apiMethods';
import { Review } from '../../types/review.types';

export const getFilm = (state: State): Movie | null => state[NameSpace.Film].movie;
export const getSimilarFilm = (state: State): Movie[] => state[NameSpace.Film].similarMovies;
export const getReviews = (state: State): Review[] => state[NameSpace.Film].reviews;
