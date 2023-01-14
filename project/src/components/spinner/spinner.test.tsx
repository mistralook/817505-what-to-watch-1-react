import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Spinner from './spinner';

describe('spinner', () => {
  it ('spinner render', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Spinner />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
