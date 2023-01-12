import { Dispatch, FC, SetStateAction } from 'react';
import { AMOUNT_OF_VISIBLE_MOVIES_STEP } from '../../const/const';

type Props = {
  isVisible: boolean;
  setNumberOfShownMovies: Dispatch<SetStateAction<number>>;
};

const ShowMore: FC<Props> = (props) => {
  const { setNumberOfShownMovies, isVisible } = props;

  return (
    <div
      className="catalog__more"
      style={{display: isVisible ? 'block' : 'none'}}
    >
      <button
        className="catalog__button"
        type="button"
        onClick={() => setNumberOfShownMovies((prev) => prev + AMOUNT_OF_VISIBLE_MOVIES_STEP)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
