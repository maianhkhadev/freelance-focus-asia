<template>
  <section ref="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="col-xl-6">
          <figure>
            <img class="w-100" src="~@/assets/images/pages/home/section-02/video-thumbnail.jpg" alt=""/>
          </figure>
        </div>
      </div>
    </div>

    <div class="deco-01"></div>
  </section>
</template>

<script>
  import { EventBus } from '@/plugins/event-bus.js'

  export default {
    mounted () {
      let self = this

      self.$refs.section.onEnter = function (direction) {

        if(direction === 'UP') {
          EventBus.$emit('prev-section', self.$refs.section)
        }

        if(direction === 'DOWN') {
          EventBus.$emit('next-section', self.$refs.section)
        }
      }
      self.$refs.section.onLeave = function () { console.log('section-02 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-02.scss" scoped></style>
