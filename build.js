
const { execSync } = require('child_process');
const path = require('path');
const fse = require('fs-extra');

const babelPath = path
  .resolve(__dirname, './node_modules/.bin/babel');

const rollupPath = path
  .resolve(__dirname, './node_modules/.bin/rollup');

const tscPath = path
  .resolve(__dirname, './node_modules/.bin/tsc');

const exec = (command, extraEnv) => execSync(command, {
  stdio: 'inherit',
  env: { ...process.env, ...extraEnv },
});

const fileExtension = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx'
];

const ignoreGlobs = [
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.story.{js,jsx,ts,tsx}',
].join(',');

try {
  // typescript declaration files
  exec(
    `${tscPath} -p ./tsconfig.types.json`,
  );

  // copy typescript declaration files to commonJS and ES build
  fse.copySync('types', 'lib');
  fse.copySync('types', 'es');

  // commonJS module build
  exec(
    `${babelPath} src -D -d lib -x "${fileExtension}" --ignore "${ignoreGlobs}"`,
    { BABEL_ENV: 'cjs' },
  );

  // ES module build
  exec(
    `${babelPath} src -D -d es -x "${fileExtension}" --ignore "${ignoreGlobs}"`,
    { BABEL_ENV: 'es' },
  );

  // UMD build
  exec(
    `${rollupPath} -c ./rollup.config.js`,
  );
} catch (error) {
  process.exit(1);
}
