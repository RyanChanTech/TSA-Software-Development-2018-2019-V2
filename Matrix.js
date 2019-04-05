var matrixTextBox = new TextBox(320,310,350,40,30);
var matrixCheckButton = new Button(380,360,180,40,"Check",30,xOffset=50);
var matrixNewQuestionButton = new Button(370,410,220,40,"New Question",30,xOffset=15);
var matrixGenerateQuestion = true;
var matrixShowExplanation = false;
var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var a5 = 0
var a6 = 0;
var a7 = 0;
var a8 = 0;
var a9 = 0;
var matrixRandomType = 0;
var matrixAnswer = 0;
var matrixFeedback="";
var matrixExplanation = "";

function matrix(){
  matrixTextBox.update();
  matrixCheckButton.update();
  matrixNewQuestionButton.update();

  if(matrixGenerateQuestion == true){
    a1 = Math.floor(random(-100,100));
    a2 = Math.floor(random(0,100));
    a3 = Math.floor(random(0,100));
    a4 = Math.floor(random(0,100));
    a5 = Math.floor(random(-100,100));
    a6 = Math.floor(random(-100,100));
    a7 = Math.floor(random(0,100));
    a8 = Math.floor(random(0,100));
    a9 = Math.floor(random(0,100));
    matrixRandomType = Math.floor(random(0,2));
    // the matrix is 2X2
    if (matrixRandomType == 0){
      matrixAnswer = a1 * a4 - a2 * a3;
      matrixExplanation = "Apply the formula for evaluating\n the determinant of a 2 X 2 Matrix:\n\n    a1   a2\n    a3   a4\n\n= (a1 * a4) - (a2 * a3)\n= (" +
      a1 + " * " + a4 + ") - (" + a2 + " * " + a3 + ")\n= " + matrixAnswer;
    }
    // the matrix is 3X3
    if (matrixRandomType == 1){
      matrixAnswer = a1 * (a5 * a9 - a6 * a8) - a2 * (a4 * a9 - a6 * a7) + a3 * (a4 * a8 - a5 * a7);
      matrixExplanation = "Apply the formula for evaluating\n the determinant of a 3 X 3 Matrix:\n    a1   b1   c1\n    a2   b2   c2\n    a3   b3   c3\n= "+
      "a1 * ((b2*c3) - (b3*c2))\n   - b1 * ((a2*c3) - (a3*c2))\n   + c1 * ((a2*b3) - (a3*b2))\n= " +
      a1 + " * ((" + a5 + "*" + a9 + ") - (" + a6 + "*" + a8 + "))\n   " +
      "- " + a2 + " * ((" + a4 + "*" + a9 + ") - (" + a6 + "*" + a7 + "))\n   " +
      "+ " + a3 + " * ((" + a4 + "*" + a8 + ") - (" + a5 + "*" + a7 + "))\n= " + matrixAnswer
      ;
    }
    matrixGenerateQuestion = false;
  }

  if (matrixNewQuestionButton.clicked==true){
    matrixGenerateQuestion = true;
  }

  if (matrixNewQuestionButton.clicked==true){
    text("",800,170);
    matrixGenerateQuestion = true;
    matrixShowExplanation=false;
  }

  if (matrixCheckButton.clicked==true){
    matrixShowExplanation = true;
    if(parseInt(matrixTextBox.data)==matrixAnswer){
      matrixFeedback="Correct!";
    }else{
      matrixFeedback="Try again";
    }
  }

  if (matrixRandomType == 0){
    strokeWeight(3);
    line(400,180,400,270);
    line(535,180,535,270);
    strokeWeight(1);//set to default

    text("Evaluate the determinant of\n the 2 X 2 Matrix: ",320,120);
    text(a1,410,215);
    text(a2,490,215);
    text(a3,410,255);
    text(a4,490,255);
    text("Feedback: " + matrixFeedback,320,490);
    text("Work/Explanation:",800,195);
    if (matrixShowExplanation){
      strokeWeight(3);
      line(820,330,820,405);
      line(940,330,940,405);
      strokeWeight(1);//set to default
      text(matrixExplanation,800,245);
    }
  }
  if (matrixRandomType == 1){
    strokeWeight(3);
    line(390,170,390,285);
    line(580,170,580,285);
    strokeWeight(1);//set to default

    text("Evaluate the determinent of\n the 3 X 3 Matrix: ",320,120);
    text(a1,400,200);
    text(a2,465,200);
    text(a3,530,200);
    text(a4,400,240);
    text(a5,465,240);
    text(a6,530,240);
    text(a7,400,280);
    text(a8,465,280);
    text(a9,530,280);
    text("Feedback: " + matrixFeedback,320,490);
    text("Work/Explanation:",800,195);
    if (matrixShowExplanation){
      strokeWeight(3);
      line(820,285,820,395);
      line(995,285,995,395);
      strokeWeight(1);//set to default
      text(matrixExplanation,800,240);
    }
  }
}
