// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@

const BC = require('@atools/cf').BC
const AJS = require('xajs')
const vfs = require('vinyl-fs')
const map = require('map-stream')
const inquirer = require('inquirer')
const path = require('path')

const tpl = AJS.future.tpl
const MagicString = AJS.lang.MagicString

const __scaffold_root = path.join(__dirname, '../../../shared/__scaffold')

export default class Init extends BC {
  static command = 'init';
  static alias = 'i';
  static description = '初始化';

  init(commander) {}

  async do() {
    const cwd = this.context.cwd

    await inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: '[efc] -> 输入你要创建的表单组件名: ',
        },
        {
          type: 'input',
          name: 'author',
          message: '[efc] -> 输入你的名字（用于 package.json author 字段）: ',
        },
      ])
      .then(async ({ name, author }) => {
        vfs
          .src([`${__scaffold_root}/**/*.*`, `${__scaffold_root}/.*`])
          .pipe(
            map((file, cb) => {
              if (!file.isDirectory() && file.basename === 'index.vue.tpl') {
                file.basename = 'index.vue'
                file.contents = Buffer.from(
                  tpl.exec(file.contents.toString(), {
                    component: MagicString(name).capitalize(),
                  }),
                  'utf8'
                )
              } else if (
                !file.isDirectory() &&
                file.basename === 'index.ts.tpl'
              ) {
                file.basename = 'index.ts'
                file.contents = Buffer.from(
                  tpl.exec(file.contents.toString(), {
                    component: MagicString(name).capitalize(),
                  }),
                  'utf8'
                )
              } else if (
                !file.isDirectory() &&
                file.basename === 'package.json.tpl'
              ) {
                file.basename = 'package.json'
                file.contents = Buffer.from(
                  tpl.exec(file.contents.toString(), {
                    pkgName: `@formily-components/efc-${name}`,
                    author,
                  }),
                  'utf8'
                )
              }

              cb(null, file)
            })
          )
          .pipe(vfs.dest(path.join(cwd, name)))
      })
  }
}
