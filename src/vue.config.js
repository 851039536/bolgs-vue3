/*
 * @Author: your name
 * @Date: 2020-12-14 17:16:33
 * @LastEditTime: 2021-05-06 14:09:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\vue.config.js
 */
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  chainWebpack: config => {
    config.resolve.extensions
      .add('ts')
      .add('tsx');
  },

  // gip压缩
  configureWebpack: config => {
    // 配置webpack 压缩
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.html$|\.css$/,
        // 超过4kb压缩
        threshold: 4096
      })
    )
  },
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: true, // 开启 CSS source maps?
    requireModuleExtension: true, // 是否仅对文件名包含module的css相关文件使用 CSS Modules
    loaderOptions: {
      css: {
        module: {
          rules: [
            // ... 其它规则省略
            {
              test: /\.css$/,
              use: [
                'vue-style-loader',
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    // 开启 CSS Modules
                    modules: true,
                    // 自定义生成的类名
                    localIdentName: '[local]_[hash:base64:8]'
                  }
                },
                'sass-loader'
              ]
            }
          ]
        }
      } // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
    },

  }
}