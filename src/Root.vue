<template>
  <div id="root">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Root',
    mounted () {
      let self = this

      // setTimeout(function () {
      //   self.$refs.test.hide()
      // }, 2000)
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>
