var bg = document.querySelector("#bg");

var top5 = document.querySelector("#top5");
var top4 = document.querySelector("#top4");
var top3 = document.querySelector("#top3");
var top2 = document.querySelector("#top2");
var top1 = document.querySelector("#top1");

var cloud8 = document.querySelector("#cloud8");
var cloud7 = document.querySelector("#cloud7");
var cloud6 = document.querySelector("#cloud6");
var cloud5 = document.querySelector("#cloud5");
var cloud4 = document.querySelector("#cloud4");
var cloud3 = document.querySelector("#cloud3");
var cloud2 = document.querySelector("#cloud2");

var clouds = document.querySelector(".clouds");

var btm4 = document.querySelector("#btm4");
var btm3 = document.querySelector("#btm3");
var btm2 = document.querySelector("#btm2");
var btm1 = document.querySelector("#btm1");
var sun = document.querySelector("#sun");

var steps5 = document.querySelector("#step5");
var steps4 = document.querySelector("#step4");
var steps3 = document.querySelector("#step3");
var steps2 = document.querySelector("#step2");
var steps1 = document.querySelector("#step1");
var bg1 = document.querySelector("#bg1");

function loadFirst() {
  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    // cloud8.style.top = value * 0.25 + "px";
    // cloud7.style.top = value * 0.25 + "px";
    // cloud6.style.top = value * 0.25 + "px";

    // cloud3.style.top = value * 0.25 + "px";
    // cloud2.style.top = value * 0.25 + "px";
    // sun.style.top = value * 0.13 + "px";
    cloud8.style.transform = value * 0.25 + "px";
    cloud7.style.transform = value * 0.25 + "px";
    cloud6.style.transform = value * 0.25 + "px";
    cloud3.style.transform = value * 0.25 + "px";
    cloud2.style.transform = value * 0.25 + "px";
    // sun.style.top = value * 0.13 + "px"


 
  });
}
loadFirst();


var tl = gsap.timeline();
tl.to("#btm3", {
  scrollTrigger: {
      trigger: "#full-screen",
      start: "top 30%",
      scrub: 2,

  },
  y: "2%",
  stagger:.2,
  duration: 2,
  ease: Expo.easeInOut,
});
tl.to("#btm2", {
  scrollTrigger: {
      trigger: "#full-screen",
      start: "top 30%",
      scrub: 2,

  },
  y: "2%",
  stagger:.2,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to("#btm1", {
  scrollTrigger: {
      trigger: "#full-screen",
      start: "top 30%",
      scrub: 2,

  },
  y: "2%",
  stagger:.2,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to("#step1", {
  scrollTrigger: {
    trigger: "#full-screen1",
    start: "top top",
    scrub: 3,

  },
  y: "5%",
  stagger:.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to("#step3", {
  scrollTrigger: {
    trigger: "#full-screen1",
    start: "top top",
    scrub: 3,
   
  },
  y: "5%",
  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});
tl.to("#gear1", {
  scrollTrigger: {
    trigger: "#gear",
    start: "top top",
    scrub: 3,
  
  },
  rotate: "365deg",
  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to("#gear2", {
  scrollTrigger: {
    trigger: "#gear",
    start: "top top",
    scrub: 2,
 
  },
  rotate: "-365deg",
  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to("#bubbles", {
  scrollTrigger: {
    trigger: "#fs",
    start: "top top",
    scrub: 2,

  },
  y: "-10%",
  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.from(".a", {
  scrollTrigger: {
    trigger: "#fs",
    start: "top top",
    scrub: 2,

  },
  opacity: 0,
  scale: 1,

  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to(".a", {
  scrollTrigger: {
    trigger: "#fs",
    start: "top top",
    scrub: 2,

  },

  scale: 2,
  x: "19%",
  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.from(".b", {
  scrollTrigger: {
    trigger: "#fs",
    start: "top top",
    scrub: 2,

  },
  opacity: 0,
  scale: 1,

  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.to(".b", {
  scrollTrigger: {
    trigger: "#fs",
    start: "top top",
    scrub: 2,

  },

  scale: 2,
  x: "-19%",
  stagger: 0.4,
  duration: 2,
  ease: Expo.easeInOut,
});

tl.from(".tm", {
  scrollTrigger: {
    trigger: "#parallax-des",
    start: "top top",
    scrub: 3,
  },
  opacity: 0,

  stagger: 0.4,
  duration: 3,
  ease: Expo.easeInOut,
});
tl.to(".tm", {
  scrollTrigger: {
    trigger: "#parallax-des",

    scrub: 3,
  },
  opacity: 1,

  y: "-10%",
  stagger: 0.4,
  duration: 3,
  ease: Expo.easeInOut,
});
