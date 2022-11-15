
//流動背景動畫
const bgFlow = function () {
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

//簽名區塊開啟
const signPaper = () => {

  //開啟
  const $signBtn = gsap.utils.toArray(".sign-btn").forEach((element) => {
    Observer.create({
      target:  element,
      type: "pointer",
      onClick: () => signPaper.open()
    });
  })

  //關閉
  Observer.create({
    target: '.exit',
    type: "pointer",
    onClick: () => signPaper.close()
  });

  Observer.create({
    target: '.exit-sign',
    type: "pointer",
    onClick: () => signPaper.exitNewSign()
  });
  //第二步驟
  const $uploadBtn = gsap.utils.toArray(".upload-btn").forEach
  ((element) => {
    Observer.create({
      target: element,
      type: "pointer",
      onClick: () => signPaper.secondStep()
    });
  })

  
  
}

signPaper.open = () => {
  $('.upload').addClass('active')
  gsap.to(".upload", {
    opacity: 1,
    duration: .5,
    });
}
 
signPaper.close = () => {
  gsap.to(".upload", {
    opacity: 0,
    duration: .5,
    });
  setTimeout(() => {
    $('.upload').removeClass('active')
  }, 500);
  
}

//第三步驟，開啟簽名區塊
//等有show-new-sign才出現畫圖區塊

signPaper.secondStep = () => {
  $('.top-btn').addClass('show-new-sign')
  gsap.to('.top-btn',{
    text: '繪製新的簽名檔',
    duration: .5,
  })
  gsap.to('.bottom-btn',{
    text: '上傳現有簽名檔',
    duration: .5,
  })
  $('.upload .process').addClass('second-step')
  setTimeout(() => {
    signPaper.wait()
  }, 100);
}

//等待抓到class
signPaper.wait = () => {
  Observer.create({
    target: '.show-new-sign',
    type: "pointer",
    onClick: () => signPaper.showNewSign()
  });
}

signPaper.showNewSign = () => {
  $('.new-sign').addClass('active')
  gsap.to('.new-sign',{
    opacity: 1,
    duration: .5,
  })
  
}

signPaper.exitNewSign = () => {
  
  gsap.to('.new-sign',{
    opacity: 0,
    duration: .5,
  })
  setTimeout(() => {
    $('.new-sign').removeClass('active')
  }, 500);
  
}
bgFlow()
signPaper()