import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

const rollupOptions = {
	external: ["vue", "vue-router"],
	output: {
		globals: {
			vue: "Vue",
		},
	},
};

export default defineConfig({
	plugins: [
		vue(),
		vueJSX(),
		Unocss()
	],
	build: {
		rollupOptions,
		minify: false,
		cssCodeSplit: true,
		lib: {
			entry: "./src/entry.ts",
			name: "SmartyUI",
			fileName: "smarty-ui",
			// 导出模块格式
			formats: ["es"/* , "umd", "iife" */],
		},
	},
});
