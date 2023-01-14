import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus} from '../../app-routes.const';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MOCK_MOVIE, MOCK_MOVIE_LIST } from '../../mocks/films';
import { ALL_GENRES_CONST } from '../../types/main-page.types';
import PrivateRoute from './private-route';

const mockStore = configureMockStore();
const initialEntries = ['/'];

describe('private route', () => {
  const movie = MOCK_MOVIE;
  const store = mockStore({
    USER: {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null
    },
    FILM: {
      movie: movie,
      similarMovies: [],
      reviews: []
    },
    MAIN: {
      movies: MOCK_MOVIE_LIST,
      currentGenre: ALL_GENRES_CONST,
      promoFilm: movie,
      error: null,
      isDataLoaded: true,
      favoriteFilms: []
    },
  });

  it('my list with auth', () => {
    initialEntries.push('/private');

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route path='/private' element={
              <PrivateRoute>
                <p>You are in private page</p>
              </PrivateRoute>
            }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('You are in private page')).toBeInTheDocument();
  });
});
