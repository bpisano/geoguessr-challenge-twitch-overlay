import { FunctionComponent } from 'react';
import { Composition, Sequence } from 'remotion';
import { Size } from './models/size';
import { MyComposition } from './Composition';
import { Monuments } from './components/monuments';

export const Root: FunctionComponent = () => {
  const fps: number = 60;
  const size: Size = { width: 1920, height: 1080 };

  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={size.width}
        height={size.height}
      />

      <Composition
        id="Monuments"
        component={Monuments}
        durationInFrames={60}
        fps={30}
        width={size.width}
        height={size.height}
      />
    </>
  );
};
