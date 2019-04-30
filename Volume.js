//volume Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var volumeTextBox = new TextBox(320,150,350,40,30);
var volumeCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var volumeNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var volumeGenerateQuestion = true;
var volumeRandomNumberOne = 0;
var volumeRandomNumberTwo = 0;
var volumeAnswer = 0;
var volumeFeedback="";
var volumeExplanation = "";

function volume(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,10,0,0,10);
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
    volumeRandomNumberOne = Math.floor(Math.random() * 50);
    volumeRandomNumberTwo = Math.floor(Math.random() * 50);
    volumeAnswer=volumeRandomNumberTwo-volumeRandomNumberOne;
    volumeGenerateQuestion = false;
  }

  /*If the volumeNewQuestionButon is clicked, set volumeGenerateQuestion
  to true, so it generates a new question in the next frame
  */
  if(volumeNewQuestionButton.clicked==true){
    volumeTextBox.data="";
    volumeExplanation = ""
    volumeGenerateQuestion = true;
  }

  /*check if the user's answer is right or not when the
  volumeCheckButton is clicked
  */
  if(volumeCheckButton.clicked==true){
    /*The parseInt() function turns volumeTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared
    */
    if(parseInt(volumeTextBox.data)==volumeAnswer){
      volumeFeedback="Correct!";
    }else{
      volumeFeedback="Try again"
    }

    volumeExplanation="Step 1-Subtract: " + volumeRandomNumberTwo+" - "+volumeRandomNumberOne+" = "+volumeAnswer;
  }

  //Display the output, feedback, and work
  text(volumeRandomNumberOne + " + x = " + volumeRandomNumberTwo,320,120);
  text("Feedback: " + volumeFeedback,320,330);

  text("Work/Explanation:",800,200);
  text(volumeExplanation,800,250);
}
