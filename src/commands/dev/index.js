// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@

const BC = require('@atools/cf').BC
const DevServer = require('../../../shared/DevServer')
const path = require('path')
const fs = require('fs')

export default class Dev extends BC {
  static command = 'dev';
  static alias = 'd';
  static description = '启动开发环境';

  init(commander) {}

  async do() {
    const cwd = this.context.cwd
    const ps = path.resolve
    const abcOptions = JSON.parse(
      fs.readFileSync(ps(cwd, './abc.json'), 'utf8')
    )

    const { app, instance } = DevServer({
      context: {
        entry: {
          demo: ps(cwd, 'demo/index.vue'),
        },
        output: {
          name: '[name].js',
          library: {
            name: 'efc-demo-module',
            type: 'umd',
            export: 'default'
          }
        },

        resolve: {
          alias: {
            '@root': ps(cwd, 'src'),
          },
        },
      },
      abcOptions,
    })

    instance.waitUntilValid(() => {
      const port = abcOptions.devServer.port || 3000

      app.listen(port, () => {
        console.log(`🌍 [efc] dev server start listening on: ${port}.`)
      })
    })
  }
}
