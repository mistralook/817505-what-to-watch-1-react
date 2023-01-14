import { FC, useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import { Movie } from '../../types/main-page.types';

type Props = {
  movies: Movie[];
};

const CatalogMovieList: FC<Props> = (props) => {
  const { movies } = props;
  const [activeFilm, setActiveFilm] = useState<Movie | null>(null);

  const handleMouseEnter = (film: Movie) => {
    if (film !== activeFilm) {
      setActiveFilm(film);
    }
  };

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} onMouseEnter={handleMouseEnter}/>)
      }
    </div>
  );
};

export default CatalogMovieList;
