### About

> 🔧 Elegant devtool for formily component.

### Requirements

* node version >= 8.10

### Features

* 🚀 init / dev / build / publish 一键式体验
* ⚙️ 自动安装依赖
* 🌍 完美支持 HMR

### abc.json

> all builder config.

```json
{
  "builder": {},
  "devServer": {
    "port": 8099
  }
}
```

### Install

```bash
> npm install @atools/efc -g
```

### Commands

#### init

```bash
> efc init
```

##### scaffold tree

> 介绍

```
.
└── select
    ├── README.md // 组件文档
    ├── abc.json
    ├── demo
    │   └── index.vue // 🥣 开发调试的 playground
    ├── index.js
    ├── package.json
    ├── src
    │   ├── index.scss
    │   ├── index.ts // 主入口文件
    │   └── style.ts // 样式主入口，webpack 可自动去重
    └── tsconfig.json // tsconfig.json 默认不需要做任何修改
```

* `@root` 默认为 `src` 根目录的 `alias`，因此你可以这样引入 `import '@root/index.ts'`，`demo.vue` 中可以看到示范

#### dev

```bash
> efc dev
```

#### build

```bash
> efc build
```
