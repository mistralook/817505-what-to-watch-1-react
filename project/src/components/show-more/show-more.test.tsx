import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ShowMore from './show-more';

describe('show more', () => {
  it ('show-more render', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <ShowMore isVisible setNumberOfShownMovies={() => void 0} />
      </MemoryRouter>
    );

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
