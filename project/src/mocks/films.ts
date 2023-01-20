import { Genre, Movie } from '../types/main-page.types';
import { Review } from '../types/review.types';

export const MOCK_MOVIE: Movie = {
  id: 10,
  name: 'midnight',
  genre: Genre.Comedy,
  released: 2010,
  posterImage: 'img/midnight-special.jpg',
  description: 'desc',
  director: 'abobik',
  runTime: 131,
  scoresCount: 7,
  starring: ['john cena', 'bobby', 'van'],
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  backgroundImage: 'img/midnight-special.jpg',
  isFavorite: false,
  rating: 8
};

export const MOCK_MOVIE_LIST: Movie[] = [
  {
    name: 'midnight',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    description:
      'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 222,
    director: 'abobik',
    starring: ['john cena', 'bobby', 'van'],
    runTime: 94,
    genre: Genre.Comedy,
    released: 2012,
    id: 2,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'Moonrise Kingdom',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    description:
      'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 222,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: Genre.Comedy,
    released: 2012,
    id: 3,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'Moonrise Kingdom',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    description:
      'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 222,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: Genre.Comedy,
    released: 2012,
    id: 4,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  },
  {
    name: 'Moonrise Kingdom',
    posterImage:
      'https://10.react.pages.academy/static/film/poster/Moonrise_Kingdom.jpg',
    backgroundImage:
      'https://10.react.pages.academy/static/film/background/Moonrise_Kingdom.jpg',
    description:
      'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    rating: 7.9,
    scoresCount: 222,
    director: 'Wes Anderson',
    starring: ['Jared Gilman', 'Kara Hayward', 'Bruce Willis'],
    runTime: 94,
    genre: Genre.Comedy,
    released: 2012,
    id: 5,
    isFavorite: false,
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  }
];

export const MOCK_REVIEW_LIST: Review[] = [
  {
    id: 1,
    comment: 'mock 1',
    rating: 2,
    user: {name: 'Ivan', id: 1},
    date: 'November 18, 2015',
  },
  {
    id: 2,
    comment: 'mock 2',
    rating: 2,
    user: {name: 'Ivan', id: 2},
    date: 'November 19, 2015',
  },
  {
    id: 3,
    comment: 'mock 3',
    rating: 2,
    user: {name: 'Ivan', id: 3},
    date: 'November 20, 2015',
  },
];
