'use strict'

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if(typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');

     const img = document.createElement("img");
     img.src = "img/logo.png"

     img.addEventListener("load", () => {
      //  ctx.drawImage(img, 0 ,0);  座標0,0のところに画像を貼り付ける
      //  ctx.drawImage(img, 0 ,0,40,40); (img x,y,width,height) 
      // const pattern = ctx.createPattern(img,"repeat"); repeatで画面いっぱいに画像を表示させる、repeat-xでx座標にrepeat-yでy座標にめいっぱい画像を表示させるno-repatでrepeatさせない
      const pattern = ctx.createPattern(img,"repeat-x");
      ctx.fillStyle = pattern;
      ctx.fillRect(0,0,canvas.width,canvas.height);
     });
  }
  draw();
}