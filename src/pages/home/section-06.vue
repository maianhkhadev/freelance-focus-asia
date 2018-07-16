<template>
  <section ref="section">
    <div class="container">
      <div class="section-header">
        <div class="row">
          <div class="col-xl-6 mx-auto">
            <h2>Expertise Network</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 text-center align-self-center">
          <img class="img-fluid" src="~@/assets/images/pages/home/section-06/im-01.png" alt=""/>
        </div>
        <div class="col-xl-3 text-center align-self-center">
          <img class="img-fluid" src="~@/assets/images/pages/home/section-06/im-02.png" alt=""/>
        </div>
        <div class="col-xl-3 text-center align-self-center">
          <img class="img-fluid" src="~@/assets/images/pages/home/section-06/im-03.png" alt=""/>
        </div>
        <div class="col-xl-3 text-center align-self-center">
          <img class="img-fluid" src="~@/assets/images/pages/home/section-06/im-04.png" alt=""/>
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
      self.$refs.section.onLeave = function () { console.log('section-06 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-06.scss" scoped></style>
