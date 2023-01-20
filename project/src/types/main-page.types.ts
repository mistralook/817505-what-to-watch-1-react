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
  Bad = 'Bad',
  Normal ='Normal',
  Good = 'Good',
  Verygood = 'Very good',
  Awesome = 'Awesome',
}

export const ALL_GENRES_CONST = 'All genres';

export enum Genre {
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsAndFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-fi',
  Thriller = 'Thriller'
}
