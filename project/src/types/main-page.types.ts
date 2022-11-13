export type Movie = {
  id: string;
  title: string;
  genre: string;
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
