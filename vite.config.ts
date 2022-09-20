import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from '@vitejs/plugin-vue-jsx'

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
	plugins: [vue(), vueJSX()],
	build: {
		rollupOptions,
		minify: false,
		lib: {
			entry: "./src/entry.ts",
			name: "SmartyUI",
			fileName: "smarty-ui",
			// 导出模块格式
			formats: ["esm", "umd", "iife"],
		},
	},
});
