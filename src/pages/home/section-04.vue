<template>
  <section ref="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="block-figures">
            <figure>
              <img class="" src="~@/assets/images/pages/home/section-04/im-01.jpg" alt=""/>
            </figure>
            <figure>
              <img class="" src="~@/assets/images/pages/home/section-04/im-02.jpg" alt=""/>
            </figure>
            <figure>
              <img class="" src="~@/assets/images/pages/home/section-04/im-03.jpg" alt=""/>
            </figure>
            <figure>
              <img class="" src="~@/assets/images/pages/home/section-04/im-04.jpg" alt=""/>
            </figure>
            <figure>
              <img class="" src="~@/assets/images/pages/home/section-04/im-05.jpg" alt=""/>
            </figure>
          </div>
        </div>
        <div class="col-xl-4 text-right">
          <h2>Work</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button class="btn btn-main">
            <span>See more</span>
          </button>
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
      self.$refs.section.onLeave = function () { console.log('section-04 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-04.scss" scoped></style>
