import { Genre, Movie } from '../types/main-page.types';
import { Review } from '../types/review.types';

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

export const REVIEW_LIST: Review[] = [
  {
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely" +
      " designed films in years.`,
    userRating: '2',
    userName: 'Ivan',
    reviewDate: new Date('2017-12-17T03:24:00'),
  },
  {
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
    "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    userRating: '9',
    userName: 'Petr',
    reviewDate: new Date('2019-10-15T03:24:00'),
  },
  {
    comment: 'I didn`t find it amusing, and while I can appreciate the creativity, it`s an hour and 40 minutes I wish I could take back.',
    userRating: '7',
    userName: 'Sergey',
    reviewDate: new Date('2020-01-13T03:24:00'),
  },
  {
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    userRating: '3',
    userName: 'Dmitriy',
    reviewDate: new Date('2018-07-09T03:24:00'),
  },
  {
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    userRating: '3',
    userName: 'A',
    reviewDate: new Date('2018-07-09T03:24:00'),
  },
  {
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    userRating: '3',
    userName: 'B',
    reviewDate: new Date('2018-07-09T03:24:00'),
  },
  {
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    userRating: '3',
    userName: 'C',
    reviewDate: new Date('2018-07-09T03:24:00'),
  },{
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    userRating: '3',
    userName: 'D',
    reviewDate: new Date('2018-07-09T03:24:00'),
  },
];
