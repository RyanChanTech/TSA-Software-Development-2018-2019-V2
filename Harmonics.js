var harmonicsTextBox = new TextBox(320,150,350,40,30);
var harmonicsCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var harmonicsNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var harmonicsGenerateQuestion = true;
var harmonicsRandomNumberOne = 0;
var harmonicsRandomNumberTwo = 0;
var harmonicsAnswer = 0;
var harmonicsFeedback="";
var harmonicsExplanation = "";

function harmonics(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,10,0,0,10);
  stroke(0);
  harmonicsTextBox.update();
  harmonicsCheckButton.update();
  harmonicsNewQuestionButton.update();

  if(harmonicsGenerateQuestion == true){
    harmonicsRandomNumberOne = Math.floor(Math.random() * 50);
    harmonicsRandomNumberTwo = Math.floor(Math.random() * 50);
    harmonicsAnswer=harmonicsRandomNumberTwo-harmonicsRandomNumberOne;
    harmonicsGenerateQuestion = false;
  }

  if(harmonicsNewQuestionButton.clicked==true){
    harmonicsTextBox.data="";
    harmonicsExplanation = ""
    harmonicsGenerateQuestion = true;
  }

  if(harmonicsCheckButton.clicked==true){
    if(parseInt(harmonicsTextBox.data)==harmonicsAnswer){
      harmonicsFeedback="Correct!";
    }else{
      harmonicsFeedback="Try again"
    }

    harmonicsExplanation="Step 1-Subtract: " + harmonicsRandomNumberTwo+" - "+harmonicsRandomNumberOne+" = "+harmonicsAnswer;
  }

  text(harmonicsRandomNumberOne + " + x = " + harmonicsRandomNumberTwo,320,120);
  text("Feedback: " + harmonicsFeedback,320,330);

  text("Work/Explanation:",800,200);
  text(harmonicsExplanation,800,250);
}
