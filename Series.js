//series Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var seriesTextBox = new TextBox(320,150,350,40,30);
var seriesCheckButton = new Button(320,190,350,40,"Check",30);
var seriesNewQuestionButton = new Button(320,230,350,40,"Generate a new question",30);
var seriesGenerateQuestion = true;
var seriesRandomNumberOne = 0;
var seriesRandomNumberTwo = 0;
var seriesRandomType = 0;
var seriesRandomRange = 0;
var seriesFirstTerm = 0;
var series LastTerm = 0;
var seriesAnswer = 0;
var seriesFeedback="";
var seriesExplanation = "";

function series(){
  seriesTextBox.update();
  seriesCheckButton.update();
  seriesNewQuestionButton.update();

  /*If a question has not been generated yet,make 2 numbers
  between 0 and 50 and make the answer. Then set generatedQuestion
  to true at the end so it does not generate a new one
  before the current one is answered
  */
  if(seriesGenerateQuestion == true){
    seriesRandomNumberOne = Math.floor(random(-100,100);
    seriesRandomNumberTwo = Math.floor(random(-100,100);
    seriesRandomType = Math.floor(random(0,1));
    seriesRandomRange = Math.floor(random(-50,50);
    /* the series is arithmetic */
    if (seriesRandomType == 0){
      seriesFirstTerm = seriesRandonNumberOne + seriesRandomNumberTwo
      seriesLastTerm = seriesRandomNumberOne + seriesRandomNumberTwo*seriesRandomRange
      seriesAnswer = (seriesRandomRange/2)*(seriesFirstTerm + seriesLastTerm);
      seriesExplanation = "Apply the formula for finding the sum of a Arithmetic Series:\n  S = n/2 * (a1 + an)\n    n = " + seriesRandomRange + "\n    a1 = " + seriesFirstTerm + "\n    an = " +
      seriesLastTerm + "\n  S = " + seriesRandomRange + "/2 * (" + seriesFirstTerm + " + " + seriesLastTerm + ") = " + seriesAnswer;
    }
    /* the series is geometric */
    if (seriesRandomType == 1){
      seriesAnswer = seriesRandomNumberOne*((1-seriesRandomNumberTwo^seriesRandomRange)/(1-seriesRandomNumberTwo));
      seriesExplanation = "Apply the formula for finding the sum of a Geometric Series:\n  S = a * (1 - r^n)/(1 - r)\n    a = " + seriesRandomNumberOne + "\n    r = " + seriesRandomNumberTwo +
      "\n    n = " + seriesRandomRange + "\n  S = " + seriesRandomNumberOne + " * (1 - " + seriesRandomNumberTwo + "^" + seriesRandomRange + ")/(1 - " + seriesRandomNumberTwo + ") = " + seriesAnswer;
    }
    seriesGenerateQuestion = false;
  }

  /*If the seriesNewQuestionButon is clicked, set seriesGenerateQuestion
  to true, so it generates a new question in the next frame
  */
  if (seriesNewQuestionButton.clicked==true){
    seriesGenerateQuestion = true;
  }

