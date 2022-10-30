import { FC } from 'react';
import MovieCard from '../movie-card/movie-card';
import { Movie } from '../../types/main-page.types';

type Props = {
  movies: Movie[];
};

const CatalogMovieList: FC<Props> = (props) => {
  const { movies } = props;

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)
      }
    </div>
  );
};

export default CatalogMovieList;
