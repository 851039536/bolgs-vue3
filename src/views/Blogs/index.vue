<!--
 * @Author: your name
 * @Date: 2021-07-19 10:04:36
 * @LastEditTime: 2021-09-14 18:10:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Blogs\Blogs.vue
-->
<template>
  <blogs-sidebar></blogs-sidebar>
  <blog-sidebar></blog-sidebar>
  <a-back-top />
  <s-aspin></s-aspin>
  <div id="blogs" class="animate__animated animate__fadeIn">
    <div class="blogs_main">
      <!-- 内容框 -->
      <blogs-content :dataResult="blogsList.dataResult"></blogs-content>
      <!-- end 内容框  -->

      <!-- 分页 -->
      <div class="blogs-page">
        <a-pagination
          size="small"
          @change="currentchange"
          :total="blogsList.count"
          :pageSize="blogsList.pagesize"
          show-quick-jumper
        ></a-pagination>
      </div>
      <!-- end 分页 -->
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import SAspin from '@/components/aspin/sAspin.vue'
import BlogsSidebar from './components/BlogsSidebar.vue'
import { blogsList } from './components/data'
import BlogsContent from './components/BlogsContent.vue'
import { blogs } from './index'

export default defineComponent({
  components: { BlogsSidebar, SAspin, BlogsContent },

  setup() {
    async function currentchange(val: number): Promise<void> {
      blogsList.page = val
      await blogs.GetFySortTitle()
      await backtop()
    }

    const backtop = async () => {
      {
        let timer = setInterval(function() {
          let osTop =
            document.documentElement.scrollTop || document.body.scrollTop
          let ispeed = Math.floor(-osTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop =
            osTop + ispeed
          if (osTop === 0) {
            clearInterval(timer)
          }
        }, 30)
      }
    }

    onMounted(async () => {
      await blogs.ConutSort()
      await blogs.GetFySortTitle()
    })
    return {
      blogsList,
      currentchange,
    }
  },
})
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
