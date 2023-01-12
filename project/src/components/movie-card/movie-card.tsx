import { FC, useEffect, useState } from 'react';
import { Movie } from '../../types/main-page.types';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../video-player/video-player';

type Props = {
  movie: Movie;
}

const MovieCard: FC<Props> = (props) => {
  const { movie: { videoLink, posterImage, id, name }} = props;

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
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <VideoPlayer
          src={videoLink}
          poster={posterImage}
          muted
          height="175"
          width="280"
          isPlaying={isPreviewVideoStarted}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

export default MovieCard;
