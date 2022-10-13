<p align="center">
<img src="https://cdn.jsdelivr.net/gh/yxw007/BlogPicBed@master//img/20221011132110.svg" style="width:200px;" />
</p>

<h1 align="center">Pup-ui</h1>

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/yxw007/Pup-ui/CI/publish?color=red)
![GitHub](https://img.shields.io/github/license/yxw007/pup-ui?color=red)
[![codecov](https://codecov.io/github/yxw007/Pup-ui/branch/master/graph/badge.svg?token=JNGQIR0XUO)](https://codecov.io/github/yxw007/Pup-ui)

## 特性

- Monorepo 风格 (pnpm workspace)
- 独立组件库
- 基于 Vue3 框架
- 支持 JSX 与 Vue 单文件组件
- Vitest + Vue3 plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- Vitepress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付

## 快速开始

```
npm i pup-ui
```

```
import Vue from "vue";
import style from "pup-ui/dist/style.css";
import PupUI from "pup-ui";

const App = {
	template: `
  	<SButton/>
  `,
};

createApp(App).use(PupUI).mount("#app");
```

## 相关链接

- [官方文档](https://pup-ui.vercel.app/)

## 浏览器支持

Modern browsers and Internet Explorer 10+.

## 讨论组

## LICENSE

[MIT](./LICENSE)

Copyright (c) 2022 - present xuewen (Potter) yan
