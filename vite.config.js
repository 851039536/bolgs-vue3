import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteRestart from 'vite-plugin-restart' //通过监听文件修改，自动重启 vite 服务
import { resolve } from 'path'
export default defineConfig({
  plugins: [
    vue(),
    ViteRestart({
      restart: ['my.config.[jt]s']
    }),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@vi': resolve('./src/views')
      // 'vue': "vue/dist/vue.esm-bundler.js"
    }
  },
  build: {
    //outDir: 'dist', // 产出目录
    //去除console
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
        modifyVars: {
          // 更改主题在这里
          'primary-color': '#52c41a',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      },
      scss: {
        //charset: false,
        //additionalData: '@import "./src/assets/common.scss";'
        javascriptEnabled: true
      }
    }
  },
  base: '/', // 打包路径
  server: {
    host: '0.0.0.0',
    port: 3000, // 服务端口号
    open: false, // 服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域
    // 设置代理，根据我们项目实际情况配置
    proxy: {
      // '/api': {
      //   target: 'http://www.baidu.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    }
  }
})
