//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var integralsTextBox = new TextBox(320,260,350,40,30);
var integralsCheckButton = new Button(380,310,180,40,"Check",30,xOffset=50);
var integralsNewQuestionButton = new Button(370,360,220,40,"New Question",30,xOffset=15);
var integralsGenerateQuestion = true;
var integralsQuestion = ""; integralsXQuestion = ""; integralsYQuestion = ""; integralsZQuestion = "";
var integralsAnswer = ""; integralsXAnswer = ""; integralsYAnswer = ""; integralsZAnswer = "";
var integalsXNumericAnswer = 0; integalsYNumericAnswer = 0; integalsZNumericAnswer = 0;
var integralsXAnswerCoefficient = 0; integralsYAnswerCoefficient = 0; integralsZAnswerCoefficient = 0;
var integralsXQuestionCoefficient = 0; integralsYQuestionCoefficient = 0; integralsZQuestionCoefficient = 0;
var integralsFeedback="";
var integralsExplanation = "";
var integralsShowExplanation = false;
var integralsDisplayPosition = 340;
var randomIntegralsType = 0;
var randomIntegralsXSubType = 0; randomIntegralsYSubType = 0; randomIntegralsZSubType = 0;
var randomIntegralsXCoefficient = 0; randomIntegralsYCoefficient = 0; randomIntegralsZCoefficient = 0;
var randomIntegralsNumeric =0;
var randomLowerBound1 = 0;
var randomUpperBound1 = 0;
var randomLowerBound2 = 0;
var randomUpperBound2 = 0;
var randomLowerBound3 = 0;
var randomUpperBound3 = 0;

