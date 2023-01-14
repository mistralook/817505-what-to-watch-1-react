import React, { Dispatch, FC, SetStateAction } from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { changeGenre } from '../../store/action';
import { AMOUNT_OF_VISIBLE_MOVIES_STEP } from '../../const/const';

type Props = {
  genre: string;
  setNumberOfShownMovies: Dispatch<SetStateAction<number>>;
  isActive: boolean;
};

const GenreItem: FC<Props> = (props) => {
  const { genre, setNumberOfShownMovies, isActive } = props;
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    dispatch(changeGenre(genre));
    setNumberOfShownMovies(AMOUNT_OF_VISIBLE_MOVIES_STEP);
  };

  return (
    <li className={`catalog__genres-item ${isActive ? ' catalog__genres-item--active' : ''}`}>
      <a href='/' className='catalog__genres-link' onClick={(e) => handleChangeActiveGenre(e)}>{genre}</a>
    </li>
  );
};

export default GenreItem;
