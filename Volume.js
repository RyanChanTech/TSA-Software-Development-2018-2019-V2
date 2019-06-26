//volume Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var volumeTextBox = new TextBox(320,185,350,40,30);
var volumeCheckButton = new Button(380,235,180,40,"Check",30,xOffset=50);
var volumeNewQuestionButton = new Button(370,285,220,40,"New Question",30,xOffset=15);
var volumeGenerateQuestion = true;
var volumeRandomNumberOne = 0;
var volumeRandomNumberTwo = 0;
var volumeFeedback="";
var volumeExplanation = "";

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
    }
    if (shapeChoice== 1){
      /*Sphere*/
      radius= int(random(5,20));
      volumeAnswer=+(4*3.14*radius*radius).toFixed(2);
      volumeGenerateQuestion=false;
    }
    if (shapeChoice== 2){
      /*Cylinder*/
      radius= int(random(5,20));
      height= int(random(5,20));
      volumeAnswer=+(3.14*radius*radius*height).toFixed(2);
      volumeGenerateQuestion=false;
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
    if (shapeChoice==0){
      volumeExplanation="Step 1- Mutiply: "+height+"*"+length+"*"+width+ "\nStep 2- Solve: "+volumeAnswer;
    }
    if (shapeChoice==1){
      volumeExplanation="Step 1- Mutiply: 4*π*"+radius+"^2 \nStep 2- Solve: "+volumeAnswer;
    }
    if (shapeChoice==2){
      volumeExplanation="Step 1- Mutiply: π*"+height+"*"+radius+"^2 \nStep 2- Solve: "+volumeAnswer;
    }
  }

  //Display the output, feedback, and work
  //box(width, height, length);
if (shapeChoice==0){
  text("What is the volume of a rectangular prism with\nsides "+height+", "+length+", and "+width+"?",320,125);
}
if (shapeChoice==1){
  text("What is the volume of a sphere with a radius of "+radius+"?",320,125);
  fill(255)
  ellipse(500,550,radius*16,radius*16)
  ellipse(500,550,radius*16,radius*4.8)

}
if (shapeChoice==2){
  text("What is the volume of a cylinder with a height of\n"+height+" and a radius of "+radius+ "?",320,125);
  fill(255)
  ellipse(500,450,radius*16,radius*4.8)
  line(550-radius*16,height*45,550-radius*45,height*60)
  line(550+radius*55,height*45,550+radius*55,height*60)
  ellipse(500,600,radius*16,radius*4.8)
}
fill(0)
text("Feedback: " + volumeFeedback,320,365);
text("Work/Explanation:",800,200);
text(volumeExplanation,800,250);
}
