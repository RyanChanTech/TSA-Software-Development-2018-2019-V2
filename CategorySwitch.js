function CategorySwitch(x,y,w,h,t,ts){
  this.switchedOn = false;

  this.update = function(){
    if(!this.switchedOn){
      fill(255);
    }else{
      fill(0,128,128);
    }
    rect(x,y,w,h);
    textSize(ts);
    fill(0);
    text(t,x+3,y+h-10);
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed&&mouseX<300&&mouseY<300&&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
