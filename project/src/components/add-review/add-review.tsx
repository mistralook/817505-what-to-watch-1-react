import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { postMovieReview } from '../../transport/api.requests';
import { getFilm } from '../../store/movie-reducer/movie-selectors';
import { useAppSelector } from '../../hooks/redux.hooks';
import { keygen } from '../../utils/key-gen';

const AddReview: FC = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const currentMovie = useAppSelector(getFilm);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const onRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (reviewText && rating) {
      postMovieReview(Number(currentMovie?.id), {comment: reviewText, rating: rating}).then(() => window.history.back());
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from(Array(10).keys()).map((el) => (
            <span key={keygen()}>
              <input className="rating__input" id={`radio-${10 - el}`} type="radio" name="rating" value={10 - el} checked={rating === 10 - el} onChange={onRatingChange}/>
              <label className="rating__label" htmlFor={`radio-${10 - el}`}>Rating {10 - el}</label>
            </span>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={handleTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default AddReview;
