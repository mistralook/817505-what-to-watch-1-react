import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../types/main-page.types';
import { UserBlock } from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/redux.hooks';
import { getMovie, getSimilarMovies } from '../../transport/api.requests';
import { AuthorizationStatus } from '../../app-routes.const';
import CatalogMovieList from '../../components/movie-list/catalog-movie-list';
import MovieTabs from '../../components/tabs/movie-tabs';
import NotFoundPage from '../not-found-page/not-found-page';
import Spinner from '../../components/spinner/spinner';

const FilmPage: FC = () => {
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const [similarFilms, setSimilarFilms] = useState<Movie[]>([]);

  const { id } = useParams();

  const { authorizationStatus } = useAppSelector((state) => state);

  useEffect(() => {
    getMovie(Number(id)).then(({ data }) => {
      if (data) {
        setCurrentMovie(data);
      } else {
        return <NotFoundPage />
      }
    });
    getSimilarMovies(Number(id)).then(({ data }) => setSimilarFilms(data));
  }, [id]);


  if (!currentMovie) {
    return <Spinner />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie.posterImage} alt={currentMovie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={'/'} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? <Link to={`/films/${currentMovie.id}/review`} className="btn film-card__button">Add review</Link>
                    : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie.posterImage} alt={currentMovie.name} width="218"
                height="327"
              />
            </div>

            <MovieTabs movie={currentMovie}></MovieTabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogMovieList
            movies={similarFilms}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={'/'} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FilmPage;
