import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const rollupOptions = {
	external: ["vue"],
	output: {
		globals: {
			vue: "Vue",
		},
	},
};

export const config = {
	plugins: [vue() as Plugin, vueJSX() as Plugin, Unocss() as Plugin[]],
	build: {
		rollupOptions,
		minify: "terser",
		sourcemap: true,
		brotliSize: true,
		// cssCodeSplit: true,
		lib: {
			entry: "./src/entry.ts",
			name: "PupUI",
			fileName: "pup-ui",
			formats: ["esm", "umd", "iife"],
		},
		outDir: "./dist",
	},
	test: {
		globals: true,
		environment: "happy-dom",
		// 支持tsx组件，很关键
		transformMode: {
			web: [/.[tj]sx$/],
		},
		coverage: {
			provider: "istanbul", // or 'c8',
			reporter: ["text", "json", "html"],
		},
	},
};

export default defineConfig(config as VitestUserConfigInterface);
