import React, { Dispatch, FC, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { changeGenre } from '../../store/action';
import { Genre } from '../../types/main-page.types';
import { AMOUNT_OF_VISIBLE_MOVIES_STEP } from '../../const/const';

type Props = {
  genre: Genre;
  setNumberOfShownMovies: Dispatch<SetStateAction<number>>;
};

const GenreItem: FC<Props> = (props) => {
  const { genre, setNumberOfShownMovies } = props;
  const { activeGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (
    e: React.MouseEvent<HTMLAnchorElement>,
    activeGenreToChange: Genre
  ) => {
    e.preventDefault();
    dispatch(changeGenre({ genre: activeGenreToChange}));
    setNumberOfShownMovies(AMOUNT_OF_VISIBLE_MOVIES_STEP);
  };

  return (
    <li className={`catalog__genres-item ${genre === activeGenre ? ' catalog__genres-item--active' : ''}`}>
      <a href='/' className='catalog__genres-link' onClick={(e) => handleChangeActiveGenre(e, genre)}>{genre}</a>
    </li>
  );
};

export default GenreItem;
