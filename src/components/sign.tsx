import { FunctionComponent } from 'react';
import { staticFile } from 'remotion';
import { Position } from '../models/position';
import { SIGN_SIZE } from '../utils/constant';
import { StylableComponent } from '../utils/stylableComponents';

interface Props extends StylableComponent {
  position: Position;
  rotation: number;
}

export const Sign: FunctionComponent<Props> = ({ className, position, rotation }) => {
  return (
    <img
      className={className}
      style={{
        left: position.x,
        top: position.y,
        width: SIGN_SIZE.width,
        height: SIGN_SIZE.height,
        rotate: `${rotation}deg`
      }}
      src={staticFile('/images/sign.png')}
    />
  );
};
