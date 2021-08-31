// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@

const BC = require('@atools/cf').BC

export default class Init extends BC {
  static command = 'init'
  static alias = 'i'
  static description = '初始化'

  init (commander) {

  }

  async do () {
    await console.log('Hello World.')
  }
}
