
import { demoBlockPlugin } from "vitepress-theme-demoblock";
const sidebar = {
	"/": [
		{ text: "介绍", link: "/" },
		{
			text: "通用",
			children: [
				{ text: "Button 按钮", link: "/components/button/" },
			],
		},
		{ text: "导航" },
		{ text: "反馈" },
		{ text: "数据录入" },
		{ text: "数据展示" },
		{ text: "布局" },
	],
};
const config = {
	title: "🔨  Smarty-UI",
	description: "组件库搭建的教学模型",
	themeConfig: {
		sidebar,
	},
	markdown: {
		config: (md) => {
			// 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
			md.use(demoBlockPlugin);
		},
	},
};

export default config;
