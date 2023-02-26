import { WebpackOverrideFn } from '@remotion/cli/dist/config';
import { enableTailwind } from './enableTailwind';

export const webpackOverride: WebpackOverrideFn = (currentConfiguration) => {
  return enableTailwind(currentConfiguration);
};
