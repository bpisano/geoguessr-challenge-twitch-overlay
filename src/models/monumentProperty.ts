import { Monument } from './monument';
import { Position } from './potision';
import { Size } from './size';

export interface MonumentProperty {
  imageName: string;
  apparitionDelay: number;
  apparitionRotation: number;
  position: Position;
  size: Size;
}

export const monumentProperties: Record<Monument, MonumentProperty> = {
  [Monument.temple]: {
    imageName: 'Temple',
    apparitionDelay: 0.1,
    apparitionRotation: -5,
    position: {
      x: 841,
      y: 794
    },
    size: {
      width: 196,
      height: 285
    }
  },
  [Monument.mill]: {
    imageName: 'Mill',
    apparitionDelay: 0.2,
    apparitionRotation: 5,
    position: {
      x: 1679,
      y: 517
    },
    size: {
      width: 381,
      height: 563
    }
  },
  [Monument.coliseum]: {
    imageName: 'Coliseum',
    apparitionDelay: 0,
    apparitionRotation: -10,
    position: {
      x: 1092,
      y: 865
    },
    size: {
      width: 409,
      height: 255
    }
  },
  [Monument.mecca]: {
    imageName: 'Mecca',
    apparitionDelay: 0.1,
    apparitionRotation: 12,
    position: {
      x: 1404,
      y: 629
    },
    size: {
      width: 416,
      height: 450
    }
  },
  [Monument.eiffelTower]: {
    imageName: 'Eiffel',
    apparitionDelay: 0.2,
    apparitionRotation: -14,
    position: {
      x: 892,
      y: 441
    },
    size: {
      width: 290,
      height: 652
    }
  },
  [Monument.brandenburgGate]: {
    imageName: 'Brandenburg',
    apparitionDelay: 0.1,
    apparitionRotation: -5,
    position: {
      x: 540,
      y: 751
    },
    size: {
      width: 392,
      height: 329
    }
  },
  [Monument.segradaFamilia]: {
    imageName: 'Segrada',
    apparitionDelay: 0,
    apparitionRotation: 10,
    position: {
      x: 368,
      y: 649
    },
    size: {
      width: 231,
      height: 431
    }
  },
  [Monument.bigBen]: {
    imageName: 'BigBen',
    apparitionDelay: 0.1,
    apparitionRotation: -12,
    position: {
      x: 304,
      y: 751
    },
    size: {
      width: 64,
      height: 372
    }
  },
  [Monument.pyramid]: {
    imageName: 'Pyramid',
    apparitionDelay: 0.2,
    apparitionRotation: 15,
    position: {
      x: -280,
      y: 795
    },
    size: {
      width: 798,
      height: 285
    }
  }
};
