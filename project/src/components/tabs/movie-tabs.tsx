import { FC, useCallback, useMemo, useState } from 'react';
import { Movie } from '../../types/main-page.types';
import { REVIEW_LIST } from '../../mocks/film';
import OverviewTab from './overview.tab';
import DetailsTab from './details.tab';
import ReviewsTab from './reviews.tab';

type Props = {
  movie: Movie;
}

const MovieTabs: FC<Props> = (props) => {
  const { movie } = props;
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const isTabActive = useCallback(
    (tabName: string) => tabName === activeTab,
    [activeTab],
  );

  const tabContent = useMemo(() => {
    if (activeTab === 'Overview') {
      return <OverviewTab movie={movie} />;
    }
    if (activeTab === 'Details') {
      return <DetailsTab movie={movie} />;
    }

    if (activeTab === 'Reviews') {
      return <ReviewsTab reviews={REVIEW_LIST}/>;
    }
  }, [activeTab, movie]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className='film-nav__list'>
          <li className={`film-nav__item ${isTabActive('Overview') ? 'film-nav__item--active' : ''}`}>
            <p className="film-nav__link" onClick={() => setActiveTab('Overview')}>Overview</p>
          </li>
          <li className={`film-nav__item ${isTabActive('Details') ? 'film-nav__item--active' : ''}`}>
            <p className='film-nav__link' onClick={() => setActiveTab('Details')}>Details</p>
          </li>
          <li className={`film-nav__item ${isTabActive('Reviews') ? 'film-nav__item--active' : ''}`}>
            <p className='film-nav__link' onClick={() => setActiveTab('Reviews')}>Reviews</p>
          </li>
        </ul>
      </nav>

      {tabContent}

    </div>
  );
};

export default MovieTabs;
