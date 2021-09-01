### About

> 🔧 Elegant devtool for formily component.

### Requirements

* node version >= 8.10

### Features

* 🚀 init / dev / build 一键式体验
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

> 💡 Tips

* ⚠️ `dev server` 启动时，控制台的 `dart sass` 构建警告，可以无视
* `@root` 默认为 `src` 根目录的 `alias`，因此你可以像这样引入模块 `import '@root/index.ts'`，`demo.vue` 中可以看到示范，好处是当构建器升级时，不需要关心 `src` 路径的变更
* 构建编译时开启了 `allowJs`，因此 `src` 下可以使用 `js` 和 `ts` 混合开发模式
* 样式文件支持 `css` / `sass` / `scss`，因此你可以在`调试的时候`大胆引入三方的 `css`

#### dev

```bash
> efc dev
```

#### build

```bash
> efc build
```

### Thanks

* [ajs](https://github.com/qddegtya/ajs)
* [cf - ✨ a guided and prescriptive CLI creator.](https://github.com/qddegtya/cf)
* webpack
* babel
* typescript
* vue
