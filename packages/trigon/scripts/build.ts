// obtain vite configs
import { build, InlineConfig, defineConfig, UserConfig } from 'vite';
import * as path from 'path';
import * as fse from 'fs-extra';

import { config } from '../vite.config';

const buildAll = async () => {
  // fully packed
  await build(defineConfig(config as UserConfig) as InlineConfig);

  // copy package.json file
  const pkgJson = require('../package.json');

  pkgJson.main = '/dist/@ui-puzzles/trigon.umd.js';
  pkgJson.module = '/dist/@ui-puzzles/trigon.esm.js';

  fse.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(pkgJson, null, 2)
  );

  // copy README.md file
  fse.copyFileSync(path.resolve('./README.md'), path.resolve(config.build.outDir + '/README.md'));

  const srcDir = path.resolve(__dirname, '../src');

  fse
    .readdirSync(srcDir)
    .filter((name) => {
      // obtain current directory and index.ts file
      const componentDir = path.resolve(srcDir, name);
      const isDir = fse.lstatSync(componentDir).isDirectory();

      return isDir && fse.readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);

      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // exported module name
          fileName: 'index',
          formats: ['esm', 'umd'],
        },
        outDir,
      };

      Object.assign(config.build, custom);

      await build(defineConfig(config as UserConfig) as InlineConfig);

      fse.outputFile(
        path.resolve(outDir, 'package.json'),
        `{
          "name": "@ui-puzzles/trigon/${name}",
          "main": "index.umd.js",
          "module": "index.esm.js"
        }`,
        'utf-8'
      );
    });
};

buildAll();
