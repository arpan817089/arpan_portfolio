 var cursor = document.querySelector (".movable_point_cursor");

// Cursor Making

document.addEventListener("mousemove", function (pointer) {
    cursor.style.left = pointer.x + "px";
    cursor.style.top = pointer.y + "px";
})
// For Making Navbar Background Color black after some scrolling
gsap.to("#navbar",{
    backgroundColor: "rgb(6, 16, 21)",
    duration: 0.5,
    height: "10%",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -20%",
        end:"top -21%",
        scrub: 2  // For Animate Smoothly like transition property
    }
});


// For second page coming by animation


gsap.to(".container_vertical",{
    backgroundImage: "linear-gradient(rgb(31, 18, 46), black, rgb(58, 18, 74))",
    duration: 0.5,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -50%",
        end:"top -80%",
        scrub: 2
    }
})


gsap.to(".projects",{
    background: "black",
    duration: 0.5,
    scrollTrigger:{
        trigger:".container_vertical",
        scroller:"body",
        start:"top -150%",
        end:"top -200%",
        scrub: 2
    }
})

gsap.to(".card_container",{
    background: "black",
    duration: 0.5,
    scrollTrigger:{
        trigger:".container_vertical",
        scroller:"body",
        start:"top -150%",
        end:"top -200%",
        scrub: 2
    }
})

