import { store } from '../store';
import { User } from './user.type';
import { AuthorizationStatus } from '../app-routes.const';
import { Movie } from './main-page.types';
import { Review } from './review.types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type MovieState = {
  movie: Movie | null,
  reviews: Review[],
  similarMovies: Movie[]
}

export type MainState = {
  movies: Movie[],
  promoFilm: Movie | null,
  currentGenre: string,
  isDataLoaded: boolean,
  error: string | null
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  user: User | null
}
