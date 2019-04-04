var pressed = true;
function keyPressed(){
  pressed=true;
}

function TextBox(x,y,w,h,ts){
  this.switchedOn = false;
  this.keyOff = false;
  this.data = "";

  this.update = function(){
    stroke(0);
    if(this.switchedOn){
      fill(150);
    }else{
      fill(255);
    }

    if(this.switchedOn&&pressed){
      if(keyCode==BACKSPACE){
        this.data=this.data.substring(0,this.data.length-1);
        pressed=false;
      }else if(key.charCodeAt(0)!=16){
        this.data+=key;
        pressed=false;
      }
    }

    rect(x,y,w,h);
    textSize(ts);
    fill(0);
    text(this.data,x+3,y+h-10);
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed&&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
