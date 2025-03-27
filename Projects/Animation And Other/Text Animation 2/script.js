const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);


var tl = gsap.timeline({

    scrollTrigger:{
        trigger:'.main',
        pin:true,
        scrub:2,
        markers:true,
        start:'50% 50%',
        end:'100% 50%'


    }

})

tl.to('.top',{

    top:'-50%'

},'a')
tl.to('.bottom',{

    bottom:'-50%'

},'a')