import { MainState } from '../../types/state.types';
import { ALL_GENRES_CONST, Genre } from '../../types/main-page.types';
import { mainReducer } from './main-reducer';
import { MOCK_MOVIE, MOCK_MOVIE_LIST } from '../../mocks/films';
import { fetchFavoriteFilms, fetchFilmsAction, fetchPromoFilm } from '../api-actions';
import { changeGenre } from '../action';

describe('main reducer', () => {
  it('should not change state when unknown action', () => {
    const expectedState: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(expectedState);
  });

  it('get promo', () => {
    const film = MOCK_MOVIE;
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: film,
      movies: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: fetchPromoFilm.fulfilled, payload: film}))
      .toEqual(expectedState);
  });

  it('not get promo when rejected', () => {
    const film = MOCK_MOVIE;
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: fetchPromoFilm.rejected, payload: film}))
      .toEqual(state);
  });

  it('get favorites', () => {
    const films = MOCK_MOVIE_LIST;
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: films,
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: fetchFavoriteFilms.fulfilled, payload: films}))
      .toEqual(expectedState);
  });

  it('not get favorites', () => {
    const films = MOCK_MOVIE_LIST;
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: fetchFavoriteFilms.rejected, payload: films}))
      .toEqual(state);
  });

  it('change genre action', () => {
    const genre = Genre.Comedy;
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    const expectedState: MainState = {
      currentGenre: genre,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    expect(mainReducer.reducer(state, {type: changeGenre, payload: genre}))
      .toEqual(expectedState);
  });

  it('fetch films', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    const movie = MOCK_MOVIE_LIST[0];
    const secondMovie = MOCK_MOVIE_LIST[1];
    const expectedState: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [movie, secondMovie],
      isDataLoaded: true
    };
    expect(mainReducer.reducer(state, {type: fetchFilmsAction.fulfilled, payload: [movie, secondMovie]}))
      .toEqual(expectedState);
  });

  it('update favorites', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    const movie = MOCK_MOVIE_LIST[0];
    const secondMovie = MOCK_MOVIE_LIST[1];
    const expectedState: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [movie, secondMovie],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };
    expect(mainReducer.reducer(state, {type: fetchFavoriteFilms.fulfilled, payload: [movie, secondMovie]}))
      .toEqual(expectedState);
  });

  it('not update favorites when rejected', () => {
    const state: MainState = {
      currentGenre: ALL_GENRES_CONST,
      error: null,
      favoriteFilms: [],
      promoFilm: null,
      movies: [],
      isDataLoaded: false
    };

    const movie = MOCK_MOVIE_LIST[0];
    const secondMovie = MOCK_MOVIE_LIST[1];
    expect(mainReducer.reducer(state, {type: fetchFavoriteFilms.rejected, payload: [movie, secondMovie]}))
      .toEqual(state);
  });
});
