<!--
 * @Author: your name
 * @Date: 2021-09-18 16:37:23
 * @LastEditTime: 2021-11-18 14:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\editor\vmdhtml.vue
-->

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { reactive, onMounted, ref, getCurrentInstance } from 'vue'
  import { article } from '@/api/index'

  const route = useRoute()
  interface State {
    blog: any
    id: any
    titles: any
  }
  const state: State = reactive({
    blog: [],
    id: route.query.id,
    titles: []
  })

  const GetAll = async () => {
    await article.GetByIdAsync(state.id, true).then((res: any) => {
      state.blog = res.data[0]
    })
  }

  const { proxy }: any = getCurrentInstance()
  const preview = ref()
  function handleAnchorClick(anchor: any) {
    const { lineIndex } = anchor
    const heading = preview.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)
    if (heading) {
      preview.value.scrollToTarget({
        target: heading,
        scrollContainer: window,
        top: 60
      })
    }
  }

  onMounted(async () => {
    console.log('[ proxy ]', proxy.$refs.preview.$el)
    await GetAll()
    const anchors = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim())
    if (!titles.length) {
      state.titles = []
      return
    }
    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort()
    state.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName)
    }))
  })
</script>
<template>
  <a-back-top />
  <div class="anchor">
    <div class="anchor_tag" v-for="anchor in state.titles" :key="anchor" @click="handleAnchorClick(anchor)">
      {{ anchor.title }}
    </div>
  </div>
  <div class="vmd">
    <a-page-header style="border: 1px solid rgb(235, 237, 240);" :title="state.blog.title" />
    <v-md-preview :text="state.blog.text" ref="preview" />
  </div>
</template>

<style lang="scss" scoped>
  @import '@/design/methodCss';
  @import '@/design/uitl';

  .vmd {
    width: 77%;
    @apply bg-white  mt-12;
    margin-left: 3%;
  }
  .anchor {
    width: 16%;
    // height: 100%;
    z-index: 10;
    @apply fixed  bg-gray-100 rounded;
    top: 7%;
    right: 3%;
    .anchor_tag {
      @apply bg-white m-1 p-2 cursor-pointer  text-lg text-gray-600 font-semibold;
    }
  }
</style>
