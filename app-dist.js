const bgFlow=function(){gsap.to(".letter",{x:"100",y:"50",xPercent:"-50",yPercent:"20",rotate:"180deg",scale:".1",ease:"none",duration:10,repeat:-1,yoyo:!0}),gsap.to(".flow-logo",{position:"absolute",xPercent:"100",scale:"2",rotate:"360deg",ease:"none",duration:10,repeat:-1,yoyo:!0})},signPaper=()=>{gsap.utils.toArray(".sign-btn").forEach((e=>{Observer.create({target:e,type:"pointer",onClick:()=>signPaper.open()})}));Observer.create({target:".exit",type:"pointer",onClick:()=>signPaper.close()}),Observer.create({target:".exit-sign",type:"pointer",onClick:()=>signPaper.exitNewSign()});gsap.utils.toArray(".upload-btn").forEach((e=>{Observer.create({target:e,type:"pointer",onClick:()=>signPaper.secondStep()})}))};signPaper.open=()=>{$(".upload").addClass("active"),gsap.to(".upload",{opacity:1,duration:.5})},signPaper.close=()=>{gsap.to(".upload",{opacity:0,duration:.5}),setTimeout((()=>{$(".upload").removeClass("active")}),500)},signPaper.secondStep=()=>{$(".top-btn").addClass("show-new-sign"),$(".upload .process").addClass("second-step"),signPaper.showNewSign()},signPaper.showNewSign=()=>{$(".new-sign").addClass("active"),gsap.to(".new-sign",{opacity:1,duration:.5}),setTimeout((()=>{Observer.create({target:".next-step",type:"pointer",onClick:()=>signPaper.showPDF()})}),100)},signPaper.exitNewSign=()=>{gsap.to(".new-sign",{opacity:0,duration:.5}),setTimeout((()=>{$(".new-sign").removeClass("active")}),500)},gsap.to(".letter",{x:"100",y:"50",xPercent:"-50",yPercent:"20",rotate:"180deg",scale:".1",ease:"none",duration:10,repeat:-1,yoyo:!0}),gsap.to(".flow-logo",{position:"absolute",xPercent:"100",scale:"2",rotate:"360deg",ease:"none",duration:10,repeat:-1,yoyo:!0}),signPaper();