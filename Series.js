var seriesTextBox = new TextBox(320,310,350,40,30);
var seriesCheckButton = new Button(320,350,350,40,"Check",30);
var seriesNewQuestionButton = new Button(320,390,350,40,"Generate a new question",30);
var seriesGenerateQuestion = true;
var seriesShowExplanation = false;
var seriesRandomNumberOne = 0;
var seriesRandomNumberTwo = 0;
var seriesRandomType = 0;
var seriesRandomRange = 0;
var seriesFirstTerm = 0;
var seriesLastTerm = 0;
var seriesAnswer = 0;
var seriesFeedback="";
var seriesExplanation = "";

function series(){
  seriesTextBox.update();
  seriesCheckButton.update();
  seriesNewQuestionButton.update();

  if(seriesGenerateQuestion == true){
    seriesRandomType = Math.floor(random(0,2));
    // the series is arithmetic
    if (seriesRandomType == 0){
      seriesRandomNumberOne = Math.floor(random(1,100));
      seriesRandomNumberTwo = Math.floor(random(1,100));
      seriesRandomRange = Math.floor(random(1,50));
      seriesFirstTerm = seriesRandomNumberOne + seriesRandomNumberTwo
      seriesLastTerm = seriesRandomNumberOne + seriesRandomNumberTwo*seriesRandomRange
      seriesAnswer = (seriesRandomRange/2)*(seriesFirstTerm + seriesLastTerm);
      seriesExplanation = "Apply the formula for finding the sum of a\nArithmetic Series:\n  S = n/2 * (a1 + an)\n     n = " + seriesRandomRange + "\n    a1 = " + seriesFirstTerm + "\n    an = " +
      seriesLastTerm + "\n  S = " + seriesRandomRange + "/2 * (" + seriesFirstTerm + " + " + seriesLastTerm + ") = " + seriesAnswer;
    }
    // the series is geometric
    if (seriesRandomType == 1){
      seriesRandomNumberOne = Math.floor(random(1,100));
      seriesRandomNumberTwo = Math.floor(random(2,6));
      seriesRandomRange = Math.floor(random(1,15));
      seriesAnswer = seriesRandomNumberOne*((1-pow(seriesRandomNumberTwo,seriesRandomRange))/(1-seriesRandomNumberTwo));
      seriesExplanation = "Apply the formula for finding the sum of a\nGeometric Series:\n  S = a * (1 - r^n)/(1 - r)\n     a = " + seriesRandomNumberOne + "\n     r = " + seriesRandomNumberTwo +
      "\n     n = " + seriesRandomRange + "\n  S = " + seriesRandomNumberOne + " * (1 - " + seriesRandomNumberTwo + "^" + seriesRandomRange + ")/(1 - " + seriesRandomNumberTwo + ") = " + seriesAnswer;
    }
    seriesGenerateQuestion = false;
  }

  if (seriesNewQuestionButton.clicked==true){
    text("",800,170);
    seriesGenerateQuestion = true;
    seriesShowExplanation=false;
  }

  if (seriesCheckButton.clicked==true){
    seriesShowExplanation = true;
    if(parseInt(seriesTextBox.data)==seriesAnswer){
      seriesFeedback="Correct!";
    }else{
      seriesFeedback="Try again"
    }
  }

  if (seriesRandomType == 0){
    text("Find the sum of the\n  Arithmetic Series: ",320,120);
    text(seriesRandomRange,350,200);
    text("n=1",340,280);
    text(seriesRandomNumberOne + " + " + seriesRandomNumberTwo + "n",400,240);
    text("Feedback: " + seriesFeedback,320,470);

    text("Work/Explanation:",800,120);
    if (seriesShowExplanation){
      text(seriesExplanation,800,170);
    }
  }
  if (seriesRandomType == 1){
    text("Find the sum of the\n  Geometric Series: ",320,120);
    text(seriesRandomRange,350,200);
    text("n=1",340,280);
    text(seriesRandomNumberOne + " . " + seriesRandomNumberTwo + "^(n - 1)",400,240);
    text("Feedback: " + seriesFeedback,320,470);

    text("Work/Explanation:",800,120);
    if (seriesShowExplanation){
      text(seriesExplanation,800,170);
    }
  }
}
