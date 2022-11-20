import React, { FC } from 'react';
import { Genre } from '../../types/main-page.types';
import GenreItem from './genre-item';

type Props = {
  genres: Genre[];
};

const GenresList: FC<Props> = (props) => {
  const { genres } = props;

  return (
    <ul className='catalog__genres-list'>
      {
        genres.map((genre) => (<GenreItem key={genre} genre={genre}/>))
      }
    </ul>
  );
};

export default GenresList;
