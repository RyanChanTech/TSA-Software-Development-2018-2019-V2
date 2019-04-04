var pressed = true;
function keyPressed(){
  pressed=true;
}

function TextBox(x,y,w,h,ts){
  this.switchedOn = false;
  this.keyOff = false;
  this.data = "";
  this.defaultMessage="Type Answer Here";

  this.update = function(){
    stroke(0);
    if(this.switchedOn){
      fill(165,230,250,120);
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
    if(this.data!=""){
      text(this.data,x+3,y+h-10);
    }else{
      noStroke();
      fill(150,150,150,120);
      text(this.defaultMessage,x+3,y+h-10);
      stroke(0);
      fill(0);
    }
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed&&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
