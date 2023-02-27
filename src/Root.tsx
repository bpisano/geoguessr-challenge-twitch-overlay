import { FunctionComponent } from 'react';
import { Composition } from 'remotion';
import { Size } from './models/size';
import { MonumentsAppearingSequence } from './sequences/monumentsAppearingSequence';
import {
  MONUMENT_APPEAR_DELAY,
  MONUMENT_APPEAR_DURATION,
  MONUMENT_IDLE_DURATION,
  SIGN_APPEAR_DURATION
} from './utils/constant';
import { SignAppearingSequence } from './sequences/signAppearingSequence';
import { Video } from './sequences/video';

export const Root: FunctionComponent = () => {
  const fps: number = 60;
  const size: Size = { width: 1920, height: 1080 };

  return (
    <>
      <Composition
        id="Video"
        component={Video}
        durationInFrames={fps * (MONUMENT_APPEAR_DELAY + MONUMENT_APPEAR_DURATION + MONUMENT_IDLE_DURATION)}
        fps={fps}
        width={size.width}
        height={size.height}
      />

      <Composition
        id="Monuments"
        component={MonumentsAppearingSequence}
        durationInFrames={fps * MONUMENT_APPEAR_DURATION}
        fps={fps}
        width={size.width}
        height={size.height}
      />

      <Composition
        id="Sign"
        component={SignAppearingSequence}
        durationInFrames={fps * SIGN_APPEAR_DURATION}
        fps={fps}
        width={size.width}
        height={size.height}
      />
    </>
  );
};
