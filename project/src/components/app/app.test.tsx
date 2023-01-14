import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus } from '../../app-routes.const';
import { ALL_GENRES_CONST } from '../../types/main-page.types';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MOCK_MOVIE_LIST } from '../../mocks/films';
import { configureAxios } from '../../transport/api';
import App from './app';

const middlewares = [thunk.withExtraArgument(configureAxios())];
const mockStore = configureMockStore(middlewares);

const mockFilms = MOCK_MOVIE_LIST;
const promoFilm = mockFilms[0];
const currentFilm = mockFilms[1];
const route = ['/'];

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: null
  },
  FILM: {
    movie: currentFilm,
    similarMovies: [],
    reviews: []
  },
  MAIN: {
    movies: mockFilms,
    currentGenre: ALL_GENRES_CONST,
    promoFilm: promoFilm,
    error: null,
    isDataLoaded: true,
    favoriteFilms: []
  },
});

const fakeApp = (
  <Provider store={store}>
    <MemoryRouter initialEntries={route}>
      <App/>
    </MemoryRouter>
  </Provider>
);

describe('routing', () => {
  it('main screen', () => {
    render(fakeApp);

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('auth screen', () => {
    route[0] = '/login';
    render(fakeApp);

    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it('my list', () => {
    route[0] = '/mylist';
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('404 not found', () => {
    route[0] = '/qwertyasd';
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });

  it('movie page', () => {
    route[0] = '/films/1';
    render(fakeApp);

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByText('More like this')).toBeInTheDocument();
  });
});
