import { FunctionComponent } from 'react';
import { staticFile } from 'remotion';
import { Position } from '../models/position';
import { Size } from '../models/size';
import { StylableComponent } from '../utils/stylableComponents';

interface Props extends StylableComponent {
  imagePath: string;
  position: Position;
  size: Size;
  rotation: number;
}

export const Monument: FunctionComponent<Props> = ({ className, imagePath, position, size, rotation }) => {
  return (
    <img
      className={className}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        rotate: `${rotation}deg`
      }}
      src={staticFile(imagePath)}
    />
  );
};
