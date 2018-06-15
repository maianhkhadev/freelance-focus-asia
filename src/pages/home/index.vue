<template>
  <layout>
    <div class="sections">
      <section-01 class="section section-01"></section-01>

      <section-02 class="section section-02"></section-02>

      <section-03 class="section section-03"></section-03>

      <section-04 class="section section-04"></section-04>

      <section-05 class="section section-05"></section-05>
    </div>

    <pagination class="pagination" :size="5"></pagination>
  </layout>
</template>

<script>
  import Scroll from '@/plugins/scroll'

  import Layout from '@/layouts/default/index'
  import Section01 from '@/pages/home/section-01'
  import Section02 from '@/pages/home/section-02'
  import Section03 from '@/pages/home/section-03'
  import Section04 from '@/pages/home/section-04'
  import Section05 from '@/pages/home/section-05'

  import Pagination from '@/components/pagination'

  export default {
    components: {
      'layout': Layout,
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03,
      'section-04': Section04,
      'section-05': Section05,
      'pagination': Pagination
    },
    mounted () {
      let self = this
      
      let section = document.querySelector('section')
      section.classList.add('be-seen-first')

      Scroll.init()
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/index.scss" scoped></style>
