<!--
 * @Author: your name
 * @Date: 2021-09-23 14:06:33
 * @LastEditTime: 2021-09-23 14:17:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\sidebarModule\stime\sTime.vue
-->

<template>
  <div id="clock">
    <p class="date">{{ state.date }}</p>
    <p class="time">{{ state.time }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    interface State {
      date: any
      time: any
    }
    const state: State = reactive({
      date: '',
      time: '',
    })
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const timerID = setInterval(updateTime, 1000)
    updateTime()
    function updateTime() {
      var cd = new Date()
      state.time =
        zeroPadding(cd.getHours(), 2) +
        ':' +
        zeroPadding(cd.getMinutes(), 2) +
        ':' +
        zeroPadding(cd.getSeconds(), 2)
      state.date =
        zeroPadding(cd.getFullYear(), 4) +
        '-' +
        zeroPadding(cd.getMonth() + 1, 2) +
        '-' +
        zeroPadding(cd.getDate(), 2) +
        ' ' +
        week[cd.getDay()]
    }

    function zeroPadding(num: any, digit: any) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }

    return { state }
  },
})
</script>

<style lang="scss" scoped>
#clock {
  width: 97%;
  color: #fff;
  color: #0d1e24;
  font-family: 'Share Tech Mono', monospace;
  text-align: center;

  @apply p-1 mb-2 mt-1 m-auto cursor-pointer;
  @apply bg-white shadow rounded;

  .time {
    padding: 5px 0;
    font-size: 30px;
    letter-spacing: 0.05em;
  }

  .date {
    font-size: 24px;
    letter-spacing: 0.1em;
  }
}
</style>
