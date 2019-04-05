function displayDecorations(){
  noStroke();
  textSize(50);
  fill(0);
  text("TSA Question Generator",320,70);
  fill(30,30,30,100);
  rect(0,0,300,300);
  fill(100,100,100,100);
  rect(0,300,300,1000);
  fill(255,255,255);
  textSize(40);
  text("Categories",10,50);
  text("Generators",10,350);
  if(mathSwitch.switchedOn){
    fill(100,150,200,100);
  }else if(physicsSwitch.switchedOn){
    fill(100,200,100,100);
  }else if(chemistrySwitch.switchedOn){
    fill(200,100,200,100);
  }else{
    fill(100,100,100,100);
  }
  rect(1350,0,350,1200);
  stroke(0);
}
