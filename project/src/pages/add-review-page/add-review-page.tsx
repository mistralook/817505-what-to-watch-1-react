import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieById } from '../../utils/movie';
import AddReview from '../../components/add-review/add-review';
import NotFoundPage from '../not-found-page/not-found-page';
import { UserBlock } from '../../components/user-block/user-block';

const AddReviewPage: FC = () => {
  const { id } = useParams();

  const movie = getMovieById(Number(id));

  if (!movie) {
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie?.posterImage} alt={movie?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={'/'} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id ?? '#'}`} className="breadcrumbs__link">{movie?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id ?? '#'}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie?.posterImage} alt={movie?.name} width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <AddReview />
      </div>
    </section>
  );
};

export default AddReviewPage;
