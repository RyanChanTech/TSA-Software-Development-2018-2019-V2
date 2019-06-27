//volume Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var volumeTextBox = new TextBox(320,495,350,40,30);
var volumeCheckButton = new Button(380,550,180,40,"Check",30,xOffset=50);
var volumeNewQuestionButton = new Button(370,595,220,40,"New Question",30,xOffset=15);
var volumeGenerateQuestion = true;
var volumeRandomNumberOne = 0;
var volumeRandomNumberTwo = 0;
var volumeFeedback="";
var volumeExplanation = "";
var volumeShowExplanation=false;

var height=0;
var length=0;
var width=0;
var radius= 0;
var volumeAnswer=0;
var shapeChoice= 0

function volume(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  volumeTextBox.update();
  volumeCheckButton.update();
  volumeNewQuestionButton.update();

  /*If a question has not been generated yet,make 2 numbers
  between 0 and 50 and make the answer. Then set generatedQuestion
  to true at the end so it does not generate a new one
  before the current one is answered
  */
  if(volumeGenerateQuestion == true){
    shapeChoice= int(random(0,3));
    if (shapeChoice== 0){
      /*Cube*/
      height= int(random(5,20));
      length= int(random(5,20));
      width= int(random(5,20));
      volumeAnswer=+(height*length*width).toFixed(2);
      volumeGenerateQuestion=false;
      volumeExplanation="Step 1- Mutiply: "+height+"*"+length+"*"+width+ "\nStep 2- Solve: "+volumeAnswer;
    }
    if (shapeChoice== 1){
      /*Sphere*/
      radius= int(random(8,20));
      volumeAnswer=+(4*3.14*radius*radius).toFixed(2);
      volumeGenerateQuestion=false;
      volumeExplanation="Step 1- Mutiply: 4*π*"+radius+"^2 \nStep 2- Solve: "+volumeAnswer;
    }
    if (shapeChoice== 2){
      /*Cylinder*/
      radius= int(random(5,20));
      height= int(random(5,15));
      volumeAnswer=+(3.14*radius*radius*height).toFixed(2);
      volumeGenerateQuestion=false;
      volumeExplanation="Step 1- Mutiply: π*"+height+"*"+radius+"^2 \nStep 2- Solve: "+volumeAnswer;
    }
  }

  /*If the volumeNewQuestionButon is clicked, set volumeGenerateQuestion
  to true, so it generates a new question in the next frame
  */
  if(volumeNewQuestionButton.clicked==true){
    volumeTextBox.data="";
    volumeExplanation = "";
    volumeFeedback = "";
    volumeGenerateQuestion = true;
    volumeShowExplanation=false;
  }

  /*check if the user's answer is right or not when the
  volumeCheckButton is clicked
  */
  if(volumeCheckButton.clicked==true){
    /*The parseFloat() function turns volumeTextBox.data, which is a string (or text)
    data type into an float datatype so they can be compared
    */
    if(parseFloat(volumeTextBox.data)==volumeAnswer){
      volumeFeedback="Correct!";
      addPoints(10);
    }else{
      volumeFeedback="Try again"
    }
    volumeShowExplanation=true;
  }

  //Display the output, feedback, and work
  //box(width, height, length);
  if (shapeChoice==0){
    text("What is the volume of a rectangular prism with sides "+height+", "+length+", and "+width+"?\nRound to 2 decimal places",320,125);
  }
  if (shapeChoice==1){
    text("What is the volume of a sphere with radius of "+radius+"? Round to 2 decimal places",305,125);
    fill(255);
    ellipse(500,300,radius*16,radius*16);
    ellipse(500,300,radius*16,radius*4.8);
    line(500,300,500+radius*8,300);
    fill(0);
    textSize(20);
    text(radius,485+radius*4,295);
  }
  if (shapeChoice==2){
    text("What is the volume of a cylinder with a height of "+height+" and a radius of "+radius+ "?\nRound to 2 decimal places",320,125);
    fill(255);
    ellipse(500,230,radius*16,radius*3.5);
    line(500-radius*8,230,500-radius*8,230+height*16);
    line(500+radius*8,230,500+radius*8,230+height*16);
    ellipse(500,230+height*16,radius*16,radius*3.5);
    fill(0);
  }
  textSize(30);
  text("Feedback: " + volumeFeedback,320,675);
  text("Work/Explanation:",800,200);

  if(volumeShowExplanation==true){text(volumeExplanation,800,250);}
}
