import { FunctionComponent } from 'react';
import { Audio, staticFile } from 'remotion';

export const MainSound: FunctionComponent = () => {
  return <Audio src={staticFile('/audio/jingle.mp3')} />;
};
