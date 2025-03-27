        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.main',
                scrub:1,
                start:'12% 12%',
                pin:true,
                // markers:true,
            },
        });

tl.to('.text2',{

  
    width:'80%',

},'a')
tl.to('.text4',{

  
    width:'80%',

},'a')