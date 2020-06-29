new p5();
let canvas;
let vid;
let but;
let w;
let h;
function setup(){
     h=(windowWidth/4)*3;
     canvas=createCanvas(windowWidth, h);
     canvas.parent("canvas");
     background(0);
     vid=createVideo("https://res.cloudinary.com/dogev63ym/video/upload/v1593404550/index_cmqrpm.mp4");
     vid.play();
     vid.hide();
     pause=createButton("Pause");
     pause.mousePressed(function(){
         vid.pause();           
     })

     play=createButton("Play");
     play.mousePressed(function(){
         vid.play();           
     })

     screenshot=createButton("Screenshot");
     screenshot.mousePressed(function(){
         save("kaluSemina.png");         
     })

     fullscreen=createButton("Fullscreen");
     fullscreen.mousePressed(function() {
               console.log("hiii");
               h=windowHeight;
               canvas=createCanvas(windowWidth, h);
     })
     
}
function draw(){
            img=image(vid,0,0,width,height);
            
            
 }