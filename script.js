var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
        .to(".elem1",{
            y:'0',
            duration: 1,
            delay: -.5,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .from("#footer",{
            y:'-10',
            opacity: 0,
            duration: 1,
            delay: -.5,
            ease: Expo.easeInOut
        })
}



function mousesize(){
    var xscale = 1;
    var yscale = 1;
    //previous scale
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circlemousefolower(xscale, yscale);
        setTimeout(function(){
            timeout = document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`; 
        }, 100);
    });
}

function circlemousefolower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}



mousesize();
circlemousefolower();
firstPageAnim();

  