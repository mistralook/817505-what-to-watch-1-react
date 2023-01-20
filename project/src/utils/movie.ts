import { MovieRatingDescription } from '../types/main-page.types';

export const getRatingDescription = (rating: number): MovieRatingDescription | string => {
  if (rating < 3) {
    return MovieRatingDescription.Bad;
  } else if (rating < 5) {
    return MovieRatingDescription.Normal;
  } else if (rating < 8) {
    return MovieRatingDescription.Good;
  } else if (rating < 10) {
    return MovieRatingDescription.Verygood;
  }
  return MovieRatingDescription.Awesome;
};
