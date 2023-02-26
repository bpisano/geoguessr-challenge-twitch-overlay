import { Config } from 'remotion';
import { webpackOverride } from './src/utils/webpackOverride';

Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(webpackOverride);
