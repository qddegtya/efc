### About

> ð§ Elegant devtool for formily component.

### Requirements

* node version >= 8.10

### Features

* ð init / dev / build ä¸é®å¼ä½éª
* âï¸ èªå¨å®è£ä¾èµ
* ð å®ç¾æ¯æ HMR

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
> npm install xaefc -g
```

### Commands

#### init

```bash
> efc init
```

##### scaffold tree

> ä»ç»

```
.
âââ select
    âââ README.md // ç»ä»¶ææ¡£
    âââ abc.json
    âââ demo
    â   âââ index.vue // ð¥£ å¼åè°è¯ç playground
    âââ index.js
    âââ package.json
    âââ src
    â   âââ index.scss
    â   âââ index.ts // ä¸»å¥å£æä»¶
    â   âââ style.ts // æ ·å¼ä¸»å¥å£ï¼webpack å¯èªå¨å»é
    âââ tsconfig.json // tsconfig.json é»è®¤ä¸éè¦åä»»ä½ä¿®æ¹
```

> ð¡ Tips

* â ï¸ `dev server` å¯å¨æ¶ï¼æ§å¶å°ç `dart sass` æå»ºè­¦åï¼å¯ä»¥æ è§
* `@root` é»è®¤ä¸º `src` æ ¹ç®å½ç `alias`ï¼å æ­¤ä½ å¯ä»¥åè¿æ ·å¼å¥æ¨¡å `import '@root/index.ts'`ï¼`demo.vue` ä¸­å¯ä»¥çå°ç¤ºèï¼å¥½å¤æ¯å½æå»ºå¨åçº§æ¶ï¼ä¸éè¦å³å¿ `src` è·¯å¾çåæ´
* æå»ºç¼è¯æ¶å¼å¯äº `allowJs`ï¼å æ­¤ `src` ä¸å¯ä»¥ä½¿ç¨ `js` å `ts` æ··åå¼åæ¨¡å¼
* æ ·å¼æä»¶æ¯æ `css` / `sass` / `scss`ï¼å æ­¤ä½ å¯ä»¥å¨`è°è¯çæ¶å`å¤§èå¼å¥ä¸æ¹ç `css`

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
* [cf - â¨ a guided and prescriptive CLI creator.](https://github.com/qddegtya/cf)
* webpack
* babel
* typescript
* vue
