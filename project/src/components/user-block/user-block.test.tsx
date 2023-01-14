import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus } from '../../app-routes.const';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { UserBlock } from './user-block';

describe('user block', () => {
  it('sign out render', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: {
          avatarUrl: 'avatar',
          email: 'aboba@gmail.com',
          id: 1,
          name: 'name',
          token: 'token'
        }
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('sign in render', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
