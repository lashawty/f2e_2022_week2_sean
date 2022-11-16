
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
    xPercent: "100", 
    scale:'2',
    rotate: '360deg',
    ease: "none",
    duration: 10,
    repeat: -1,
    yoyo: true,
  });
  gsap.to('.your-pic', {
    position: 'absolute',
    ease: 'none',
    opacity:1.9,
    duration:1,
    repeat:-1,
    yoyo: true,
  })
  gsap.to('.your-file', {
    position: 'absolute',
    ease: 'none',
    opacity:1.9,
    duration:1,
    repeat:-1,
    yoyo: true,
  })
}

//第一步驟，簽名區塊開啟
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

  //第二步驟 選擇PDF檔案
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

//第二步驟，出現簽名區塊
signPaper.secondStep = () => {
  $('.top-btn').addClass('show-new-sign')
  $('.upload .process').addClass('second-step')
  signPaper.showNewSign()
}

signPaper.showNewSign = () => {
  $('.new-sign').addClass('active')
  gsap.to('.new-sign',{
    opacity: 1,
    duration: .5,
  })

  //第四步驟 顯示pdf
  setTimeout(() => {
    Observer.create({
      target: '.next-step',
      type: "pointer",
      onClick: () => signPaper.showPDF()
    });
  }, 100);
}

//關閉視窗
signPaper.exitNewSign = () => {
  
  gsap.to('.new-sign',{
    opacity: 0,
    duration: .5,
  })
  setTimeout(() => {
    $('.new-sign').removeClass('active')
  }, 500);
  
}

//上傳圖片樣式


bgFlow()
signPaper()