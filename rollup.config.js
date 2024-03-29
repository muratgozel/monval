import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'

const babelPlugins=[]

babelPlugins.push(['@babel/plugin-transform-runtime', {
    corejs: {version: 3, proposals: true},
    helpers: true,
    regenerator: true,
    absoluteRuntime: false
}])

export default [
    {
        external: [
            /@babel\/runtime/, /core-js/
        ],
        input: 'build/index.js',
        output: [
            {
                format: 'cjs',
                file: 'dist/monval.cjs.js',
                sourcemap: false
            },
            {
                format: 'es',
                file: 'dist/monval.es.js',
                sourcemap: false
            }
        ],
        plugins: [
            nodeResolve({preferBuiltins: false}),
            commonjs({sourceMap: true}),
            json(),
            babel({
                babelHelpers: 'runtime',
                babelrc: false,
                exclude: ['node_modules/**'],
                presets: [
                    ['@babel/env', {
                        useBuiltIns: false,
                        debug: false
                    }]
                ],
                plugins: babelPlugins
            })
        ]
    },
    {
        input: 'build/index.js',
        output: [
            {
                format: 'iife',
                name: 'monval',
                file: 'dist/monval.iife.js',
                sourcemap: true,
                globals: {
                    monval: 'monval'
                }
            }
        ],
        plugins: [
            nodeResolve({preferBuiltins: false}),
            commonjs({sourceMap: true}),
            json(),
            babel({
                babelHelpers: 'runtime',
                babelrc: false,
                exclude: ['node_modules/**'],
                presets: [
                    ['@babel/env', {
                        useBuiltIns: 'usage',
                        corejs: {version: 3, proposals: true},
                        debug: false
                    }]
                ],
                plugins: babelPlugins
            }),
            terser({sourceMap: true})
        ]
    }
]