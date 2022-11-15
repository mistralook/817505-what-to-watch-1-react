import { FC, useEffect, useRef } from 'react';

type Props = {
  src: string;
  poster: string;
  muted: boolean;
  width: string;
  height: string;
  isPlaying: boolean;
}

export const VideoPlayer: FC<Props> = (props) => {
  const {
    src,
    poster,
    muted,
    width,
    height,
    isPlaying
  } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      poster={poster}
      width={width}
      height={height}
      muted={muted}
      src={src}
      ref={videoRef}
    />
  );
};
