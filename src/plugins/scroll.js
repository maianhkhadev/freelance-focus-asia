import { TweenLite, Power1 } from 'gsap/all'

const scroll = {
  init: function () {
    let sections = document.querySelectorAll('section')

    sections.forEach(function(section) {
      TweenLite.set(section, { y: '0%', visibility: 'hidden' })
    })

    let firstSection = document.querySelector('section:first-child')
    firstSection.classList.add('active')
    TweenLite.set(firstSection, { visibility: 'visible' })

    window.scrollable = true

    window.addEventListener('mousewheel', function (e) {

      let section = e.target.closest('section')

      if(section === null || window.scrollable === false) {
        return false
      }

      window.scrollable = false

      setTimeout(function () {
        window.scrollable = true
      }, 750)

      if(e.detail > 0 || e.wheelDelta < 0) {

        let activeSection = document.querySelector('section.active')

        if(section.nextElementSibling === null || section.nextElementSibling === activeSection) {
          return false
        }

        if(section.nextElementSibling.tagName !== 'SECTION') {
          return false
        }

        TweenLite.set(section.nextElementSibling, { y: '100%', visibility: 'visible', zIndex: '100' })
        TweenLite.to(section.nextElementSibling, 0.5, { y: '0%', ease: Power1.easeInOut })
        TweenLite.to(section, 0.5, { y: '-100%', ease: Power1.easeInOut })
        TweenLite.set(section, { delay: 0.5, y: '0%', visibility: 'hidden', zIndex: '-1' })

        section.nextElementSibling.classList.add('active')
        section.classList.remove('active')

        if (section.nextElementSibling.onEnter !== undefined)
          section.nextElementSibling.onEnter('DOWN')

        if (section.onLeave !== undefined)
          section.onLeave()
      }
      else {

        let activeSection = document.querySelector('section.active')

        if(section.previousElementSibling === null || section.previousElementSibling === activeSection) {
          return false
        }

        if(section.previousElementSibling.tagName !== 'SECTION') {
          return false
        }

        TweenLite.set(section.previousElementSibling, { y: '-100%', visibility: 'visible', zIndex: '100' })
        TweenLite.to(section.previousElementSibling, 0.5, { y: '0%', ease: Power1.easeInOut })
        TweenLite.to(section, 0.5, { y: '100%', ease: Power1.easeInOut })
        TweenLite.set(section, { delay: 0.5, y: '0%', visibility: 'hidden', zIndex: '-1' })

        section.previousElementSibling.classList.add('active')
        section.classList.remove('active')

        if (section.previousElementSibling.onEnter !== undefined)
          section.previousElementSibling.onEnter('UP')

        if (section.onLeave !== undefined)
          section.onLeave()
      }

      return false
    })
  }
}

export default scroll
