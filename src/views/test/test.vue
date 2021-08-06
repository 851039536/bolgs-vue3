<!--
 * @Author: your name
 * @Date: 2021-05-06 11:38:40
 * @LastEditTime: 2021-08-03 08:51:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\test\test.vue
-->
<template>
  <div class="cj">
    <LuckyGrid
      width="265px"
      height="200px"
      rows="3"
      cols="4"
      :demo="true"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      @start="startCallBack"
      ref="$lucky"
      :active-style="activeStyle"
    />
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    data() {
      return {
        blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
        prizes: [
          { x: 0, y: 0, fonts: [{ text: '0元', top: 20 }] },
          { x: 1, y: 0, fonts: [{ text: '1元', top: 20 }] },
          { x: 2, y: 0, fonts: [{ text: '2元', top: 20 }] },
          { x: 3, y: 0, fonts: [{ text: '3元', top: 20 }] },
          { x: 3, y: 1, fonts: [{ text: '4元', top: 20 }] },
          { x: 3, y: 2, fonts: [{ text: '5元', top: 20 }] },
          { x: 2, y: 2, fonts: [{ text: '6元', top: 20 }] },
          { x: 1, y: 2, fonts: [{ text: '7元', top: 20 }] },
          { x: 0, y: 2, fonts: [{ text: '8元', top: 20 }] },
          { x: 0, y: 1, fonts: [{ text: '9元', top: 20 }] }
        ],
        buttons: [{ x: 1, y: 1, col: 2, fonts: [{ text: '抽奖按钮', top: 20 }] }],
        activeStyle: {
          fontColor: '#ff4a4c',
          background: 'pink',
          shadow: '0 5 1 #ebf1f4'
        },
      }
    },
    methods: {
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      startCallBack() {
        this.$refs.$lucky.play()
        setTimeout(() => {
          this.$refs.$lucky.stop(Math.random() * 4 >> 1)
        }, 3000)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cj {
    position: fixed;
    top: 25%;
    left: 30%;
  }
</style>