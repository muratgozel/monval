const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')
const json = require('@rollup/plugin-json')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  external: [
    'basekits'
  ],
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/monval.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/monval.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/monval.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/monval.iife' + suffix + '.js',
      name: 'Monval',
      globals: {
        'basekits': 'Basekits'
      }
    },
    {
      format: 'umd',
      file: 'dist/monval.umd' + suffix + '.js',
      name: 'Monval',
      globals: {
        'basekits': 'Basekits'
      }
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    babel(),
    terser()
  ]
}
