const $canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");
// 設定線條的相關數值
ctx.lineWidth = 4;
ctx.lineCap = "round";

// 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
let isPainting = false;

// 取得滑鼠 / 手指在畫布上的位置
function getPaintPosition(e) {
  const canvasSize = $canvas.getBoundingClientRect();

  if (e.type === "mousemove") {
    return {
      x: e.clientX - canvasSize.left,
      y: e.clientY - canvasSize.top,
    };
  } else {
    return {
      x: e.touches[0].clientX - canvasSize.left,
      y: e.touches[0].clientY - canvasSize.top,
    };
  }
}

// 開始繪圖時，將狀態開啟
function startPosition(e) {
  e.preventDefault();
  isPainting = true;
}

// 結束繪圖時，將狀態關閉，並產生新路徑
function finishedPosition() {
  isPainting = false;
  ctx.beginPath();
}

// 繪圖過程
function draw(e) {
  // 滑鼠移動過程中，若非繪圖狀態，則跳出
  if (!isPainting) return;

  // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
  const paintPosition = getPaintPosition(e);

  // 移動滑鼠位置並產生圖案
  ctx.lineTo(paintPosition.x, paintPosition.y);
  ctx.stroke();
}

// 重新設定畫布
function reset() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

// event listener 電腦板
$canvas.addEventListener("mousedown", startPosition);
$canvas.addEventListener("mouseup", finishedPosition);
$canvas.addEventListener("mouseleave", finishedPosition);
$canvas.addEventListener("mousemove", draw);

// event listener 手機板
$canvas.addEventListener("touchstart", startPosition);
$canvas.addEventListener("touchend", finishedPosition);
$canvas.addEventListener("touchcancel", finishedPosition);
$canvas.addEventListener("touchmove", draw);

clearBtn.addEventListener("click", reset);

// 產生圖片
// 當使用者簽好名字，接著需要保存圖片，以便後續使用。
// canvas 中有一段函式可以幫助我們完成此步驟： `toDataURL()`
// 此函式接收一組設定圖片格式的參數，並將 canvas 中的圖像轉為 base64 資料，若將這筆資料放在 img 的 src 中，可以渲染出我們所繪製的圖片
// 若想更了解 base64 ，可以參考：[相關介紹](https://zh.wikipedia.org/zh-tw/Base64)
// 現在配合剛才的程式碼，將 base64 的值放入 img 的 src

const showImage = document.querySelector(".show-img");

saveBtn.addEventListener("click", saveImage);

//儲存圖片
//有了圖片資料，現在可以透過 localStorage 將資料保存下來
//可為圖片取名字，不輸入則為image

function saveImage() {
  const newImg = canvas.toDataURL("image/png");
  showImage.src = newImg;
  localStorage.setItem("image", newImg)
}