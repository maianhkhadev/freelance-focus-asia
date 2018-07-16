<template>
  <div>
    <header>
      <div class="container">
        <a class="nav-brand" href="#">
          <img class="" src="~@/assets/images/logo.png" alt=""/>
        </a>

        <div class="nav-icon">
          <span class="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </header>

    <main class="main">
      <slot></slot>
    </main>

    <footer></footer>

    <div class="modal modal-menu">
      <span></span>
      <span></span>
      <span></span>

      <div class="modal-content">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from '@/plugins/scroll'

  export default {
    mounted() {
      let self = this

      document.querySelector('.nav-icon').addEventListener('click', function() {

        let icon = document.querySelector('.nav-icon')
        icon.classList.toggle('show')

        let modal = document.querySelector('.modal-menu')
        modal.classList.toggle('show')
      })

      Scroll.init()
    }
  }
</script>

<style lang="scss" src="@/assets/scss/layouts/full-screen/index.scss" scoped></style>
