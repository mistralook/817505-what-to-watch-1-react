import { FC, SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { AuthorizationStatus, BrowserRoutes } from '../../app-routes.const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';


export const UserBlock: FC = () => {
  const { authorizationStatus, user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleSignOut = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutAction());
    window.location.replace(BrowserRoutes.MAIN);
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
