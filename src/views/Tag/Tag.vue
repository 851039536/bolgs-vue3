<!--
 * @Author: your name
 * @Date: 2020-12-10 11:40:02
 * @LastEditTime: 2021-10-14 14:49:22
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

onMounted(async () => {
  await AsyGetTag(id.id)
  console.log(
    '%c [ id.id ]',
    'font-size:13px; background:pink; color:#bf2c9f;',
    id.id
  )
  await getAll()
})
</script>
<template>
  <div class="animate__animated" :class="[state.tag, state.fadeIn]">
    <div class="tag-main">
      <div class="tag_search">
        <div>
          <a-input-search
            v-model:value="value"
            placeholder="input search text"
            enter-button
            @search="onSearch"
          />
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

  height: 50px;

  div {
    @apply absolute top-1/2 left-1/2;

    width: 40%;
    transform: translate(-50%, -50%);
  }
}
</style>
