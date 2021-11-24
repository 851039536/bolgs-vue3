/*
 * @Author: your name
 * @Date: 2021-11-23 16:49:35
 * @LastEditTime: 2021-11-24 12:16:46
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogs-s\vite.config.js
 */
import {
  defineConfig,
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import {
  resolve
} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`
        }
      }]
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
    }
  },
  build: {
    // 去除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    // 🔥此处添加全局css🔥
    preprocessorOptions: {
      less: {
        modifyVars: { // 更改主题在这里
          'primary-color': '#52c41a',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      },
      scss: {
        //additionalData: '@import "./src/assets/common.scss";'
      }
    }
  },
  base: './', // 打包路径
  server: {
    host: '0.0.0.0',
    port: 4000, // 服务端口号
    open: false, // 服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      // '/api': {
      //   target: 'http://xxx.xxx.xxx.xxx:8000',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace('/api/', '/')
      // }
    }
  },
  extensions: [".js", ".ts", ".tsx", ".jsx"],
})