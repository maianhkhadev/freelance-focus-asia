<template>
  <div ref="loading" class="loading">
  </div>
</template>

<script>
  export default {
    methods: {
      hide: function () {
        let self = this

        self.$refs.loading.classList.add('hidden')
      }
    }
  }
</script>

<style lang="scss">
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    transition: all 0.5s ease-in;
    // visibility: visible;
  }
  .hidden {
    top: -100vw;
    // visibility: hidden;
  }
</style>
