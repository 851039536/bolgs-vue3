<!--
 * @Author: your name
 * @Date: 2021-07-09 10:55:56
 * @LastEditTime: 2021-09-22 15:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\ListContent\ListContent.vue
-->

<template>
  <div>
    <div class="ListContent animate__animated animate__fadeIn">
      <div class="ListContent_title">
        <p>最新内容 / 总计 10</p>
      </div>
      <div
        class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div
              class="ListContent_t_content"
              v-for="(res, index) in listTitle"
              :key="index"
            >
              <a :href="listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div
              class="ListContent_t_content"
              v-for="(res, index) in listTitle"
              :key="index"
            >
              <a :href="listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div
              class="ListContent_t_content"
              v-for="(res, index) in listTitle"
              :key="index"
            >
              <a :href="listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>

        <div class="ListContent_div">
          <div class="ListContent_text">
            <div class="ListContent_t_title">
              <div>博客园</div>
              <div>最新</div>
            </div>
            <div
              class="ListContent_t_content"
              v-for="(res, index) in listTitle"
              :key="index"
            >
              <a :href="listHref[index]" target="_blank">
                <span>{{ index }}</span>
                {{ res }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue'
import { listContent } from '@/api/http/listContent'
import { message } from 'ant-design-vue'
export default {
  components: {},
  name: 'ListContent',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const state = reactive({
      listTitle: [] as any[],
      listHref: [] as any[],
    })
    const info = () => {
      message.info('功能进行中...')
    }
    const testall = async () => {
      {
        listContent.Cnblogs().then((res) => {
          let str = res.data
          for (let index = 0; index < str.length; index++) {
            const element = str[index].split('-')
            state.listTitle[index] = element[0]
            state.listHref[index] = element[1]
          }
        })
      }
    }
    onMounted(async () => {
      await testall()
      info()
    })

    return {
      ...toRefs(state),
      testall,
      info,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './ListContent.scss';
</style>
