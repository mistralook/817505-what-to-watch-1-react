import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux.hooks';
import { getFilms, getIsDataLoaded } from '../../store/main-reducer/main-selectors';
import { BrowserRoutes } from '../../app-routes.const';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list-page/my-list';
import Spinner from '../spinner/spinner';
import AddReviewPage from '../../pages/add-review-page/add-review-page';


const App: FC = () => {
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const movies = useAppSelector(getFilms);
  if (!isDataLoaded){
    return <Spinner/>;
  }

  return (
    <Routes>
      <Route path={BrowserRoutes.MAIN} element={<MainPage />}/>
      <Route path={BrowserRoutes.LOGIN} element={<SignInPage/>}/>
      <Route
        path={BrowserRoutes.MYLIST}
        element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={BrowserRoutes.FILM} element={<MoviePage />}/>
      <Route path={BrowserRoutes.ADDREVIEW} element={
        <PrivateRoute>
          <AddReviewPage movies={movies}/>
        </PrivateRoute>
      }
      />
      <Route path={BrowserRoutes.PLAYER} element={<PlayerPage />}/>
      <Route path={BrowserRoutes.NOTFOUND} element={<NotFoundPage />}/>
    </Routes>
  );
};

export default App;
