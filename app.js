new p5();
let canvas;
let vid;
let but;
function setup(){
     canvas=createCanvas(windowWidth, windowWidth/4*3);
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

 
     
}
function draw(){
            img=image(vid,0,0,width,height);
            
            
 }

 function mouseClicked() {
       console.log("hiii")
      let fs = fullscreen();
      fullscreen(!fs);

      return false;
    }