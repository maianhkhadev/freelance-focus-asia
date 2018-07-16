<template>
  <section ref="section">
    <div class="container">
      <div class="section-header">
        <div class="row">
          <div class="col-xl-6 mx-auto">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4">
          <div class="block-service">
            <img class="img-fluid" src="~@/assets/images/pages/home/section-05/im-01.png" alt=""/>
            <h4>digital brand communications</h4>
            <ul>
              <li>strategic planning</li>
              <li>creative concept</li>
              <li>content strategy & management</li>
              <li>social campaign</li>
              <li>digital asset development</li>
              <li>interactive design</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="block-service">
            <img class="img-fluid" src="~@/assets/images/pages/home/section-05/im-02.png" alt=""/>
            <h4>digital brand performance</h4>
            <ul>
              <li>digital experiential</li>
              <li>media planning & buying</li>
              <li>search</li>
              <li>e-commerce</li>
              <li>affiliate</li>
              <li>programmatic</li>
            </ul>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="block-service">
            <img class="img-fluid" src="~@/assets/images/pages/home/section-05/im-03.png" alt=""/>
            <h4>digital CRM</h4>
            <ul>
              <li>experience planning</li>
              <li>CRM & loyalty program</li>
              <li>retention</li>
              <li>lead management</li>
              <li>lifecycle managment</li>
              <li>referral & advocacy</li>
            </ul>
          </div>
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
      self.$refs.section.onLeave = function () { console.log('section-05 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-05.scss" scoped></style>
