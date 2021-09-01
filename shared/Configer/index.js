const path = require("path");
const rs = require.resolve;
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");

const Configer = ({ context, builder, devMode = true }) => {
  return {
    ...{
      mode: devMode ? "development" : "production",
      entry: devMode
        ? {
            demo: {
              import: context?.entry?.demo,
              library: {
                name: "[name]",
                type: "umd",
                export: "default",
              },
            },
            "webpack-hot-middleware/client": rs(
              "webpack-hot-middleware/client"
            ),
          }
        : {},
      output: {
        filename: context?.output?.filename,
        path: context?.output?.path,
        publicPath: context?.output?.publicPath,
        library: context?.output?.library,
      },
      resolve: {
        alias: context?.resolve.alias,
      },
      externals: {
        "vue@next": "Vue",
        vue: "Vue",
        "@vue/composition-api": "VueCompositionAPI",
      },
      module: {
        rules: devMode
          ? [
              {
                test: /\.vue$/,
                use: [
                  {
                    loader: rs("vue-loader"),
                    options: {
                      hotReload: true,
                    },
                  },
                ],
              },
              {
                test: /\.tsx?$/,
                use: [
                  {
                    loader: rs("ts-loader"),
                  },
                ],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  rs("style-loader"),
                  rs("css-loader"),
                  {
                    loader: rs("sass-loader"),
                    options: {
                      implementation: rs("sass"),
                      sassOptions: {},
                    },
                  },
                ],
              },
            ]
          : [],
      },
      plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
      ],
      optimization: {
        runtimeChunk: "single",
      },
    },
    ...(devMode
      ? {
          devtool: "source-map",
        }
      : {}),
  };
};

module.exports = Configer;
