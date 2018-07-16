<template>
  <div ref="dock" class="dock">
    <span class="letter">0</span>
    <span class="letter numbers">
      <template v-for="n in size">
        <span :key="n" class="number">{{ n }}</span>
      </template>
    </span>
    <span class="letter">-</span>
    <span class="letter">0</span>
    <span class="letter">{{ size }}</span>
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
      prevSection: function (section) {
        let self = this

        // COLOR
        if(section.dataset.dockClass !== undefined) {
          self.$refs.dock.classList.remove('dock-white')
          self.$refs.dock.classList.remove('dock-black')
          self.$refs.dock.classList.add(section.dataset.dockClass)
        }

        let current = null
        let next = null

        let spans = self.$refs.dock.querySelectorAll('.number')
        spans.forEach(function (span) {
          if (span.classList.contains('active') === true) {
            current = span
            next = span.previousElementSibling === null ? spans[0] : span.previousElementSibling
          }
        })

        next.classList.add('active')
        current.classList.remove('active')
        TweenLite.set(next, { top: '-100%' })
        TweenLite.to(next, 0.5, { top: '0%', ease: Power1.easeInOut })
        TweenLite.to(current, 0.5, { top: '100%', ease: Power1.easeInOut })
      },
      nextSection: function (section) {
        let self = this

        // COLOR
        if(section.dataset.dockClass !== undefined) {
          self.$refs.dock.classList.remove('dock-white')
          self.$refs.dock.classList.remove('dock-black')
          self.$refs.dock.classList.add(section.dataset.dockClass)
        }

        let current = null
        let next = null

        let spans = self.$refs.dock.querySelectorAll('.number')
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
      //
      let spans = self.$refs.dock.querySelectorAll('.number')
      spans.forEach(function (span) {
        TweenLite.set(span, { top: '-100%' })
      })

      let span = self.$refs.dock.querySelector('.number:first-child')
      span.classList.add('active')
      TweenLite.set(span, { top: '0%' })

      EventBus.$on('prev-section', (section) => {
        self.prevSection(section)
      })

      EventBus.$on('next-section', (section) => {
        self.nextSection(section)
      })
    }
  }
</script>

<style lang="scss" src="@/assets/scss/components/dock-section-name.scss" scoped></style>
