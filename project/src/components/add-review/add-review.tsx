import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { postMovieReview } from '../../transport/api.requests';

type Props = {
  movieId: number;
};

const AddReview: FC<Props> = (props) => {
  const { movieId } = props;

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const onRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (reviewText && rating) {
      postMovieReview(movieId, {comment: reviewText, rating: rating}).then(() => window.history.back());
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((el) => (
              <span key={el}>
                <input className="rating__input" id={`radio-${el + 1}`} type="radio" name="rating" value={el + 1} checked={rating === el + 1} onChange={onRatingChange}/>
                <label className="rating__label" htmlFor={`radio-${el + 1}`}>Rating {el + 1}</label>
              </span>
            ))
          }
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
