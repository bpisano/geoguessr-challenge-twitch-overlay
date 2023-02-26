import { FunctionComponent } from 'react';
import { Sequence, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { MonumentProperty } from '../../models/monumentProperty';

interface Props {
  properties: MonumentProperty;
}

export const Monument: FunctionComponent<Props> = ({ properties }) => {
  const duration: number = 1.5 - properties.apparitionDelay;
  const frame: number = useCurrentFrame();
  const { fps } = useVideoConfig();

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
    <Sequence from={fps * properties.apparitionDelay} durationInFrames={fps * duration}>
      <img
        className="absolute"
        style={{
          left: properties.position.x,
          top: yPosition,
          width: properties.size.width,
          height: properties.size.height,
          rotate: `${rotation}deg`
        }}
        src={staticFile(`/images/${properties.imageName}.png`)}
      />
    </Sequence>
  );
};
