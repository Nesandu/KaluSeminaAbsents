new p5();
let canvas;
let video;
function setup(){
     canvas=createCanvas(windowWidth, windowWidth/4*3);
     canvas.parent("canvas");
     background(0);
     video=createImage("https://www.google.com/search?q=image&sxsrf=ALeKk01ZKJixL3nQUWLkrOCRz_wORNkaDQ:1593402977448&tbm=isch&source=iu&ictx=1&fir=3z9LIUs4ChzUOM%252ChrsXnpNgc3ZwMM%252C_&vet=1&usg=AI4_-kTte39BqlR0dNxrY4KNIZ22wyiq5A&sa=X&ved=2ahUKEwjHqdHTkKbqAhU87HMBHQvEDOYQ9QEwAnoECAoQIA#imgrc=3z9LIUs4ChzUOM");
}
function draw(){
      image(video,0,0,width,height);
}