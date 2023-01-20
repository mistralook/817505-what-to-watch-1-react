import { FC, useEffect, useState } from 'react';
import { Review } from '../../types/review.types';
import { keygen } from '../../utils/key-gen';
import { getMovieReviews } from '../../transport/api.requests';

type Props = {
  movieId: number;
}

const ReviewsTab: FC<Props> = (props) => {
  const { movieId } = props;

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({data}) => setReviews(data));
  }, [movieId]);

  const MovieReviews =
    reviews.map(({comment, user, date, rating}) => {
      const dateString =
          Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric', day: 'numeric'}).format(Date.parse(date));
      const fixedRating = rating.toFixed(1);
      return (
        <div className="review" key={`${comment}-${user.name}-${rating}`}>
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" >{dateString}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{fixedRating}</div>
        </div>
      );
    });

  return (
    <div className="film-card__reviews film-card__row">
      {Array(Math.ceil(reviews.length / 3)).fill(0).map((_, index) => (
        <div className="film-card__reviews-col" key={keygen()}>
          {MovieReviews.slice(index * 3, index * 3 + 3)}
        </div>
      ))}
    </div>
  );
};

export default ReviewsTab;
