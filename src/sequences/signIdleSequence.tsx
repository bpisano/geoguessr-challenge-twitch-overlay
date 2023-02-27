import { FunctionComponent } from 'react';
import { AbsoluteFill } from 'remotion';
import { Sign } from '../components/sign';
import { SIGN_END_ROTATION, SIGN_POSITION } from '../utils/constant';

export const SignIdleSequence: FunctionComponent = () => {
  return (
    <AbsoluteFill>
      <Sign className="absolute" position={SIGN_POSITION} rotation={SIGN_END_ROTATION} />
    </AbsoluteFill>
  );
};
