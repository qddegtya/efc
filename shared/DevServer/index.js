const webpack = require("webpack");
const Configer = require("../Configer");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");
const path = require("path");

const DevServer = ({ context, abcOption }) => {
  const app = express();

  const config = Configer({
    context,
    ...abcOption,
  });

  const compiler = webpack(config);
  const instance = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: "normal",
  });

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "./playground"));

  app.get("/playground", (req, res) => {
    res.render("layout", {
      page: {
        title: "playground",
      },
      assets: {
        runtimeJs: "./runtime.js",
        path: "./demo.js",
        hmrClientJs: "./webpack-hot-middleware/client.js"
      },
    });
  });

  app.use(instance);
  app.use(webpackHotMiddleware(compiler));

  return {
    app,
    instance,
  };
};

module.exports = DevServer;
