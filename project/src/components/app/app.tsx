import MainPage from '../../pages/main-page/main-page';
import { Movie } from '../../types/main-page.types';
import { FC } from 'react';

type Props = {
  movie: Movie;
}

const App: FC<Props> = (props) => {
  const { movie } = props;
  return <MainPage movie={movie} />;
};

export default App;
