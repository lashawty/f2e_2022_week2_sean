
//流動背景動畫
const bg = function () {
  gsap.to(".letter", {
    x: '100',
    y:'50',
    xPercent: "-50", 
    yPercent: "20",
    rotate: '180deg',
    scale:'.1',
    ease: "none",
    duration: 10,
    repeat: -1,
    yoyo: true,
  })
  gsap.to(".flow-logo", {
    position: 'absolute',
    // top: '10',
    xPercent: "100", 
    scale:'2',
    rotate: '360deg',
    ease: "none",
    duration: 10,
    repeat: -1,
    yoyo: true,
  });
}
  
bg()