<template>
  <section ref="section">
    <div class="container">
      <div class="section-header">
        <div class="row">
          <div class="col-xl-6 mx-auto">
            <h2>Let's talk</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <div class="section-content">
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Send To">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Title">
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="3" placeholder="Content"></textarea>
                </div>
                <button type="submit" class="btn btn-main">
                  <span>Send</span>
                </button>
              </form>
            </div>
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
      self.$refs.section.onLeave = function () { console.log('section-07 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-07.scss" scoped></style>
