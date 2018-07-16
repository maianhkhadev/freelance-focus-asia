<template>
  <layout>
    <div class="sections">
      <section-01 class="section section-01"></section-01>

      <section-02 class="section section-02"></section-02>

      <section-03 class="section section-03"></section-03>

      <section-04 class="section section-04"></section-04>

      <section-05 class="section section-05"></section-05>

      <section-06 class="section section-06"></section-06>

      <section-07 class="section section-07"></section-07>
    </div>

    <dock-section-name ref="dock" class="dock-section-name" :size="7"></dock-section-name>
  </layout>
</template>

<script>
  import Layout from '@/layouts/full-screen/index'
  import Section01 from '@/pages/home/section-01'
  import Section02 from '@/pages/home/section-02'
  import Section03 from '@/pages/home/section-03'
  import Section04 from '@/pages/home/section-04'
  import Section05 from '@/pages/home/section-05'
  import Section06 from '@/pages/home/section-06'
  import Section07 from '@/pages/home/section-07'

  import DockSectionName from '@/components/dock-section-name'

  export default {
    components: {
      'layout': Layout,
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03,
      'section-04': Section04,
      'section-05': Section05,
      'section-06': Section06,
      'section-07': Section07,
      'dock-section-name': DockSectionName
    },
    mounted () {
      let self = this

    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/index.scss" scoped></style>
