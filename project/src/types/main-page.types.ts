export type Movie = {
  id: number;
  name: string;
  genre: Genre;
  released: number;
  posterImage: string;
  description: string;
  rating: number;
  ratingDescription?: MovieRatingDescription;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  videoLink: string;
  backgroundImage: string;
  isFavorite: boolean;
}

export enum MovieRatingDescription {
  BAD = 'Bad',
  NORMAL ='Normal',
  GOOD = 'Good',
  VERYGOOD = 'Very good',
  AWESOME = 'Awesome',
}

export const ALL_GENRES_CONST = 'All genres';

export enum Genre {
  COMEDY = 'Comedy',
  CRIME = 'Crime',
  DOCUMENTARY = 'Documentary',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  KIDS_AND_FAMILY = 'Kids & Family',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-fi',
  THRILLER = 'Thriller'
}
