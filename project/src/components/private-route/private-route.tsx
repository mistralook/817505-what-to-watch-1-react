import { FC} from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRoutes, AuthorizationStatus } from '../../app-routes.const';
import { useAppSelector } from '../../hooks/redux.hooks';
import { getAuthorizationStatus } from '../../store/user-reducer/user-selectors';

type Props = {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = (props) => {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={BrowserRoutes.SIGNIN} />
  );
};

export default PrivateRoute;
