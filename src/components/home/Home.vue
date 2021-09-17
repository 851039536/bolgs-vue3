<!--
 * @Author: 自我介绍
 * @Date: 2021-07-14 15:00:34
 * @LastEditTime: 2021-09-17 17:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Home.vue
-->

<template>
  <div id="blogHome" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="centeredPrompt">
        <div class="centeredPrompt__item centeredPromptIcon">
          <div class="icon fa fa-smile-o"></div>
        </div>
        <div class="centeredPrompt__item centeredPromptLabel">
          满天星辰
        </div>
        <div class="centeredPrompt__item centeredPromptDetails">
          一位热爱生活、xxxxxx开发者。
        </div>
        <div class="centeredPrompt__item button">
          <button class="btn btn-link" @click="Routers('/Blogs')">Go</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Routers } from '@/hooks/routers'

export default defineComponent({
  setup() {
    const obj: any = reactive({
      show: true,
    })

    let warn = async (message: any, event: any) => {
      // 现在可以访问到原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
    return {
      obj,
      Routers,
      warn,
    }
  },
})
</script>
<style lang="scss" scoped>
@import './index.scss';

.centeredPrompt {
  /**
   * Lay out the children of this container with
   * flexbox.
   */
  display: flex;

  /**
   * Rotate the main axis so that the children
   * are laid out vertically, the same as in the
   * above "Side bar" example.
   */
  flex-direction: column;

  /**
   * Instead of pushing the children apart, as in
   * previous examples, we will group them together
   * in the center of their container.
   */
  justify-content: center;

  /**
   * Align the children in the center, along
   * the main axis. Because the direction is
   * "column" this has a similar effect as setting
   * text-align: center.
   */
  align-items: center;

  min-height: 300px;
  padding: 10px;
}

.centeredPrompt__item + .centeredPrompt__item {
  margin-top: 5px;
}

.centeredPromptIcon {
  font-size: 60px;
  line-height: 0;
}

.centeredPromptLabel {
  color: #86969c;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
}

.centeredPromptDetails {
  color: #86969c;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
}

.icon {
  color: #bcd2da;
}
</style>
