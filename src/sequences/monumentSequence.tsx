import { FunctionComponent } from 'react';
import { Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Monument } from '../components/monument';
import { MonumentProperty } from '../models/monumentProperty';

interface Props {
  properties: MonumentProperty;
}

export const MonumentSequence: FunctionComponent<Props> = ({ properties }) => {
  const frame: number = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const yPosition: number = spring({
    frame: frame - fps * properties.apparitionDelay,
    fps,
    from: properties.position.y + properties.size.height,
    to: properties.position.y,
    config: {
      stiffness: 50,
      damping: 15
    }
  });

  const rotation: number = spring({
    frame: frame - fps * properties.apparitionDelay,
    fps,
    from: properties.apparitionRotation,
    to: 0,
    config: {
      stiffness: 50,
      damping: 15
    }
  });

  return (
    <Sequence from={fps * properties.apparitionDelay} durationInFrames={fps * durationInFrames}>
      <Monument
        className="absolute"
        imagePath={`/images/${properties.imageName}.png`}
        position={{ x: properties.position.x, y: yPosition }}
        size={properties.size}
        rotation={rotation}
      />
    </Sequence>
  );
};
