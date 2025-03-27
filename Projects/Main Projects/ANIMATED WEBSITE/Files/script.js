// var tl = gsap.timeline({
//    x:300
// });
// tl.to('.main1',{
//     width:500,
//     backgroundColor:'red',
//     duration:2,
    
// },'sameer')
// tl.to('.main2',{
//     width:500,
//     backgroundColor:'blue',
//     duration:2,
    
// },'sameer')

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.page1',
       
        start:'top top',
        end:'bottom top',
        scrub:true,
      
    }
})

tl.to('.can1f',{

    top:'117%',
    right:"65%",
    ease:'sine',
    snap:'.can1f',
} ,"sa")
tl.to('.ocut',{

    top:'117%', 
    left:'5%',
    right:'2000px'
   
},"sa")