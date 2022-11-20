import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { changeGenre, fillMovieList } from '../../store/action';
import { Genre } from '../../types/main-page.types';
import { MOVIE_LIST } from '../../mocks/film';

type Props = {
  genre: Genre;
};

const GenreItem: FC<Props> = (props) => {
  const { genre } = props;
  const { activeGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (
    e: React.MouseEvent<HTMLAnchorElement>,
    activeGenreToChange: Genre
  ) => {
    e.preventDefault();
    dispatch(changeGenre({ genre: activeGenreToChange}));
    dispatch(
      fillMovieList({
        movies: MOVIE_LIST.filter((movie) =>
          movie.genre === activeGenreToChange || activeGenreToChange === Genre.ALL_GENRES)
      }));
  };

  return (
    <li className={`catalog__genres-item ${genre === activeGenre ? ' catalog__genres-item--active' : ''}`}>
      <a href='#' className='catalog__genres-link' onClick={(e) => handleChangeActiveGenre(e, genre)}>{genre}</a>
    </li>
  );
};

export default GenreItem;
