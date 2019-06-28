//Declare your variables here. If you declare them inside the harmonics() function, the variable will be reset 25 times per second.
var harmonicsTextBox = new TextBox(320,410,350,40,30);
var harmonicsCheckButton = new Button(380,460,180,40,"Check",30,xOffset=50);
var harmonicsNewQuestionButton = new Button(370,510,220,40,"New Question",30,xOffset=15);
var harmonicsGenerateQuestion = true;
var harmonicsTheta = 0; harmonicsMass = 0; harmonicsLength = 0; yBall = 0; xBall = 0;
var questionType = 0; harmonicsAnswer = 0; graphAngle = 0;
var harmonicsFeedback=""; harmonicsExplanation = ""; harmonicsQuestion = "";
var harmonicsShowExplanation=false;

//When the harmonics button is clicked, the harmonics() function is called 25 times per second in the main.js file (in line 76).
function harmonics(){
  //These 4 lines just display the yellow block on the side. You can ignore these
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);

  //These update the text box and buttons
  harmonicsTextBox.update();
  harmonicsCheckButton.update();
  harmonicsNewQuestionButton.update();

  //This "if statement" generates stuff for a new question
  /*If a question has not been generated yet, generate stuff. Then set generatedQuestion
  to true at the end so it does not generate a new one before the current one is answered*/
  //Make sure to calculate the answer in here and store it in the harmonicsAnswer variable
  if(harmonicsGenerateQuestion == true){
    angleBounds = int(random(0,2));
    if (angleBounds==0){harmonicsTheta=int(random(235,255))} //degrees
    else {harmonicsTheta=int(random(285,325))}
    harmonicsMathAngle=Math.abs(270-harmonicsTheta);
    harmonicsGraphAngle=90-harmonicsMathAngle;
    harmonicsLength=int(random(10,20)); //m
    harmonicsMass=int(random(10,45)); //kg
    questionType= int(random(0,5));
    //console.(log prints stuff out to the console (F12 > Console in the browser).Very useful for debugging
    //console.log("length: "+harmonicsLength);
    if (questionType == 0){
      //Tau
      harmonicsQuestion = "A mass is oscillating at a small angle from a light string of length " +
      harmonicsLength + " m.\nWhat is the period of the pendulum?"
      harmonicsAnswer = +(2*3.14*sqrt(harmonicsLength/9.8)).toFixed(2);
      harmonicsExplanation = "The period of the pendulum is given by:\n        2*PI*√(L/g)\n     = 2*3.14*√(" +
      harmonicsLength + "/9.8)\n     = " + harmonicsAnswer + " seconds";
    }
    else if (questionType == 1) {
      //Angular force due to gravity
      harmonicsQuestion = "A " + harmonicsMass + " kg mass is oscillating at an angle of " +
      harmonicsTheta + " degrees from a light string.\nFind the angular force due to gravity of the pendulum."
      harmonicsAnswer = +(harmonicsMass*9.8*sin(harmonicsTheta*(Math.PI)/180)).toFixed(2);
      harmonicsExplanation = "The angular force due to gravity is given by:\n        m*g*sin(θ)\n     = " +
      harmonicsMass + "*9.8*sin(" + harmonicsTheta + ")\n     = " + harmonicsAnswer + " N";
    }
    else if (questionType == 2) {
      // Downward force due to gravity
      harmonicsQuestion = "A " + harmonicsMass + " kg mass is oscillating at an angle of " +
      harmonicsTheta + " degrees from a light string.\nFind the downward force due to gravity of the pendulum."
      harmonicsAnswer = +(harmonicsMass*9.8*cos(harmonicsTheta*(Math.PI)/180)).toFixed(2);
      harmonicsExplanation = "The downward force due to gravity is given by:\n        m*g*cos(θ)\n     = " +
      harmonicsMass + "*9.8*cos(" + harmonicsTheta + ")\n     = " + harmonicsAnswer + " N";
    }
    else if (questionType == 3) {
      // Angular Velocity
      harmonicsQuestion = "A " + harmonicsMass + " kg mass is oscillating at a small angle from a light string of length " +
      harmonicsLength + " m.\nWhat is the angular velocity of the pendulum?"
      harmonicsAnswer = +(sqrt(harmonicsMass/harmonicsLength)).toFixed(2);
      harmonicsExplanation ="The angular velocity of the pendulum is given by:\n        √(mass/length)\n     = √(" +
      harmonicsMass + "/" + harmonicsLength + ")\n     = " + harmonicsAnswer + " degrees/second"
    }
    else if (questionType == 4) {
      //maximum potential energy
      harmonicsQuestion = "A " + harmonicsMass + " kg mass is oscillating at an angle of " +
      harmonicsMathAngle + " degrees from a light string of length " +
      harmonicsLength + " m.\nWhat is the maximum potential energy of the pendulum?"

      harmonicsAnswer = +(9.8*harmonicsMass*harmonicsLength*sin((harmonicsMathAngle)*(Math.PI)/180)).toFixed(2);
      harmonicsExplanation = "The maximum potential energy of\nthe pendulum is given by:\n        m*g*Δh\n     = m*g*L*sin(θ)\n     = " +
      harmonicsMass + "*9.8*" + harmonicsLength + "*sin(" + harmonicsMathAngle + ")\n     = " + harmonicsAnswer + " J"
    }
    harmonicsGenerateQuestion = false;
    //console.log(harmonicsAnswer);
  }

  yBall = (Math.sin((harmonicsGraphAngle)*(Math.PI)/180)*(harmonicsLength*10)+180);
  xBall = 500-(Math.cos((harmonicsGraphAngle)*(Math.PI)/180)*(harmonicsLength*10));
  //console.log(100+harmonicsLength*10,harmonicsGraphAngle,yBall,xBall);
  strokeWeight(4);
  line(400,180,600,180);
  strokeWeight(3);
  line(500,180,500,180+harmonicsLength*10);
  strokeWeight(1);
  for (var i=0;i<10;i++){
    line(400+20*i,180,420+20*i,165)
  }
  line(500,180,xBall,yBall);
  fill(255);
  ellipse(xBall,yBall,25,25);
  fill(0);
  ellipse(500,180+harmonicsLength*10,25,25);
  textSize(20);text("θ",500-(-xBall+500)/2,200+harmonicsLength*5);
  text(harmonicsLength+" m",510,180+harmonicsLength*5);textSize(30);

  /*If the new question button is clicked, reset the text
  and set harmonicsGenerateQuestion to true so a new question will be generated the next time
  the function is called (With the if statement directly above this).
  You can ignore this.*/
  if(harmonicsNewQuestionButton.clicked==true){
    harmonicsTextBox.data="";
    harmonicsExplanation = "";
    harmonicsFeedback = "";
    harmonicsGenerateQuestion = true;
    harmonicsShowExplanation=false;
  }

  /*check if the user's answer is right or not when the
  Check Button is clicked*/
  if(harmonicsCheckButton.clicked==true){
    if((harmonicsTextBox.data)==harmonicsAnswer){
      harmonicsFeedback="Correct!";
      addPoints(20);
    }else{
      harmonicsFeedback="Try again"
    }

    harmonicsShowExplanation=true;
  }

  //Uncomment this below to generate a wave (translateX,translateY,amplitude,period)
  //generateSineWave(300,200,30,2);
  //generateCosWave(300,500,30,2);

  textSize(25);text(harmonicsQuestion,320,107);textSize(30);

  text("Feedback: " + harmonicsFeedback,320,590);

  text("Work/Explanation:",765,200);

  if(harmonicsShowExplanation==true){
    textSize(25);text(harmonicsExplanation,765,250);textSize(30);
  }
}
