<template>
  <div class="projects">
    <template v-for="project in projects">
      <section class="project" v-bind:key="project.id" v-bind:style="{ 'background-image': `url(${project.thumbnail.src})` }">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="name">{{ project.name }}</div>
              <div class="content">{{ project.content }}</div>
              <router-link class="btn btn-blue" :to="{ name: 'Project', params: { id: 123 }}">Explore</router-link>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
  import Scroll from '@/plugins/scroll'

  export default {
    data () {
      return {
        projects: [
          {
            id: 1,
            name: 'Project 1',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            thumbnail: {
              src: 'https://i.pinimg.com/originals/24/4d/fd/244dfd15815e145634514529e4573c1e.jpg',
              alt: ''
            }
          }, {
            id: 2,
            name: 'Project 1',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            thumbnail: {
              src: 'https://i.pinimg.com/originals/24/4d/fd/244dfd15815e145634514529e4573c1e.jpg',
              alt: ''
            }
          }, {
            id: 3,
            name: 'Project 1',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            thumbnail: {
              src: 'https://i.pinimg.com/originals/24/4d/fd/244dfd15815e145634514529e4573c1e.jpg',
              alt: ''
            }
          }
        ]
      }
    },
    components: {

    },
    mounted () {
      let self = this

      let section = document.querySelector('section')
      section.classList.add('be-seen-first')

      Scroll.init()
    }
  }
</script>

<style lang="scss" src="@/assets/scss/pages/projects/index.scss" scoped></style>
