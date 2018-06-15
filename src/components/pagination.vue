<template>
  <div ref="block" class="block">
    <div>
      0
      <span class="numbers">
        <template v-for="n in 5">
          <span v-bind:key="n" class="number">{{ n }}</span>
        </template>
      </span>
      / 0{{ size }}
    </div>

  </div>
</template>

<script>
  import { TweenLite, TimelineLite, Power1 } from 'gsap/all'
  import { EventBus } from '@/plugins/event-bus.js'

  export default {
    data () {
      return {
        numbers: []
      }
    },
    props: {
      size: {
        default: 0
      }
    },
    methods: {
      nextSection: function (section) {
        let self = this

        let current = null
        let next = null

        let spans = self.$refs.block.querySelectorAll('.number')
        spans.forEach(function (span) {
          if (span.classList.contains('active') === true) {
            current = span
            next = span.nextElementSibling === null ? spans[0] : span.nextElementSibling
          }
        })

        next.classList.add('active')
        current.classList.remove('active')
        TweenLite.set(next, { top: '100%' })
        TweenLite.to(next, 0.5, { top: '0%', ease: Power1.easeInOut })
        TweenLite.to(current, 0.5, { top: '-100%', ease: Power1.easeInOut })
      }
    },
    mounted () {
      let self = this

      let spans = self.$refs.block.querySelectorAll('.number')
      spans.forEach(function (span) {
        TweenLite.set(span, { top: '-100%' })
      })

      let span = spans[0]
      span.classList.add('active')
      TweenLite.set(span, { top: '0%' })

      EventBus.$on('next-section', (sectionClassName) => {
        self.nextSection()
      })
    }
  }
</script>

<style lang="scss" src="@/assets/scss/components/pagination.scss" scoped></style>
