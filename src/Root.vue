<template>
  <div id="root">
    <router-view/>

    <!-- <loading ref="test"></loading> -->
  </div>
</template>

<script>
  import Loading from '@/components/loading'

  export default {
    name: 'Root',
    components: {
      'loading': Loading
    },
    mounted () {
      let self = this

      // setTimeout(function () {
      //   self.$refs.test.hide()
      // }, 2000)
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>
