<template>
  <layout>
    <div class="projects">

      <section class="project project-01 project-text-white" data-dock-class="dock-white">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1>popeyes</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              <button class="btn btn-main">
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="project project-02 project-text-black" data-dock-class="dock-black">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1>iqlac</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <button class="btn btn-main">
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="project project-03 project-text-black" data-dock-class="dock-black">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1>organist</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
              <button class="btn btn-main">
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="project project-04 project-text-white" data-dock-class="dock-white">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1>the glenlivet</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <button class="btn btn-main">
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="project project-05 project-text-black" data-dock-class="dock-black">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <h1>huggies</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <button class="btn btn-main">
                <span>Explore</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <dock-section-name ref="dock" class="dock-section-name" :size="5"></dock-section-name>
  </layout>
</template>

<script>
  import Layout from '@/layouts/full-screen/index'
  import DockSectionName from '@/components/dock-section-name'

  export default {
    data () {
      return {

      }
    },
    components: {
      'layout': Layout,
      'dock-section-name': DockSectionName
    },
    mounted () {
      let self = this

      let sections = document.querySelectorAll('section')
      sections.forEach(function(section) {

        section.onEnter = function (direction) {

          if(direction === 'UP') {
            self.$refs.dock.prevSection(section)
          }

          if(direction === 'DOWN') {
            self.$refs.dock.nextSection(section)
          }
        }

        section.onLeave = function () { console.log('section leave') }
      })
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/projects/index.scss" scoped></style>
