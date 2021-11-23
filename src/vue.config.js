/*
 * @Author: your name
 * @Date: 2020-12-14 17:16:33
 * @LastEditTime: 2021-11-23 11:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\vue.config.js
 */
// const CompressionWebpackPlugin = require("compression-webpack-plugin");

const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {


  chainWebpack: config => {
    config.resolve.extensions
      .add('ts')
      .add('tsx');
    // 修复热更新失效
    config.resolve.symlinks(true);
    //  如果使用多页打包，使用vue inspect --plugins 查看html是都在结果数组中

    // eslint-disable-next-line no-undef
    config.plugin('cache').use(HardSourceWebpackPlugin);

    config
      .plugin('ContextReplacementPlugin')
      // eslint-disable-next-line no-undef
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);

  },
  // 基本路径
  publicPath: "./",
  // 相对于打包路径index.html的路径
  indexPath: "index.html",
  // 文件输出目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 生成的静态资源存放的目录
  assetsDir: "static",
  // 以多页模式构建应用程序
  pages: undefined,
  // 是否使用包含运行时编译器的vue构建版本
  runtimeCompiler: false,
  // 是否为babel或typescript使用thread-loader，在系统的CPU有多于一个内核时自动启用，仅作用于生产环境，在适当的时候开启多线程去并发的执行压缩
  parallel: require("os").cpus().length > 1,
  // 生产环境是否生成sourceMap 文件，一般不建议打开
  productionSourceMap: false,
  // 调整webpack配置
  configureWebpack: (config) => {

    // 取消webpack警告性能的提示
    config.performance = {};
    // 打包分离js
    config.optimization = {
      splitChunks: {
        chunks: "async",
        minChunks: 2,
        minSize: 100000,
        cacheGroups: {
          base: {
            name: "base",
            minChunks: 1,
            test: /[\\/]node_modules[\\/]vue[\\/]|[\\/]node_modules[\\/]vue-router[\\/]|[\\/]node_modules[\\/]vuex[\\/]|[\\/]node_modules[\\/]axios[\\/]/,
            chunks: "initial",
            priority: -3
          },
          antd: {
            name: "ant-design",
            test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            chunks: "initial",
            minChunks: 1,
            priority: -4,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    };
    config.optimization.runtimeChunk = {
      name: "manifest"
    };
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
  // css相关配置
  // css: {
  //   // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
  //   // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
  //   extract: true,
  //   // 是否开启 CSS source map？
  //   sourceMap: true,
  //   // 为所有的 CSS 及其预处理文件开启 CSS Modules。
  //   // 这个选项不会影响 `*.vue` 文件。
  //   modules: false,
  //   requireModuleExtension: true, // 是否仅对文件名包含module的css相关文件使用 CSS Modules
  //   // 为预处理器的 loader 传递自定义选项。比如传递给
  //   // sass-loader 时，使用 `{ sass: { ... } }`。
  //   loaderOptions: {
  //     css: {
  //       module: {
  //         rules: [
  //           // ... 其它规则省略
  //           {
  //             test: /\.css$/,
  //             use: [
  //               'vue-style-loader',
  //               "style-loader",
  //               "css-loader",
  //               "sass-loader",
  //               {
  //                 loader: 'css-loader',
  //                 options: {
  //                   // 开启 CSS Modules
  //                   modules: true,
  //                   // 自定义生成的类名
  //                   localIdentName: '[local]_[hash:base64:8]'
  //                 }
  //               },
  //             ]
  //           }
  //         ]
  //       }
  //     }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
  //     sass: {
  //       data: `@import "./styles/uitl.scss";`,
  //     },
  //   },
  // },
}