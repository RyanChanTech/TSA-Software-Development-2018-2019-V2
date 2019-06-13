function Movable(startX,startY,w,h,t,ts,xOffset=5,onColor=[165,230,250]){
  this.x=startX;
  this.y=startY;
  this.clicked =false;
  this.text=t;

  this.update = function(){
    if(this.clicked){
      fill(onColor[0],onColor[1],onColor[2],120);
    }else{
      fill(30,30,30,100);
    }
    noStroke();
    rect(this.x,this.y,w,h,10);
    fill(0);
    textSize(ts);
    stroke(0);
    text(this.text,this.x+xOffset,this.y+h-10);

    if(mouseIsPressed && mouseX>this.x && mouseX<(this.x+w) && mouseY>this.y && mouseY<this.y+h){
      this.x=mouseX-50;
      this.y=mouseY-20;
      this.clicked = true;
    }else{
      this.clicked = false;
    }
  }
}
