//Switch(x Position, y Position, width, height, categoryBoundary=[x1,y1,x2,y2], text, text size, x Offset (OPTIONAL),color=[r,g,b] (OPTIONAL))
//Regarding categoryBoundary: All switches within this boundary will be treated as a category, i.e. when one switch in the category is selected, the others within the same category will be deselected, but all switches outside of the categoryBoundary will be unaffected
function CategorySwitch(x,y,w,h,categoryBoundary,t,ts,textOffset=5,onColor=[165,230,250]){
  this.switchedOn = false;

  this.update = function(){
    if(!this.switchedOn){
      fill(255);
    }else{
      fill(onColor[0],onColor[1],onColor[2]);
    }
    noStroke();
    rect(x,y,w,h,10);
    stroke(0);
    textSize(ts);
    fill(0);
    text(t,x+textOffset,y+h-12);
    strokeWeight(1);
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed
      &&mouseX>categoryBoundary[0]&&mouseY>categoryBoundary[1]&&mouseX<categoryBoundary[2]&&mouseY<categoryBoundary[3]
      &&(mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
