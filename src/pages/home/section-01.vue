<template>
  <section ref="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 mx-auto">
          <h1>We <span>are Focus</span> Asia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
        </div>
      </div>
    </div>
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
      self.$refs.section.onLeave = function () { console.log('section-01 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-01.scss" scoped></style>
