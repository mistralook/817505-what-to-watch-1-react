import { userReducer } from './user-reducer';
import { AuthorizationStatus } from '../../app-routes.const';
import { User } from '../../types/user.type';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

describe('user reducer', () => {
  it('should no auth when login fail', () => {
    const state = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    expect(userReducer.reducer(state, {type: loginAction.rejected.type}))
      .toEqual(expectedState);
  });

  it('should no auth when logout', () => {
    const user = { id:1, email: 'aboba@gmail.com', name:'user' } as User;
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    expect(userReducer.reducer(state, {type: logoutAction.fulfilled.type}))
      .toEqual(expectedState);
  });

  it('should auth when login success', () => {
    const user = { id:1, email: 'aboba@gmail.com', name:'user' } as User;
    const state = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: user };


    expect(userReducer.reducer(state, {type: loginAction.fulfilled.type, payload: user}))
      .toEqual(expectedState);
  });

  it('should auth when check login success', () => {
    const user = { id:1, email: 'aboba@gmail.com', name:'user' } as User;
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth, user: user };

    expect(userReducer.reducer(state, {type: checkAuthAction.fulfilled.type, payload: user}))
      .toEqual(expectedState);
  });

  it('should no auth when check login fail', () => {
    const user = { id:1, email: 'aboba@gmail.com', name:'user' } as User;
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    expect(userReducer.reducer(state, {type: checkAuthAction.rejected.type}))
      .toEqual(expectedState);
  });
});
