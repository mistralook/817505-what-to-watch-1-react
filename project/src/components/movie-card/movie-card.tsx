import { FC } from 'react';
import { Movie } from '../../types/main-page.types';
import { Link } from 'react-router-dom';

type Props = {
  movie: Movie;
}

const MovieCard: FC<Props> = (props) => {
  const {
    title,
    posterUrl,
    id,
  } = props.movie;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterUrl} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

export default MovieCard;
