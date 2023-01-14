import { FC} from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRoutes, AuthorizationStatus } from '../../app-routes.const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = (props) => {
  const { children, authorizationStatus } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={BrowserRoutes.SIGNIN} />
  );
};

export default PrivateRoute;
