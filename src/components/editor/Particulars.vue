<!--
 * @Author: your name
 * @Date: 2021-08-07 08:43:19
 * @LastEditTime: 2021-09-18 16:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Particulars.vue
-->
<!-- editor.vue -->
<template>
  <div id="Particulars">
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>
<script>
import { article } from '@/api/index.ts'
import hljs from 'highlight.js'
import E from 'wangeditor'

export default {
  name: 'editor',
  data() {
    return {
      editor: null,
      blogs: '',
    }
  },
  methods: {
    getall() {
      article.GetByIdAsync(this.$route.query.id, true).then((res) => {
        this.blogs = res.data
        this.editor.txt.html(this.blogs.html) // 重新设置编辑器内容
      })
    },
  },
  mounted() {
    this.getall()
    this.editor = new E(this.$refs.editor)
    // 配置全屏功能按钮是否展示
    this.editor.config.showFullScreen = false
    // 挂载highlight插件
    this.editor.highlight = hljs
    // 配置菜单栏，删减菜单，调整顺序
    this.editor.config.menus = []

    // 隐藏菜单栏提示
    this.editor.config.showMenuTooltips = false
    this.editor.create()

    this.editor.fullScreen() // 全屏
    this.editor.unFullScreen() // 取消全屏
    // 点击按钮，禁用编辑器
    this.editor.disable()
    // this.editor.enable()
  },
}
</script>

<style lang="scss">
@import '../../design/methodCss';
@import '../../design/uitl';

#Particulars {
  @include initialize(95%, null, null, null, null, null, null);
  @apply bg-gray-500 m-auto;
  .w-e-text-container {
    height: 100% !important;
  }
}
</style>
