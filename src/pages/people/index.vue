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
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script>
  import Masonry from '@/libraries/masonry'

  import Layout from '@/layouts/default/index'

  export default {
    components: {
      'masonry': Masonry,
      'layout': Layout
    },
    mounted () {

    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/people/index.scss" scoped></style>
