import { Config } from '@remotion/cli/config';
import { webpackOverride } from './src/utils/webpackOverride';

Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(webpackOverride);
