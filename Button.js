var mouseRel=true;
function mouseReleased(){
  mouseRel=true;
}

function Button(x,y,w,h,t,ts,xOffset=5){
  this.clicked =false;
  this.text=t;

  this.update = function(){
    if(this.clicked){
      fill(165,230,250,120);
    }else{
      fill(30,30,30,100);
    }
    noStroke();
    rect(x,y,w,h,10);
    fill(0);
    textSize(ts);
    stroke(0);
    text(this.text,x+xOffset,y+h-10);

    if(mouseIsPressed && mouseX>x && mouseX<(x+w) && mouseY>y && mouseY<y+h && mouseRel){
      this.clicked = true;
      mouseRel = false;
    }else{
      this.clicked = false;
    }
  }
}
