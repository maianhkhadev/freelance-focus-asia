<template>
  <layout>
    <section-01></section-01>

    <section-02></section-02>
  </layout>
</template>

<script>
  import Layout from '@/layouts/default/index'
  import Section01 from '@/pages/home/section-01'
  import Section02 from '@/pages/home/section-02'

  export default {
    components: {
      'layout': Layout,
      'section-01': Section01,
      'section-02': Section02
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/index.scss" scoped></style>
