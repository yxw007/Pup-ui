//! 说明：注册ts调试
require("ts-node").register();

import * as fs from "fs-extra";
import path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";

const buildAll = async () => {
	// const inline: InlineConfig =
	//   viteConfig;

	// 全量打包
	await build(defineConfig(config as UserConfig) as InlineConfig);
	// await build(defineConfig({}))

	const srcDir = path.resolve(__dirname, "../src/");
	fs.readdirSync(srcDir)
		.filter((name) => {
			// 只要目录不要文件，且里面包含index.ts
			const componentDir = path.resolve(srcDir, name);
			const isDir = fs.lstatSync(componentDir).isDirectory();
			return isDir && fs.readdirSync(componentDir).includes("index.ts");
		})
		.forEach(async (name) => {
			const outDir = path.resolve(config.build.outDir, name);
			const custom = {
				lib: {
					entry: path.resolve(srcDir, name),
					name: `S${name}`, // 导出模块名
					fileName: `index`,
					formats: [`esm`, `umd`],
				},
				outDir,
			};

			console.log("before:", config.build);
			Object.assign(config.build, custom);
			console.log("after:", config.build);

			await build(defineConfig(config as UserConfig) as InlineConfig);

			let pkg = {
				name: `pup-ui/${name}`,
				main: "index.umd.js",
				module: "index.umd.js",
			};

			fs.outputFile(path.resolve(outDir, `package.json`), JSON.stringify(pkg, null, 2), `utf-8`);
		});
};

buildAll();
