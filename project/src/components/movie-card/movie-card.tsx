import { FC, useEffect, useState } from 'react';
import { Movie } from '../../types/main-page.types';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../video-player/video-player';

type Props = {
  movie: Movie;
  onMouseEnter: (movie: Movie) => void;
}

const MovieCard: FC<Props> = (props) => {
  const { movie, onMouseEnter } = props;

  const [isPreviewVideoStarted, setIsPreviewVideoStarted] = useState<boolean>(false);
  const [isPreviewStarted, setPreviewStarted] = useState<boolean>(false);

  useEffect(() => {
    let videoNeedToPlay = true;

    if (isPreviewStarted) {
      setTimeout(() => videoNeedToPlay && setIsPreviewVideoStarted(true), 500);
    }

    return () => {
      videoNeedToPlay = false;
    };
  }, [isPreviewStarted]);

  const handleMouseEnter = () => {
    setPreviewStarted(true);
  };

  const handleMouseLeave = () => {
    setPreviewStarted(false);
    setIsPreviewVideoStarted(false);
  };


  return (
    <Link
      to={`/films/${movie.id}`}
      className="small-film-card catalog__films-card small-film-card__link"
      onMouseEnter={(_) => {
        onMouseEnter(movie);
        handleMouseEnter();
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={movie.videoLink}
          poster={movie.posterImage}
          muted
          height="175"
          width="280"
          isPlaying={isPreviewVideoStarted}
        />
      </div>
      <h3 className="small-film-card__title">{movie.name}</h3>
    </Link>
  );
};

export default MovieCard;
