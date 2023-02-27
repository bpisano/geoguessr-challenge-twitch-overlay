import { FunctionComponent } from 'react';
import { Sequence, useVideoConfig } from 'remotion';
import { MainSound } from '../components/mainSound';
import {
  MONUMENT_APPEAR_DELAY,
  MONUMENT_APPEAR_DURATION,
  MONUMENT_IDLE_DURATION,
  SIGN_APPEAR_DELAY,
  SIGN_APPEAR_DURATION,
  SIGN_IDLE_DURATION
} from '../utils/constant';
import { MonumentsAppearingSequence } from './monumentsAppearingSequence';
import { MonumentsIdleSequence } from './monumentsIdleSequence';
import { SignAppearingSequence } from './signAppearingSequence';
import { SignIdleSequence } from './signIdleSequence';

export const Video: FunctionComponent = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <MainSound />

      <Sequence from={fps * SIGN_APPEAR_DELAY} durationInFrames={fps * SIGN_APPEAR_DURATION}>
        <SignAppearingSequence />
      </Sequence>

      <Sequence from={fps * (SIGN_APPEAR_DELAY + SIGN_APPEAR_DURATION)} durationInFrames={fps * SIGN_IDLE_DURATION}>
        <SignIdleSequence />
      </Sequence>

      <Sequence from={fps * MONUMENT_APPEAR_DELAY} durationInFrames={fps * MONUMENT_APPEAR_DURATION}>
        <MonumentsAppearingSequence />
      </Sequence>

      <Sequence
        from={fps * (MONUMENT_APPEAR_DELAY + MONUMENT_APPEAR_DURATION)}
        durationInFrames={fps * MONUMENT_IDLE_DURATION}
      >
        <MonumentsIdleSequence />
      </Sequence>
    </>
  );
};
