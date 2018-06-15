<template>
  <section ref="section">

  </section>
</template>

<script>
  import { EventBus } from '@/plugins/event-bus.js'

  export default {
    mounted () {
      let self = this

      self.$refs.section.onEnter = function () {
        EventBus.$emit('next-section', 'section-05')
      }
      self.$refs.section.onLeave = function () { console.log('section-05 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-05.scss" scoped></style>
