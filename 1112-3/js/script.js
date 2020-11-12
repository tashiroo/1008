'use strict'

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if(typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');

     const CANVAS_WIDTH = 600;
     const CANVAS_HEIGHT = 240;
     
     const dpr = window.devicePixelRatio || 1;
    //  ピクセルの取得
     canvas.width = CANVAS_WIDTH * dpr;
     canvas.height = CANVAS_HEIGHT * dpr;
    //上の2行で密度を上げる

     ctx.scale(dpr,dpr);
    //このコードで密度を上げた分拡大する

     canvas.style.width = CANVAS_WIDTH + "px";
     canvas.style.height = CANVAS_HEIGHT + "px";
    // ここで大きさを縮小する


ctx.font = "bold 48px Verdana";
ctx.strokeText("tokyo",100,100);
     
  }
  draw();
}