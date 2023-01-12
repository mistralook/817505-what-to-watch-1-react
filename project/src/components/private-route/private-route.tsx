import { FC} from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRoutes, AuthorizationStatus } from '../../app-routes.const';
import { useAppSelector } from '../../hooks/redux.hooks';

type Props = {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = (props) => {
  const { children } = props;
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={BrowserRoutes.SIGNIN} />
  );
};

export default PrivateRoute;
