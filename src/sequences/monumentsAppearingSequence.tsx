import { FunctionComponent } from 'react';
import { AbsoluteFill } from 'remotion';
import { allMonuments } from '../models/monument';
import { monumentProperties } from '../models/monumentProperty';
import { MonumentSequence } from './monumentSequence';

export const MonumentsAppearingSequence: FunctionComponent = () => {
  return (
    <AbsoluteFill>
      {allMonuments
        .map((monument) => monumentProperties[monument])
        .map((properties) => (
          <MonumentSequence key={properties.imageName} properties={properties} />
        ))}
    </AbsoluteFill>
  );
};
