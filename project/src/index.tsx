import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { MOCK_MOVIE, MOVIE_LIST } from './mocks/film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App movie={MOCK_MOVIE} movieList={MOVIE_LIST} />
  </React.StrictMode>,
);
