import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { showMoreMoviesAmount } from '../../store/action';

const ShowMore: FC = () => {
  const { movies, amountOfVisibleMovies } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div
      className="catalog__more"
      style={{display: movies.length > amountOfVisibleMovies ? 'block' : 'none'}}
    >
      <button
        className="catalog__button"
        type="button"
        onClick={() => dispatch(showMoreMoviesAmount())}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
