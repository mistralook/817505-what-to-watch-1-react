import { Genre, Movie } from '../types/main-page.types';

export const MOCK_MOVIE: Movie = {
  id: 228,
  name: 'midnight',
  genre: Genre.COMEDY,
  released: 2010,
  posterImage: 'img/midnight-special.jpg',
  description: 'desc',
  director: 'abobik',
  runTime: 131,
  rating: 7,
  starring: ['john cena', 'bobby', 'van'],
  scoresCount: 1234,
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
};
