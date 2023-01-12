import { FC } from 'react';
import { Movie } from '../../types/main-page.types';
import { getRatingDescription } from '../../utils/movie';

type Props = {
  movie: Movie;
}

const OverviewTab: FC<Props> = (props) => {
  const {
    rating,
    description,
    scoresCount,
    director,
    starring
  } = props.movie;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(Number(rating))}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
};

export default OverviewTab;
