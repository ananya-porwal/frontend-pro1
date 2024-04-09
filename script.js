var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  blur.style.left = dets.x - 90 +"px"
  blur.style.top = dets.y - 90 +"px"

})

var h5all = document.querySelectorAll("#nav h5")
h5all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

h5all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor: "black",
    duration:0.3,
    height:"60px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:" top -11%",
        scrub:1,
        
    }
})

//scroll trigger help to create animation based on scroll.
 
gsap.to("#main",{
    backgroundColor: "black",
    duration:0.2,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,  /*markers show in upper side of our page .we comment out markers whwn we complete our website*/
         start:"top -30%",
         end :"top -80%",
         scrub:2,
    }
})

gsap.from("#about img, #about-us",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
        }
    })

    gsap.from("#about img, #about-us",{
        y:50,
        opacity:0,
        duration:1,
        stagger:0.4,
        scrollTrigger:{
            trigger:"#about",
            scroller:"body",
            markers:true,
            start:"top 60%",
            end:"top 55%",
            scrub:3
            }
        })