<template>
  <Headers></Headers>
  <router-view></router-view>
</template>
<script>
export default {
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
  },

}
</script>
<style lang="scss">
</style>
