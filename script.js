gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
	smooth: 1.5,
    effects: true
});

gsap.from('.hero', {
    opacity: 0,
    duration: 1
})

gsap.from('picture:nth-child(2)', {
    y: 200,
    duration: 1
})

gsap.from('picture:nth-child(1', {
    y: -200,
    duration: 1
})


gsap.from('.card', {
    opacity: 0,
    filter: "blur(20px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        start: '0% 70%',
        scrub: true,
        end: '100% 70%'
    }
})

gsap.from('.section-obrigado ul li', {
    opacity: 0,
    x: 40,
    stagger: .1,
    scrollTrigger: {
        trigger: '.section-obrigado ul',
        start: '0% 80%',
        end: '100% 50%',
        scrub: 2
    }  
})

gsap.from('footer', {
    y: -400,
    immediateRender: false,
    scrollTrigger: {
        trigger: 'footer',
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})


const split = SplitText.create(".split", { 
    type: "lines, words, chars",
    mask: "lines"
});

gsap.from(split.chars, {
  duration: .3, 
  y: 40,       
  stagger: .05
});