import React, { Dispatch, FC, SetStateAction } from 'react';
import { Genre } from '../../types/main-page.types';
import GenreItem from './genre-item';

type Props = {
  genres: Genre[];
  setNumberOfShownMovies: Dispatch<SetStateAction<number>>;
  currentGenre: string;
};

const GenresList: FC<Props> = (props) => {
  const { genres, setNumberOfShownMovies, currentGenre } = props;

  return (
    <ul className='catalog__genres-list'>
      {
        genres.map((genre) => (
          <GenreItem
            key={genre}
            genre={genre}
            setNumberOfShownMovies={setNumberOfShownMovies}
            isActive={genre === currentGenre}
          />
        ))
      }
    </ul>
  );
};

export default GenresList;
