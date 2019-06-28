var nLButtons = [new Button(320,380,160,40,"A) ",30,xOffset=20),new Button(320,430,160,40,"B) ",30,xOffset=20),new Button(320,480,160,40,"C) ",30,xOffset=20)];
var nLAnswerButtonIndex = 0;

var nLNewQuestionButton = new Button(320,530,220,40,"New Question",30,xOffset=15);
var nLFeedback="";
var nLExplanation="";
var nLRandom=-1;
var nLQuestion="";
var nLTempExplanation="";

var nLGenerateQuestion = true;

function newtonsLaws(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  nLButtons[0].update();
  nLButtons[1].update();
  nLButtons[2].update();
  nLNewQuestionButton.update();

  if(nLGenerateQuestion){
    nLRandom=Math.floor(random(0,4));
    nLButtons[0].text= "A) ";
    nLButtons[1].text= "B) ";
    nLButtons[2].text= "C) ";
    if(nLRandom==0){
      nLGeneratePulleyAcceleration();
    }else if(nLRandom==1){
      nLGeneratePulleyTension();
    }else{
      nLGenerateSlideAcceleration();
    }
    nLGenerateQuestion=false;
  }

  if(nLNewQuestionButton.clicked){
    nLGenerateQuestion=true;
    nLExplanation="";
    nLFeedback="";
  }

  if(nLButtons[nLAnswerButtonIndex].clicked){
    nLFeedback="Correct!";
    addPoints(15);
    nLExplanation=nLTempExplanation;
  }else if(nLButtons[0].clicked||nLButtons[1].clicked||nLButtons[2].clicked){
    nLFeedback="Try again";
    nLExplanation=nLTempExplanation;
  }

  if(nLRandom==0||nLRandom==1){
    nLDisplayPulley();
  }else if(nLRandom>=2){
    nLDisplaySlide();
  }

  text("Work/Explanation: ",800,200);
  textSize(25)
  text(nLExplanation,775,200)
  textSize(30);
  text("Feedback:" + nLFeedback,320,610);
}

var nLMass1 = 0;
var nLMass2 = 0;

function nLGeneratePulleyAcceleration(){
  nLMass1 = Math.round(((Math.random() * 25)+1)*100)/100;
  nLMass2 = Math.round(((Math.random() * 25)+1)*100)/100;
  var acceleration = (nLMass2*9.8)/(nLMass1+nLMass2);
  acceleration=Math.round(acceleration*100)/100;
  nLQuestion="Mass 1 is " + nLMass1 + "kg and Mass 2 is " + nLMass2 + "kg. They are connected by a string and pulley. "+
  "\nWhat is the acceleration of the two masses? Ignore friction.";
  nLTempExplanation="\n\nStep 1- Use F = ma = sum of all forces\n\nStep 2- Forces on m2 are gravity and tension,\n           so m2a = m2g - T"+
  "\n\nStep 3- Force on m1 is only tension, so m1a = T\n\nStep 4- Use substitution to get m2a = m2g - m1a\n\nStep 5- Solve for a to get: " + acceleration;

  nLAnswerButtonIndex = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButtonIndex){
      nLButtons[i].text+=acceleration;
    }else{
      nLButtons[i].text+=Math.round(((Math.random() * 25)+1)*100)/100;
    }
  }
}

function nLGeneratePulleyTension(){
  nLMass1 = Math.floor(Math.random() * 10)+1;
  nLMass2 = Math.floor(Math.random() * 10)+1;
  nLQuestion="Mass 1 is " + nLMass1 + "kg and Mass 2 is " + nLMass2 + "kg. They are connected by a string and pulley. "+
  "\nWhat is the tension of the string? Use 9.8m/s^2 for gravity and ignore friction."
  var tension = 9.8*(nLMass1+nLMass2);
  tension=Math.round(tension*100)/100;

  nLTempExplanation="\n\nStep 1- Use F = ma = sum of all forces\n\nStep 2- Forces on m2 are gravity and tension,\n           so m2a = m2g - T"+
  "\n\nStep 3- Force on m1 is only tension, so m1a = T\n\nStep 4- Solve for a from Step 3 to get a = T / m1 "+
  "\n\nStep 5- Use substitution to get\n           m2(T  / m1) = m2g - T\n\nStep 6- Solve for T to get: " + tension;
  nLAnswerButtonIndex = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButtonIndex){
      nLButtons[i].text+=tension;
    }else{
      nLButtons[i].text+=Math.round(((Math.random() * 120)+1)*100)/100;
    }
  }
}

function nLDisplayPulley(){
  fill(0);
  line(385,170,450,170);
  line(370,190,370,270);
  textSize(20);
  text(nLQuestion,320,110);
  textSize(30);
  text("M1",455,180);
  text("M2",345,300);
  rect(385,200,180,150);
  noFill();
  rect(450,150,50,50);
  rect(340,270,50,50);
  ellipse(385,185,30,30);
  fill(0);
}

var theta=0;
var TrigOpposite=0;
function nLGenerateSlideAcceleration(){
  theta=Math.round(random(10,40));
  var friction=random(Math.tan(radians(theta))).toFixed(2);
  var mass=Math.round(random(3,20));
  var acceleration=(9.8*Math.sin(radians(theta))-friction*9.8*Math.cos(radians(theta))).toFixed(2);
  nLQuestion="The mass of the box is "+ mass+ "kg, the angle is " + theta +" degrees, and the friction coefficient is "+ friction+
  ".\nWhat is the acceleration of the box sliding down the incline?";
  nLTempExplanation="\n\nForces acting on the box in the direction\nof the slide:\n   F = gravity - friction = Fg - Fμ\n     = mgsinθ - μmgcosθ = ma"+
  "\n\nCancel m on both sides of the equation:\n   a = gsinθ - μgcosθ\n\nSubtitute: g =9.8m/s ; θ = " + theta + " ; μ = " + friction +
  "\n   to get: Acceleration = a = " + acceleration;

  nLAnswerButtonIndex = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButtonIndex){
      nLButtons[i].text+=acceleration;
    }else{
      nLButtons[i].text+=random(0,5).toFixed(2);
    }
  }
}

function nLDisplaySlide(){
  textSize(20);
  text(nLQuestion,320,110);
  textSize(30);

  TrigOpposite=Math.tan(radians(theta)) * 200;
  triangle(385,350,385,350-TrigOpposite,585,350);

  push();
  // move the origin to the top of the triangle;
  translate(385,350-TrigOpposite);
  // rotate and draw the square
  rotate(radians(theta)+3*PI/2);
  noFill();
  rect(0, 0, 35, 35);
  pop();
}