function integrals(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  integralsTextBox.update();
  integralsCheckButton.update();
  integralsNewQuestionButton.update();

  if(integralsGenerateQuestion == true){
    //single or double or triple
    randomIntegralsType = Math.floor(random(0,3));
    //polynomial or e or sin or cos or const
    randomIntegralsXSubType = Math.floor(random(0,5));
    randomIntegralsYSubType = Math.floor(random(0,3));
    randomIntegralsZSubType = Math.floor(random(0,3));

    randomIntegralsXCoefficient = Math.floor(random(4,10));
    randomIntegralsYCoefficient = Math.floor(random(4,10));
    randomIntegralsZCoefficient = Math.floor(random(4,10));

    //definite or indef
    randomIntegralsNumeric = Math.floor(random(0,2));
    randomLowerBound1 = Math.floor(random(-5,0));
    randomUpperBound1 = Math.floor(random(0,5));
    randomLowerBound2 = Math.floor(random(-5,0));
    randomUpperBound2 = Math.floor(random(0,5));
    randomLowerBound3 = Math.floor(random(-5,0));
    randomUpperBound3 = Math.floor(random(0,5));

    if (randomIntegralsXSubType == 0){
      integralsXQuestion = /*randomIntegralsXCoefficient*/ "x^" + (randomIntegralsXCoefficient-1);
      integralsXAnswer = "x^" + (randomIntegralsXCoefficient);
      integralsXQuestionCoefficient = randomIntegralsXCoefficient;
      integralsXAnswerCoefficient = 1;
      integralsXNumericAnswer = +(pow(randomUpperBound1,randomIntegralsXCoefficient) - pow(randomLowerBound1,randomIntegralsXCoefficient)).toFixed(2);
    } else if (randomIntegralsXSubType == 1){
      integralsXQuestion = /*randomIntegralsXCoefficient*/ "e^x";
      integralsXAnswer = /*randomIntegralsXCoefficient +*/ "e^x";
      integralsXQuestionCoefficient = randomIntegralsXCoefficient;
      integralsXAnswerCoefficient = randomIntegralsXCoefficient;
      integralsXNumericAnswer = +(exp(randomUpperBound1) - exp(randomLowerBound1)).toFixed(2);
    } else if (randomIntegralsXSubType == 2){
      integralsXQuestion = /*randomIntegralsXCoefficient*/ "sin(x)";
      integralsXAnswer = /*"-" + randomIntegralsXCoefficient +*/ "cos(x)";
      integralsXQuestionCoefficient = randomIntegralsXCoefficient;
      integralsXAnswerCoefficient = randomIntegralsXCoefficient;
      integralsXNumericAnswer = +(-cos(randomUpperBound1)+cos(randomLowerBound1)).toFixed(2);
    } else if (randomIntegralsXSubType == 3){
      integralsXQuestion = /*randomIntegralsXCoefficient*/ "cos(x)";
      integralsXAnswer = /*randomIntegralsXCoefficient +*/ "sin(x)";
      integralsXQuestionCoefficient = randomIntegralsXCoefficient;
      integralsXAnswerCoefficient = randomIntegralsXCoefficient;
      integralsXNumericAnswer = +(sin(randomUpperBound1)-sin(randomLowerBound1)).toFixed(2);
    } else if (randomIntegralsXSubType == 4){
      integralsXQuestion = /*randomIntegralsXCoefficient*/"";
      integralsXAnswer = /*randomIntegralsXCoefficient +*/ "x";
      integralsXQuestionCoefficient = randomIntegralsXCoefficient;
      integralsXAnswerCoefficient = randomIntegralsXCoefficient;
      integralsXNumericAnswer = +(randomUpperBound1-randomLowerBound1).toFixed(2);
    }

    if (randomIntegralsYSubType == 0){
      integralsYQuestion = /*randomIntegralsYCoefficient*/ "y^" + (randomIntegralsYCoefficient-1);
      integralsYAnswer = "y^" + randomIntegralsYCoefficient;
      integralsYQuestionCoefficient = randomIntegralsYCoefficient;
      integralsYAnswerCoefficient = 1;
      integralsYNumericAnswer = +(pow(randomUpperBound2,randomIntegralsYCoefficient)-pow(randomLowerBound2,randomIntegralsYCoefficient)).toFixed(2);
    } else if (randomIntegralsYSubType == 1){
      integralsYQuestion = /*randomIntegralsYCoefficient + */"e^y";
      integralsYAnswer = /*randomIntegralsYCoefficient +*/ "e^y";
      integralsYQuestionCoefficient = randomIntegralsYCoefficient;
      integralsYAnswerCoefficient = randomIntegralsYCoefficient;
      integralsYNumericAnswer = +(exp(randomUpperBound2)-exp(randomLowerBound2)).toFixed(2);
    } else if (randomIntegralsYSubType == 2){
      integralsYQuestion = /*randomIntegralsYCoefficient*/"";
      integralsYAnswer = /*randomIntegralsYCoefficient +*/ "y";
      integralsYQuestionCoefficient = randomIntegralsYCoefficient;
      integralsYAnswerCoefficient = randomIntegralsYCoefficient;
      integralsYNumericAnswer = +(randomUpperBound2-randomLowerBound2).toFixed(2);
    }

    if (randomIntegralsZSubType == 0){
      integralsZQuestion = /*randomIntegralsZCoefficient +*/ "z^" + (randomIntegralsZCoefficient-1);
      integralsZAnswer = "z^" + randomIntegralsZCoefficient;
      integralsZQuestionCoefficient = randomIntegralsZCoefficient;
      integralsZAnswerCoefficient = 1;
      integralsZNumericAnswer = +(pow(randomUpperBound3,randomIntegralsZCoefficient)-pow(randomLowerBound3,randomIntegralsZCoefficient)).toFixed(2);
    } else if (randomIntegralsZSubType == 1){
      integralsZQuestion = /*randomIntegralsZCoefficient +*/ "e^z";
      integralsZAnswer = /*randomIntegralsZCoefficient +*/ "e^z";
      integralsZQuestionCoefficient = randomIntegralsZCoefficient;
      integralsZAnswerCoefficient = randomIntegralsZCoefficient;
      integralsZNumericAnswer = +(exp(randomUpperBound3)-exp(randomLowerBound3)).toFixed(2);
    } else if (randomIntegralsZSubType == 2){
      integralsZQuestion = /*randomIntegralsZCoefficient*/"";
      integralsZAnswer = /*randomIntegralsZCoefficient +*/ "z";
      integralsZQuestionCoefficient = randomIntegralsZCoefficient;
      integralsZAnswerCoefficient = randomIntegralsZCoefficient;
      integralsZNumericAnswer = +(randomUpperBound3-randomLowerBound3).toFixed(2);
    }

    /*console.log("integralsXQuestionCoefficient " + integralsXQuestionCoefficient);
    console.log("integralsYQuestionCoefficient " + integralsYQuestionCoefficient);
    console.log("integralsZQuestionCoefficient " + integralsZQuestionCoefficient);
    console.log("integralsXAnswerCoefficient " + integralsXAnswerCoefficient);
    console.log("integralsYAnswerCoefficient " + integralsYAnswerCoefficient);
    console.log("integralsZAnswerCoefficient " + integralsZAnswerCoefficient);
    console.log("integralsXAnswer " + integralsXAnswer);
    console.log("integralsYAnswer " + integralsYAnswer);
    console.log("integralsZAnswer " + integralsZAnswer);
    console.log("integralsXNumericAnswer " + integralsXNumericAnswer);
    console.log("integralsYNumericAnswer " + integralsYNumericAnswer);
    console.log("integralsZNumericAnswer " + integralsZNumericAnswer);
    console.log(" ");*/

    //if the integral is double or triple, it's always definite
    if (randomIntegralsType == 0){
      integralsQuestion = (integralsXQuestionCoefficient) + integralsXQuestion;
      if (randomIntegralsNumeric==0){
        integralsAnswer = integralsXAnswerCoefficient + integralsXAnswer;
      } else {
        integralsAnswer = +(integralsXAnswerCoefficient * integralsXNumericAnswer).toFixed(2);
      }
    }
    if (randomIntegralsType == 1){
      integralsQuestion = (integralsXQuestionCoefficient*integralsYQuestionCoefficient) + integralsXQuestion + integralsYQuestion;
      integralsAnswer = +(integralsXAnswerCoefficient*integralsYAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer).toFixed(2);
    }
    if (randomIntegralsType == 2){
      integralsQuestion = (integralsXQuestionCoefficient*integralsYQuestionCoefficient*integralsZQuestionCoefficient) + integralsXQuestion + integralsYQuestion + integralsZQuestion;
      integralsAnswer = +(integralsXAnswerCoefficient*integralsYAnswerCoefficient*integralsZAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer*integralsZNumericAnswer).toFixed(2);
    }
    //add the - minus sign for the case when the integral is indefinite, single and sin
    if (randomIntegralsXSubType == 2 && randomIntegralsNumeric == 0 && randomIntegralsType == 0){ integralsAnswer = "-" + integralsAnswer; }
    if (randomIntegralsNumeric == 0 && randomIntegralsType == 0){ integralsAnswer += " + C" }

    if (randomIntegralsType>=0){integralsQuestion += "dx"};
    if (randomIntegralsType>=1){integralsQuestion += "dy"};
    if (randomIntegralsType==2){integralsQuestion += "dz"};

    integralsExplanation = integralsAnswer;
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
  text("Feedback: ",320,440);
  text("Work/Explanation:",800,200);
  if (integralsShowExplanation){
      text(integralsExplanation,800,250);
      text(integralsFeedback,470,440);
  }
  text("Calculate the following integral (round up to two decimals):",320,120);

  //print integral signs and bounds
  if (randomIntegralsType>=0){
    textSize(60);
    text("∫",385,210);
    if (randomIntegralsNumeric==1 || randomIntegralsType >=1){
      textSize(18);
      text(randomLowerBound1,400,235);
      text(randomUpperBound1,418,170);
    }
    textSize(30);
  }
  if (randomIntegralsType>=1){
    textSize(60);
    text("∫",355,210);
    textSize(18);
    text(randomLowerBound2,370,235);
    text(randomUpperBound2,388,170);
    textSize(30);
  }
  if (randomIntegralsType==2){
    textSize(60);
    text("∫",325,210);
    textSize(18);
    text(randomLowerBound3,340,235);
    text(randomUpperBound3,358,170);
    textSize(30);
  }
  text(integralsQuestion,415,210);
}
//∫
//]
