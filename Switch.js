//Switch(x Position, y Position, width, height, [x boundary point 1, y boundary point 1,x Boundary point 2, y boundary point 2] (OPTIONAL to change. set to [0,0,300,1080 by default]), text, text size, x Offset)
//Regarding categoryBoundary: All switches within this boundary will be treated as a category, i.e. when one switch in the category is selected, the others within the same category will be deselected, but all switches outside of the categoryBoundary will be unaffected
function Switch(x,y,w,h,categoryBoundary=[0,0,300,1080],t,ts,xOffset=5){
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
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed&&mouseX<300&&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
