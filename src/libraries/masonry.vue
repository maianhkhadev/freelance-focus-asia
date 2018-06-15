<template>
  <div ref="masonry" class="test">
    <slot></slot>
  </div>
</template>

<script>
  import $ from 'jquery'

  if (process.browser) {
    let jQueryBridget = require('jquery-bridget/jquery-bridget')
    let Masonry = require('masonry-layout')
    $.bridget('masonry', Masonry, $)
  }

  export default {
    props: {
      options: {
        default: function () {
          return {

          }
        }
      }
    },
    mounted () {
      var self = this

      $(self.$refs.masonry).masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      })
    }
  }
</script>
