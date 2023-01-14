import { configureAxios } from '../transport/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state.types';
import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRoutes } from '../app-routes.const';
import {
  checkAuthAction,
  fetchFilmsAction,
  fetchPromoFilm,
  fetchReviewsById,
  loginAction,
  logoutAction
} from './api-actions';
import { AuthInfo } from '../types/auth.type';
import { ApiMethods } from '../const/apiMethods';
import { MOCK_MOVIE, MOCK_MOVIE_LIST, MOCK_REVIEW_LIST } from '../mocks/films';

describe('actions async tests', () => {
  const api = configureAxios();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('auth status equals auth when 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(BrowserRoutes.LOGIN)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should login when POST /login', async () => {
    const fakeUser: AuthInfo = {email: 'aboba@gmail.com', password: '123qwe'};

    mockAPI.onPost(BrowserRoutes.LOGIN).reply(200, {token: 'secret'});
    const store = mockStore();
    await store.dispatch(loginAction(fakeUser));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);
  });

  it('should logout when DELETE /logout', async () => {
    mockAPI
      .onDelete(ApiMethods.LOGOUT)
      .reply(204);

    const store = mockStore();
    await store.dispatch(logoutAction());
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);
  });

  it('should load films when GET /films', async () => {
    mockAPI.onGet(ApiMethods.FILMS).reply(200, MOCK_MOVIE_LIST);
    const store = mockStore();
    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });

  it('should load comments when GET /promo', async () => {
    mockAPI
      .onGet(ApiMethods.PROMO)
      .reply(200);

    const store = mockStore();

    await store.dispatch(fetchPromoFilm());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoFilm.pending.type,
      fetchPromoFilm.fulfilled.type
    ]);
  });

  it('should load comments when GET /comments/{filmId}', async () => {
    const url = `${ApiMethods.COMMENTS}/${MOCK_MOVIE.id}`;
    mockAPI
      .onGet(url)
      .reply(200, MOCK_REVIEW_LIST);

    const store = mockStore();

    await store.dispatch(fetchReviewsById(MOCK_MOVIE.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsById.pending.type,
      fetchReviewsById.fulfilled.type
    ]);
  });
});
