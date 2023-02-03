const afterScroll = e => { document.body.style.cssText += `--scrollTop: ${this.scrollY}px` }
const scroll = () => { window.addEventListener('scroll', afterScroll) }

scroll()

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
})