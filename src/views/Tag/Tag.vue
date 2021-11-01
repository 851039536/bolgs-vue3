<!--
 * @Author: your name
 * @Date: 2020-12-10 11:40:02
 * @LastEditTime: 2021-11-01 14:22:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\tag\Tag.vue
-->
<script lang="ts" setup>
import { article, labels } from '@/api'
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { state, State } from './data'
import TagHead from './components/TagHead.vue'
import TagContent from './components/TagContent.vue'
const route = useRoute()

const id: State = reactive({
  id: route.query.id,
})

async function AsyGetTag(id: any) {
  if (id == null) {
    id = 1
  }
  await article.GetTagtextAsync(id, true).then((result: any) => {
    state.newinfo = result.data
  })
}

async function getAll() {
  await labels.GetAllAsync(true).then((result: any) => {
    state.labels = result.data
  })
}

/**
 * @description: 搜素框模糊查询
 * @param {string} name 名称
 */
async function SearchTitle(name: string) {
  if (name === '') {
    return
  }
  await article.GetContainsAsync(name).then((res) => {
    state.newinfo = res.data
  })
}
onMounted(async () => {
  await AsyGetTag(id.id)
  await getAll()
})
</script>
<template>
  <div class="animate__animated" :class="[state.tag, state.fadeIn]">
    <div class="tag-main">
      <div class="tag_search">
        <div>
          <a-select
            show-search
            placeholder="标题搜索"
            style="width: 200px;"
            :default-active-first-option="false"
            :show-arrow="false"
            :filter-option="false"
            :not-found-content="null"
            @search="SearchTitle"
          >
          </a-select>
        </div>
      </div>
      <TagHead :result-data="state.labels"></TagHead>
      <TagContent></TagContent>
    </div>
  </div>
</template>

<style lang="scss">
@import './index.scss';

.tag_search {
  @include initialize(94%, null, null, null, 3%, null, #ffffff);

  @apply relative rounded-sm  shadow;

  height: 40px;

  div {
    @apply absolute left-1/2;

    top: 90%;
    width: 40%;
    transform: translate(-50%, -50%);
  }
}
</style>
