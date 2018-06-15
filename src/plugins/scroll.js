import { TweenLite, Power1 } from 'gsap/all'

const scroll = {

  init: function () {
    let sections = document.querySelectorAll('section')

    sections.forEach(function(section) {
      TweenLite.set(section, { y: '0%', visibility: 'hidden' })
    })

    let element = document.querySelector('.be-seen-first')
    TweenLite.set(element, { visibility: 'visible' })

    window.scrollable = true

    window.addEventListener('mousewheel', function (e) {
      let section = e.target.closest('section')

      if (window.scrollable === false) {
        return false
      }

      window.scrollable = false

      setTimeout(function () {
        window.scrollable = true
      }, 750)

      if(e.detail > 0 || e.wheelDelta < 0) {

        if(section.nextElementSibling === null) {
          return false
        }

        TweenLite.set(section.nextElementSibling, { y: '100%', visibility: 'visible' })
        TweenLite.to(section.nextElementSibling, 0.5, { y: '0%', ease: Power1.easeInOut })
        TweenLite.to(section, 0.5, { y: '-100%', ease: Power1.easeInOut })
        TweenLite.set(section, { delay: 0.5, y: '0%', visibility: 'hidden' })

        if (section.nextElementSibling.onEnter !== undefined)
          section.nextElementSibling.onEnter()

        if (section.onLeave !== undefined)
          section.onLeave()
      }
      else {

        if(section.previousElementSibling === null) {
          return false
        }

        TweenLite.set(section.previousElementSibling, { y: '-100%', visibility: 'visible' })
        TweenLite.to(section.previousElementSibling, 0.5, { y: '0%', ease: Power1.easeInOut })
        TweenLite.to(section, 0.5, { y: '100%', ease: Power1.easeInOut })
        TweenLite.set(section, { delay: 0.5, y: '0%', visibility: 'hidden' })
        
        if (section.previousElementSibling.onEnter !== undefined)
          section.previousElementSibling.onEnter()

        if (section.onLeave !== undefined)
          section.onLeave()
      }

      return false
    })
  }
}

export default scroll
