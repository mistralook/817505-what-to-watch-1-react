import { FC, useMemo } from 'react';
import { Review } from '../../types/review.types';
import { keygen } from '../../utils/key-gen';

type Props = {
  reviews: Review[];
}

const ReviewsTab: FC<Props> = (props) => {
  const { reviews } = props;

  const MovieReviews = useMemo(() => (
    reviews.map(({comment, userName, reviewDate, userRating}) => {
      const dateString =
          Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric', day: 'numeric'}).format(reviewDate);
      const dateTimeString = reviewDate.toISOString().slice(0, 10);

      return (
        <div className="review" key={`${comment}-${userName}-${userRating}`}>
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{userName}</cite>
              <time className="review__date" dateTime={dateTimeString}>{dateString}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{userRating}</div>
        </div>
      );
    })
  ), [reviews]);

  return (
    <div className="film-card__reviews film-card__row">
      {Array(Math.ceil(MovieReviews.length / 3)).fill(0).map((_, index) => (
        <div className="film-card__reviews-col" key={keygen()}>
          {MovieReviews.slice(index * 3, index * 3 + 3)}
        </div>
      ))}
    </div>
  );
};

export default ReviewsTab;
