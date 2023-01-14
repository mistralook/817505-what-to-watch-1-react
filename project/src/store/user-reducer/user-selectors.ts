import { State } from '../../types/state.types';
import { AuthorizationStatus } from '../../app-routes.const';
import { NameSpace } from '../../const/apiMethods';
import { User } from '../../types/user.type';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
