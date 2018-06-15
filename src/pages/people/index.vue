<template>
  <layout>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <masonry class="grid">
              <div class="grid-sizer"></div>
              <div class="grid-item"></div>
              <div class="grid-item grid-item--width2"></div>
              <div class="grid-item"></div>
              <div class="grid-item"></div>
              <div class="grid-item"></div>
              <div class="grid-item"></div>
              <div class="grid-item"></div>
              <div class="grid-item grid-item--width2"></div>
              <div class="grid-item grid-item--width2"></div>
              <div class="grid-item"></div>
              <div class="grid-item grid-item--width2"></div>
              <div class="grid-item grid-item--width2"></div>
            </masonry>
            <!-- <svg viewBox="0 0 1300 1100">
              <image :href="require('@/assets/images/pages/people/im-01.jpg')" />
              <image :href="require('@/assets/images/pages/people/im-02.jpg')" x="470" y="0" width="370" height="349"/>
              <image :href="require('@/assets/images/pages/people/im-03.jpg')" x="870" y="145" width="370" height="204"/>
              <image :href="require('@/assets/images/pages/people/im-04.jpg')" x="0" y="450" width="442" height="558"/>
              <image :href="require('@/assets/images/pages/people/im-05.jpg')" x="470" y="380" width="853" height="349"/>
              <image :href="require('@/assets/images/pages/people/im-06.jpg')" x="470" y="760" width="370" height="349"/>
              <image :href="require('@/assets/images/pages/people/im-07.jpg')" x="870" y="760" width="370" height="204"/>
            </svg> -->
          </div>
        </div>
      </div>
    </section>

    <pagination class="pagination" :size="5"></pagination>
  </layout>
</template>

<script>
  import Masonry from '@/libraries/masonry'

  import Layout from '@/layouts/default/index'

  import Pagination from '@/components/pagination'

  export default {
    components: {
      'masonry': Masonry,
      'layout': Layout,
      'pagination': Pagination
    },
    mounted () {

    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/people/index.scss" scoped></style>
