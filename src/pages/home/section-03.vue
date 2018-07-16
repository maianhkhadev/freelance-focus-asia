<template>
  <section ref="section">
    <div class="container">
      <div class="section-header">
        <div class="row">
          <div class="col-xl-6 mx-auto">
            <h2>Our Members</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut </p>
            <button class="btn btn-main">
              <span>Explore</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8 mx-auto">
          <img class="w-100" src="~@/assets/images/pages/home/section-03/im-01.png" alt=""/>
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
      self.$refs.section.onLeave = function () { console.log('section-03 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-03.scss" scoped></style>
