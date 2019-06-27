//Declare your variables here. If you declare them inside the harmonics() function, the variable will be reset 25 times per second.
var harmonicsTextBox = new TextBox(320,150,350,40,30);
var harmonicsCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var harmonicsNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var harmonicsGenerateQuestion = true;
var harmonicsTheta=0;
var questiontype=0
var harmonicsMass=0;
var harmonicsLength=0;
var harmonicsAnswer = 0;
var harmonicsFeedback="";
var harmonicsExplanation = "";
var harmonicsQuestion = "";
var harmonicsShowExplaination=false;

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
    harmonicsTheta=int(random(235,325));
    harmonicsLength=int(random(0,10));
    harmonicsMass=int(random(0,45));
    questiontype= int(random(0,5));
    //console.(log prints stuff out to the console (F12 > Console in the browser).Very useful for debgging
    console.log("length: "+harmonicsLength);
    if (questiontype == 0){
      //Tau
      harmonicsQuestion = "Find the period given the mass and length. " + "Length: " + harmonicsLength + ". Mass: " + harmonicsMass
      harmonicsAnswer = (2*3.14*sqrt(harmonicsLength/9.8)).toFixed(2);
      harmonicsExplanation = "2*PI*√(mass/length)";
    }
    else if (questiontype == 1) {
      //Angular force due to gravity
      harmonicsQuestion = " Find the angular force on the bob due to gravity." + "Angle: " + harmonicsTheta + ". Mass: " + harmonicsMass
      harmonicsAnswer = (harmonicsMass*9.8*sin(harmonicsTheta)).toFixed(2);
      harmonicsExplanation = "M*G*Sin(θ)"
    }
    else if (questiontype == 2) {
      // Downward force due to gravity
      harmonicsQuestion = "Find the downward force due to gravity. " + "Mass: " + harmonicsMass + "Angle: " + harmonicsTheta;
      harmonicsAnswer = (harmonicsMass*9.8*cos(harmonicsTheta)).toFixed(2);
      harmonicsExplanation = "M*G*Cos(θ)";
    }
    else if (questiontype == 3) {
      // Angular Velocity
      harmonicsQuestion = "Find the Maximum angular velocity of the pendulum. " + "Mass: " + harmonicsMass + "Length: " + harmonicsLength
      harmonicsAnswer = (sqrt(harmonicsMass/harmonicsLength)).toFixed(2) + "Degrees/Second";
      harmonicsExplanation ="The Angular velocity of a pendulum is given by: " + "√(mass/length)"
    }
    else if (questiontype == 4) {
      //maximum potential energy
      harmonicsQuestion = "Find the maximum potential energy of the pendulum. " + "Mass: " + harmonicsMass + "Length: " + harmonicsLength
      harmonicsAnswer = ((9.8*harmonicsMass*harmonicsLength*sin(harmonicsTheta)).toFixed(2)) + "Joules"
      harmonicsExplanation = "MGΔH"
    }
    harmonicsGenerateQuestion = false;
  }

  /*If the new question button is clicked, reset the text
  and set harmonicsGenerateQuestion to true so a new question will be generated the next time
  the function is called (With the if statement directly above this).
  You can ignore this.*/
  if(harmonicsNewQuestionButton.clicked==true){
    harmonicsTextBox.data="";
    harmonicsExplanation = "";
    harmonicsFeedback = "";
    harmonicsGenerateQuestion = true;
    harmonicsShowExplaination=false;
  }

  /*check if the user's answer is right or not when the
  Check Button is clicked*/
  if(harmonicsCheckButton.clicked==true){
    /*The parseInt() function turns algebraTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared*/
    if(parseInt(harmonicsTextBox.data)==harmonicsAnswer){
      harmonicsFeedback="Correct!";
    }else{
      harmonicsFeedback="Try again"
    }

    harmonicsShowExplaination=true;
  }

  //Uncomment this below to generate a wave (translateX,translateY,amplitude,period)
  //generateSineWave(300,200,30,2);
  //generateCosWave(300,500,30,2);

  text(harmonicsQuestion,320,120);

  text("Feedback: " + harmonicsFeedback,320,330);

  text("Work/Explanation:",800,200);

  if(harmonicsShowExplaination==true){
    text(harmonicsExplanation,800,250);
  }
}

/*
var harmonicsLength = 0; harmonicsAngle = 0; yBall = 0; xBall = 0;
harmonicsLength=(Math.random()*10+10);
harmonicsAngle=(Math.random()*10+30);
if (harmonicsAngle>=80){harmonicsAngle=80};
console.log(harmonicsAngle);
yBall = (Math.sin(harmonicsAngle*Math.PI/180))*(harmonicsLength*10)+100;
xBall = 150-(Math.cos(harmonicsAngle*Math.PI/180))*(harmonicsLength*10);
console.log(100+harmonicsLength*10,harmonicsAngle*Math.PI/180,yBall,xBall);
function draw() {
  background(220);
  strokeWeight(2);
  line(50,100,250,100);
  strokeWeight(1);
  line(150,100,150,100+harmonicsLength*10);
  line(150,100,xBall,yBall);
  fill(255);
  circle(150,100+harmonicsLength*10,20);
  circle(xBall,yBall,20);

}*/
