import { FunctionComponent } from 'react';
import { AbsoluteFill, Sequence, staticFile } from 'remotion';
import { allMonuments } from '../models/monument';
import { monumentProperties } from '../models/monumentProperty';
import { Monument } from './components/monument';

export const Monuments: FunctionComponent = () => {
  return (
    <AbsoluteFill className="bg-green-500">
      {allMonuments
        .map((monument) => monumentProperties[monument])
        .map((properties) => (
          <Monument key={properties.imageName} properties={properties} />
        ))}
    </AbsoluteFill>
  );
};
