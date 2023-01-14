import { MovieState } from '../../types/state.types';
import { movieReducer } from './movie-reducer';
import { fetchFilmById, fetchReviewsById, fetchSimilarById } from '../api-actions';
import { MOCK_MOVIE, MOCK_REVIEW_LIST } from '../../mocks/films';

describe('movie reducer', () => {
  it('get film', () => {
    const mockMovie = MOCK_MOVIE;
    const state: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: []
    };
    const expectedState: MovieState = {
      movie: mockMovie,
      reviews: [],
      similarMovies: []
    };

    expect(movieReducer.reducer(state, {type: fetchFilmById.fulfilled, payload: mockMovie}))
      .toEqual(expectedState);
  });

  it('not get film when rejected', () => {
    const mockMovie = MOCK_MOVIE;
    const state: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: []
    };

    expect(movieReducer.reducer(state, {type: fetchFilmById.rejected, payload: mockMovie}))
      .toEqual(state);
  });

  it('get comments', () => {
    const review = MOCK_REVIEW_LIST[0];
    const state: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: []
    };
    const expectedState: MovieState = {
      movie: null,
      reviews: [review],
      similarMovies: []
    };

    expect(movieReducer.reducer(state, {type: fetchReviewsById.fulfilled, payload: [review]}))
      .toEqual(expectedState);
  });

  it('not get comments when rejected', () => {
    const comment = MOCK_REVIEW_LIST[0];
    const state: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: []
    };

    expect(movieReducer.reducer(state, {type: fetchReviewsById.rejected, payload: [comment]}))
      .toEqual(state);
  });

  it('get similar films', () => {
    const mockMovie = MOCK_MOVIE;
    const state: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: []
    };
    const expectedState: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: [mockMovie]
    };

    expect(movieReducer.reducer(state, {type: fetchSimilarById.fulfilled, payload: [mockMovie]}))
      .toEqual(expectedState);
  });

  it('not get similar when rejected', () => {
    const mockMovie = MOCK_MOVIE;
    const state: MovieState = {
      movie: null,
      reviews: [],
      similarMovies: []
    };

    expect(movieReducer.reducer(state, {type: fetchSimilarById.rejected, payload: [mockMovie]}))
      .toEqual(state);
  });
});
