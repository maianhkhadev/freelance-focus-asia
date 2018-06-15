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
        EventBus.$emit('next-section', 'section-04')
      }
      self.$refs.section.onLeave = function () { console.log('section-04 leave') }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/home/section-04.scss" scoped></style>
