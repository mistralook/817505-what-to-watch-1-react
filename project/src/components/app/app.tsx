import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movie } from '../../types/main-page.types';
import { AuthorizationStatus, ROUTES } from '../../app-routes.const';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';

type Props = {
  movie: Movie;
  movieList: Movie[];
}

const App: FC<Props> = (props) => {
  const { movie, movieList } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage movie={movie} movieList={movieList}/>}/>
        <Route path={ROUTES.SIGNIN} element={<SignInPage/>}/>
        <Route
          path={ROUTES.MYLIST}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage movieList={movieList} />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.FILM} element={<MoviePage movieList={movieList}/>}/>
        <Route path={ROUTES.ADDREVIEW} element={<AddReviewPage/>}/>
        <Route path={ROUTES.PLAYER} element={<PlayerPage movie={movie} />}/>
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
