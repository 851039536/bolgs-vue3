<template>
  <div class="indextitle animate__animated animate__fadeIn">
    <a-back-top />

    <!-- 首页图 -->
    <div class="indextitle_img"></div>
    <!-- end 首页图 -->

    <!-- article表内容 -->
    <div
      class="indextitle_content"
      v-for="info in state.dataResult"
      :key="info.articleId"
    >
      <div class="indextitle_text_div">
        <div class="indextitle_title_div">
          <div class="indextitle_title" v-on:click="skip(info.articleId)">
            <a>{{ info.title }}</a>
          </div>
          <div class="indextitle_title_text">摘要: {{ info.titleText }}</div>
          <div class="indextitle_user">
            <div>少年</div>
            <div>随笔</div>
            <div>{{ info.timeCreate.substring(0, 10) }}</div>

            <div @click="skip(info.article_id)">
              <a>{{ info.read }} ℃</a>
            </div>
            <div>
              <svg class="inline-block icon" aria-hidden="true">
                <use
                  xlink:href="#icon-dianzan2
"
                />
              </svg>
              {{ info.give }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end article表内容  -->

    <!-- 分页 -->
    <div class="indextitle_page">
      <a-pagination
        size="small"
        @change="column.CurrentChange"
        :total="state.count"
        :pageSize="state.pagesize"
        show-quick-jumper
      />
    </div>
    <!-- end 分页-->
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { setBlog } from '@/api/index'
import { state, column } from './index'

export default defineComponent({
  setup() {
    const router = useRouter()
    const stores = useStore()

    async function skip(id: number) {
      await setBlog.GetByIdAsync(1, false).then((res: any) => {
        stores.state.SetPage = res.data.setIsopen
      })
      if (stores.state.SetPage) {
        const { href } = await router.resolve({
          path: '/Particulars',
          query: { id: id },
        })
        window.open(href, '_blank')
      } else {
        await router.push({
          path: '/IndexText',
          query: {
            id: id,
          },
        })
      }
    }
    onMounted(async () => {
      await column.GetCount()
      await column.GetFyTitle()
    })
    return {
      state,
      skip,
      column,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
