//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var integralsTextBox = new TextBox(320,150,350,40,30);
var integralsCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var integralsNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var integralsGenerateQuestion = true;
var integralsAnswer = 0;
var integralsFeedback="";
var integralsExplanation = "";

function integrals(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  integralsTextBox.update();
  integralsCheckButton.update();
  integralsNewQuestionButton.update();

  /*If a question has not been generated yet,make 2 numbers
  between 0 and 0 and between 0make the answer. Then set generatedQuestion
  to true at the end so it does not generate a new one
  before the current one is answered*/
  if(integralsGenerateQuestion == true){
    var randomIntegralType = Math.floor(random(0,1));
    var randomIntegralSubType = Math.floor(random(0,3));

    // it's a single integral
    if (randomIntegralType == 0){
      if (randomIntegralSubType == 0 or 1){
        var randomFunctionType = Math.floor(random(0,))
      }

      var integralsRandomNumberOne = Math.floor(Math.random() * 50);
      var integralsRandomNumberTwo = Math.floor(Math.random() * 50);
      integralsAnswer=integralsRandomNumberTwo-integralsRandomNumberOne;
    }

    integralsGenerateQuestion = false;
  }

  /*If the integralsNewQuestionButon is clicked, set integralsGenerateQuestion
  to true, so it generates a new question in the next frame*/
  if(integralsNewQuestionButton.clicked==true){
    integralsTextBox.data="";
    integralsExplanation = "";
    integralsFeedback = "";
    integralsGenerateQuestion = true;
  }

  /*check if the user's answer is right or not when the
  integralsCheckButton is clicked*/
  if(integralsCheckButton.clicked==true){
    /*The parseInt() function turns integralsTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared*/
    if(parseInt(integralsTextBox.data)==integralsAnswer){
      integralsFeedback="Correct!";
    }else{
      integralsFeedback="Try again"
    }

    integralsExplanation="Subtract: " + integralsRandomNumberTwo+" - "+integralsRandomNumberOne+" = "+integralsAnswer;
  }

  //Display the output, feedback, and work
  text(integralsRandomNumberOne + " + x = " + integralsRandomNumberTwo,320,120);
  text("Feedback: " + integralsFeedback,320,330);

  text("Work/Explanation:",800,200);
  text(integralsExplanation,800,250);
}



//∫
