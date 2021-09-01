// @Warning: 使用 npm run cf-add 将自动使用本内容模板生成命令行模块
// @@ 因此，不要改动和删除此文件 @@

const BC = require("@atools/cf").BC;
const Builder = require("../../../shared/Builder");
const path = require("path");
const fs = require("fs");
const rs = require.resolve;
const execSync = require("child_process").execSync;
const vfs = require("vinyl-fs");
const map = require("map-stream");

export default class Build extends BC {
  static command = "build";
  static alias = "b";
  static description = "启动构建";

  init(commander) {
    // NOOP
  }

  async do() {
    const cwd = this.context.cwd;
    const ps = path.resolve;

    try {
      console.log("🧹 执行 clean......");
      execSync(`${rs("../../../node_modules/.bin/rimraf")} ./lib`, {
        cwd,
        stdio: [0, 1, 2],
      });

      console.log("⚙️  执行编译......");
      execSync(`${rs("../../../node_modules/.bin/tsc")} --allowJs`, {
        cwd,
        stdio: [0, 1, 2],
      });

      // copy scss / css / sass file
      vfs
        .src([
          `${path.join(cwd, "src")}/**/*.scss`,
          `${path.join(cwd, "src")}/**/*.sass`,
          `${path.join(cwd, "src")}/**/*.css`,
        ])
        .pipe(
          map((file, cb) => {
            cb(null, file);
          })
        )
        .pipe(vfs.dest(path.join(cwd, "lib")));

      console.log("🙆 编译成功");
    } catch (error) {
      console.log("❌ 编译失败");
      throw error;
    }
  }
}
