"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@
const BC = require("@atools/cf").BC;

class Ii extends BC {
  init(commander) {}

  async do() {
    await console.log('Hello World.');
  }

}

exports.default = Ii;

_defineProperty(Ii, "command", "install");

_defineProperty(Ii, "alias", "i");

_defineProperty(Ii, "description", "");