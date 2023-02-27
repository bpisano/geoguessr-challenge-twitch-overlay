import { FunctionComponent } from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { Monument } from '../components/monument';
import { allMonuments } from '../models/monument';
import { monumentProperties } from '../models/monumentProperty';
import { MONUMENT_IDLE_DURATION } from '../utils/constant';

export const MonumentsIdleSequence: FunctionComponent = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Sequence durationInFrames={fps * MONUMENT_IDLE_DURATION}>
        {allMonuments
          .map((monument) => monumentProperties[monument])
          .map((properties) => (
            <Monument
              className="absolute"
              key={properties.imageName}
              imagePath={`/images/${properties.imageName}.png`}
              position={properties.position}
              size={properties.size}
              rotation={0}
            />
          ))}
      </Sequence>
    </AbsoluteFill>
  );
};
