new p5();
let canvas;
let video;
function setup(){
     canvas=createCanvas(windowWidth, windowWidth/4*3);
     canvas.parent("canvas");
     background(0);
     video=createVideo("https://www.youtube.com/embed/uMxVx2DLmq4");
     video.play();
     video.hide();
}
function draw(){
      image(video,0,0,width,height);
}