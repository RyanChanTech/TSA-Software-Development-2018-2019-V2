function Button(x,y,w,h,t,ts){
  this.clicked =false;
  this.text=t;

  this.update = function(){
    if(this.clicked){
      fill(150);
    }else{
      fill(255);
    }
    rect(x,y,w,h);
    fill(0);
    textSize(ts);
    text(this.text,x+3,y+h-5);

    if(mouseIsPressed && mouseX>x && mouseX<(x+w) && mouseY>y && mouseY<y+h){
      this.clicked = true;
    }else{
      this.clicked = false;
    }
  }
}
