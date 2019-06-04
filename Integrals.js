//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var integralsTextBox = new TextBox(320,260,350,40,30);
var integralsCheckButton = new Button(380,350,180,40,"Check",30,xOffset=50);
var integralsNewQuestionButton = new Button(370,400,220,40,"New Question",30,xOffset=15);
var integralsGenerateQuestion = true;
var integralsQuestion = "";
var integralsAnswer = "";
var integralsFeedback="";
var integralsExplanation = "";
var integralsShowExplanation = false;
var integralsDisplayPosition = 340;
var randomQuestionType = 0;
var randomIntegralsType = 0;
var randomIntegralsSubType = 0;
var randomIntegralsCoefficient = 0;
var randomIntegralsNumeric =0;
var randomLowerBound = 0;
var randomUpperBound = 0;

function integrals(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  integralsTextBox.update();
  integralsCheckButton.update();
  integralsNewQuestionButton.update();

  if(integralsGenerateQuestion == true){
    //application or not
    randomQuestionType = Math.floor(random(0,1));
    //single or double or triple
    randomIntegralsType = Math.floor(random(0,1));
    //randomIntegralsType = 0;
    //polynomial or e or sin or cos or const
    randomIntegralsSubType = Math.floor(random(0,5));

    randomIntegralsCoefficient = Math.floor(random(2,9));
    //definite or indef
    randomIntegralsNumeric = Math.floor(random(0,1));
    randomLowerBound = Math.floor(random(0,5));
    randomUpperBound = Math.floor(random(5,10));

    // it's a single integral
    if (randomQuestionType == 0){
      if (randomIntegralsType == 0){
        if (randomIntegralsSubType == 0){
          integralsQuestion = randomIntegralsCoefficient + "x^" + (randomIntegralsCoefficient-1);
          integralsAnswer = "x^" + randomIntegralsCoefficient;
        } else if (randomIntegralsSubType == 1){
          integralsQuestion = randomIntegralsCoefficient + "e^x";
          integralsAnswer = randomIntegralsCoefficient + "e^x";
        } else if (randomIntegralsSubType == 2){
          integralsQuestion = randomIntegralsCoefficient + "sin(x)";
          integralsAnswer = "-" + randomIntegralsCoefficient + "cos(x)";
        } else if (randomIntegralsSubType == 3){
          integralsQuestion = randomIntegralsCoefficient + "cos(x)";
          integralsAnswer = randomIntegralsCoefficient + "sin(x)";
        } else if (randomIntegralsSubType == 4){
          integralsQuestion = randomIntegralsCoefficient;
          integralsAnswer = randomIntegralsCoefficient + "x";
        }
      }
    }
    integralsGenerateQuestion = false;
  }

  /*If the integralsNewQuestionButon is clicked, set integralsGenerateQuestion
  to true, so it generates a new question in the next frame*/
  if(integralsNewQuestionButton.clicked==true){
    integralsTextBox.data="";
    integralsGenerateQuestion = true;
    integralsShowExplanation = false;
  }

  /*check if the user's answer is right or not when the
  integralsCheckButton is clicked*/
  if(integralsCheckButton.clicked==true){
    integralsShowExplanation = true;
    /*The parseFloat() function turns integralsTextBox.data, which is a string (or text)
    data type into a float datatype so they can be compared*/
    if((integralsTextBox.data)==integralsAnswer){
      integralsFeedback="Correct!";
    }else{
      integralsFeedback="Try again"
    }
  }

  //Display the output, feedback, and work
  text("Feedback: ",320,480);
  text("Work/Explanation:",800,200);
  if (integralsShowExplanation){
      text(integralsExplanation,800,250);
      text(integralsFeedback,470,330);
  }
  text("Calculate the following integral:",320,120);
  textSize(60);
  if (randomIntegralsType==0){
    text("∫",integralsDisplayPosition,210);
  }
  if (randomIntegralsType==1){
    text("∫",integralsDisplayPosition+30,210);
  }
  if (randomIntegralsType==2){
    text("∫",integralsDisplayPosition+60,210);
  }
  textSize(30);

}



//∫
//]
