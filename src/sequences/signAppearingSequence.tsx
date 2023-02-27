import { FunctionComponent } from 'react';
import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Sign } from '../components/sign';
import { SIGN_END_ROTATION, SIGN_POSITION, SIGN_SIZE, SIGN_START_ROTATION } from '../utils/constant';

export const SignAppearingSequence: FunctionComponent = () => {
  const frame: number = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const yPosition: number = spring({
    frame: frame,
    fps,
    durationInFrames: durationInFrames - fps * 0.5,
    from: SIGN_POSITION.y + SIGN_SIZE.height,
    to: SIGN_POSITION.y,
    config: {
      stiffness: 60,
      damping: 10
    }
  });

  const rotation: number = spring({
    frame: frame,
    fps,
    durationInFrames: durationInFrames - fps * 0.5,
    from: SIGN_START_ROTATION,
    to: SIGN_END_ROTATION,
    config: {
      stiffness: 20,
      damping: 5
    }
  });

  return (
    <AbsoluteFill>
      <Sequence>
        <Sign className="absolute" position={{ x: SIGN_POSITION.x, y: yPosition }} rotation={rotation} />
      </Sequence>
    </AbsoluteFill>
  );
};
