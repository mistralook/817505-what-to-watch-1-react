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
}

export enum MovieRatingDescription {
  BAD = 'Bad',
  NORMAL ='Normal',
  GOOD = 'Good',
  VERYGOOD = 'Very good',
  AWESOME = 'Awesome',
}

export enum Genre {
  ALL_GENRES = 'All genres',
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
