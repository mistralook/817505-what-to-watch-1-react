import { FC, SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { AuthorizationStatus, BrowserRoutes } from '../../app-routes.const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUser } from '../../store/user-reducer/user-selectors';


export const UserBlock: FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();

  const handleSignOut = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a href={'/'} className="user-block__link" onClick={handleSignOut}>Sign out</a>
          </li>
        </>
      ) : (
        <Link to={BrowserRoutes.SIGNIN} className="user-block__link">Sign in</Link>
      )}
    </ul>
  );
};
