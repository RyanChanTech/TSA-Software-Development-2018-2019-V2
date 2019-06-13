function Movable(startX,startY,w,h,t,ts,xOffset=5,onColor=[165,230,250]){
  this.x=startX;
  this.y=startY;
  this.width=w;
  this.height=h;
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
      this.x=mouseX-this.width/2;
      this.y=mouseY-this.height/2;
      this.clicked = true;
    }else{
      this.clicked = false;
    }
  }

  this.touching = function(otherMovable){
    var centerX=this.width/2+this.x;
    var centerY=this.height/2+this.y;
    //ellipse(centerX,centerY,5,5);
    return centerX<otherMovable.x+otherMovable.width && centerX>otherMovable.x &&
          centerY<otherMovable.y+otherMovable.height && centerY>otherMovable.y;
  }
}
