<template>
  <div class="block">
    VI / EN
  </div>
</template>

<script>
  import i18n from '@/i18n'

  export default {
    methods: {
      selectLocate: function (name) {
        i18n.locale = name
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
