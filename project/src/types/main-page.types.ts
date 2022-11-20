export type Movie = {
  id: string;
  title: string;
  genre: Genre;
  releaseDate: string;
  posterUrl: string;
  description: string;
  rating: string;
  ratingDescription?: MovieRatingDescription;
  votesCount: string;
  director: string;
  actors: string[];
  duration: string;
  videoPath: string;
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
