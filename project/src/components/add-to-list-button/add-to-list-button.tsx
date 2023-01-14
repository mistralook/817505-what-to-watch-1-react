import { FC } from 'react';
import { Movie } from '../../types/main-page.types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { getFavoriteFilms } from '../../store/main-reducer/main-selectors';
import { fetchFavoriteFilms, fetchPromoFilm, setFavoriteFilmAction } from '../../store/api-actions';

type Props = {
  movie: Movie | null;
}

export const AddToListButton: FC<Props> = (props) => {
  const { movie } = props;
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  const favoriteAddHandler = () => {
    const status = Number(!movie?.isFavorite);
    const filmId = Number(movie?.id);
    dispatch(setFavoriteFilmAction({ movieId: filmId, status: status }));
    dispatch(fetchFavoriteFilms());
    dispatch(fetchPromoFilm());
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={favoriteAddHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={movie?.isFavorite ? '#in-list' : '#add'}/>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
};
