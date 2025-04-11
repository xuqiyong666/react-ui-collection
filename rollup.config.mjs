// rollup.config.mjs

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcssPresetEnv from 'postcss-preset-env';
import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

export default [
	{
		input: [
			'src/index.ts'
		],
		output: {
			dir: "dist",
			format: "esm",
			// sourcemap: true
		},
		plugins: [
			peerDepsExternal(),  // 排除 peerDependencies
			resolve(),       // 解析 node_modules 中的模块
			commonjs(),          // 转换 CommonJS → ES Modules
			typescript({
				tsconfig: "./tsconfig.json",
				exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts", "**/*.stories.tsx"],
			}),
			postcss({              // 处理 SCSS + CSS Modules
				modules: true,       // 启用 CSS Modules
				extract: false, // 禁用默认提取
				// output: (chunk) => `${chunk.name}.css`, // 按入口名生成 CSS
				plugins: [
					postcssPresetEnv()
				],
			})
		],
	}
]