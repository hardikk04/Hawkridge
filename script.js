const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

gsap.to(".loder", {
  top: "-100vh",
  duration: 1,
  delay: 1,
  ease: "power3.inOut",
});
