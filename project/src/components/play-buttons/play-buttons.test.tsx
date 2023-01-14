import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayButton from './play-button';
import PauseButton from './pause-button';

describe('play buttons', () => {
  it('play', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <PlayButton />
      </MemoryRouter>
    );

    expect(screen.getByText('Play')).toBeInTheDocument();
  });

  it('pause', () => {
    const initialEntries = ['/'];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <PauseButton />
      </MemoryRouter>
    );

    expect(screen.getByText('Pause')).toBeInTheDocument();
  });
});
