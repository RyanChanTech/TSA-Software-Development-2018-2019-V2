//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var integralsTextBox = new TextBox(320,150,350,40,30);
var integralsCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var integralsNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var integralsGenerateQuestion = true;
var integralsTopic = "";
var integralsQuestion = "";
var integralsAnswer = "";
var integralsFeedback="";
var integralsExplanation = "";
var integralsShowExplanation = false;

function integrals(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  integralsTextBox.update();
  integralsCheckButton.update();
  integralsNewQuestionButton.update();

  /* Type =

    SubSubType = coefficient or not*/
  if(integralsGenerateQuestion == true){
    //application or not
    var randomQuestionType = Math.floor(random(0,1));
    //single or double or triple
    var randomIntegralsType = Math.floor(random(0,1));
    //polynomial or e or sin or cos or const
    var randomIntegralsSubType = Math.floor(random(0,5));

    var randomIntegralsCoefficient = Math.floor(random(2,9));
    //definite or indef
    var randomIntegralsNumeric = Math.floor(random(0,1));
    var randomLowerBound = Math.floor(random(0,5));
    var randomUpperBound = Math.floor(random(5,10));

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
      integralsTopic = "Calculate the following integral:";
    integralsGenerateQuestion = false;
    }
    console.log(integralsQuestion);
    console.log(integralsAnswer);
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
  text("Feedback: ",320,330);
  text("Work/Explanation:",800,200);
  if (integralsShowExplanation){
      text(integralsExplanation,800,250);
      text(integralsFeedback,470,330);
  }
}



//∫
//]
