// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@

const BC = require('@atools/cf').BC
const Builder = require('../../../shared/Builder')
const path = require('path')
const fs = require('fs')

export default class Build extends BC {
  static command = 'build';
  static alias = 'b';
  static description = '启动构建';

  init(commander) {
    // NOOP
  }

  async do() {
    const cwd = this.context.cwd
    const ps = path.resolve
  }
}
