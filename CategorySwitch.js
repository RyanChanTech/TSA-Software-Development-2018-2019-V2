function CategorySwitch(x,y,w,h,t,ts,xOffset=5){
  this.switchedOn = false;

  this.update = function(){
    if(!this.switchedOn){
      fill(255);
    }else{
      fill(165,230,250);
    }
    noStroke();
    rect(x,y,w,h,10);
    stroke(0);
    textSize(ts);
    fill(0);
    text(t,x+xOffset,y+h-10);
    strokeWeight(1);
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed&&mouseX<300&&mouseY<350&&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
