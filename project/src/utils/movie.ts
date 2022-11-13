import { MOVIE_LIST } from '../mocks/film';
import { MovieRatingDescription } from '../types/main-page.types';

export const getMovieById = (id: string) => MOVIE_LIST.find((movie) => movie.id === id);


export const getRatingDescription = (rating: number): MovieRatingDescription | string => {
  if (rating <= 2) {
    return MovieRatingDescription.BAD;
  } else if (rating <= 4) {
    return MovieRatingDescription.NORMAL;
  } else if (rating <= 6) {
    return MovieRatingDescription.GOOD;
  } else if (rating <= 8) {
    return MovieRatingDescription.VERYGOOD;
  } else if (rating <= 10) {
    return MovieRatingDescription.AWESOME;
  }
  return 'wrong rating';
};
