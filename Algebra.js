//Algebra Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var algebraTextBox = new TextBox(320,150,350,40,30);
var algebraCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var algebraNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var algebraGenerateQuestion = true;
var algebraRandomNumberOne = 0;
var algebraRandomNumberTwo = 0;
var algebraAnswer = 0;
var algebraFeedback="";
var algebraExplanation = "";

function algebra(){
  fill(255,238,153,100);
  noStroke();
  rect(775,155,575,525,20,0,0,20);
  stroke(0);
  algebraTextBox.update();
  algebraCheckButton.update();
  algebraNewQuestionButton.update();

  /*If a question has not been generated yet,make 2 numbers
  between 0 and 50 and make the answer. Then set generatedQuestion
  to true at the end so it does not generate a new one
  before the current one is answered
  */
  if(algebraGenerateQuestion == true){
    algebraRandomNumberOne = Math.floor(Math.random() * 50);
    algebraRandomNumberTwo = Math.floor(Math.random() * 50);
    algebraAnswer=algebraRandomNumberTwo-algebraRandomNumberOne;
    algebraGenerateQuestion = false;
  }

  /*If the algebraNewQuestionButon is clicked, set algebraGenerateQuestion
  to true, so it generates a new question in the next frame
  */
  if(algebraNewQuestionButton.clicked==true){
    algebraGenerateQuestion = true;
  }

  /*check if the user's answer is right or not when the
  algebraCheckButton is clicked
  */
  if(algebraCheckButton.clicked==true){
    /*The parseInt() function turns algebraTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared
    */
    if(parseInt(algebraTextBox.data)==algebraAnswer){
      algebraFeedback="Correct!";
    }else{
      algebraFeedback="Try again"
    }

    algebraExplanation="Step 1-Subtract: " + algebraRandomNumberTwo+" - "+algebraRandomNumberOne+" = "+algebraAnswer;
  }

  //Display the output, feedback, and work
  text(algebraRandomNumberOne + " + x = " + algebraRandomNumberTwo,320,120);
  text("Feedback: " + algebraFeedback,320,330);

  text("Work/Explanation:",800,200);
  text(algebraExplanation,800,250);
}
