/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const rollupOptions = {
	external: ["vue", "vue-router"],
	output: {
		globals: {
			vue: "Vue",
		},
	},
};

export default defineConfig({
	plugins: [vue(), vueJSX(), Unocss()],
	build: {
		rollupOptions,
		minify: false,
		cssCodeSplit: true,
		lib: {
			entry: "./src/entry.ts",
			name: "SmartyUI",
			fileName: "smarty-ui",
			// 导出模块格式
			formats: ["es" /* , "umd", "iife" */],
		},
	},
	test: {
		globals: true,
		environment: "happy-dom",
		// 支持tsx组件，很关键
		transformMode: {
			web: [/.[tj]sx$/],
		},
	},
});
