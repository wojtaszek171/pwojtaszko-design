import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import image from 'rollup-plugin-img';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'focus-visible': 'focusVisible',
  i18next: 'i18next',
  moment: 'moment',
  'prop-types': 'propTypes',
  'rc-calendar': 'rcCalendar',
  'react-tooltip': 'reactTooltip',
  'react-i18next': 'reactI18next',
  'react-virtualized': 'reactVirtualized',
  'i18next-pseudo': 'i18nextPseudo',
  antd: 'antd',
  lodash: 'lodash',
};

const extensions = ['.ts', '.js', '.tsx'];

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.js',
      format: 'umd',
      name: 'rc',
      sourcemap: true,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      postcss({
        extensions: ['.scss', '.css'],
        extract: true,
      }),
      babel({
        exclude: './node_modules/**',
        runtimeHelpers: true,
        extensions,
      }),
      json(),
      resolve(),
      commonjs({
        namedExports: { 'react-csv': ['CSVLink'], 'react-is': ['isMemo', 'isFragment'] },
      }),
      image({ limit: 1000000 }),
      typescript(),
    ],
  },
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.min.js',
      format: 'umd',
      name: 'rc',
      sourcemap: true,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      postcss({
        extensions: ['.scss', '.css'],
        extract: true,
        minimize: true,
      }),
      babel({
        exclude: './node_modules/**',
        runtimeHelpers: true,
        extensions,
      }),
      json(),
      resolve(),
      commonjs({
        namedExports: { 'react-csv': ['CSVLink'], 'react-is': ['isMemo', 'isFragment'] },
      }),
      terser(),
      image({ limit: 1000000 }),
      typescript(),
    ],
  },
];
