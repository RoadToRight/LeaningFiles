
gsap.from('.banner-text', {

    transform: 'translateX(-400px)',
    duration: 1,
    opacity: 0,
    delay: 0.5,

    ease: 'sine',

})

let menu = document.querySelector('.menu');
let icon = document.querySelector('.icon');

menu.style.maxHeight = '0px';


icon.addEventListener('click', function () {

    if (menu.style.maxHeight == '0px') {
        menu.style.maxHeight = '700px';

    } else {
        menu.style.maxHeight = '0px';

    }

});

  
var tl =gsap.timeline({
    scrollTrigger:{
        trigger:'.page-2',
        scrub:5,
        pin:true,
        start:'50% 50%',
        end:'100% 50%',
        // markers:true,
        

    },
});

tl.to('.text2',{


    width:'80%',

},'a')

tl.to('.text4',{

 
    width:'80%',

},'a')
tl.to('.blob',{


    width:'80%',

},'a')
