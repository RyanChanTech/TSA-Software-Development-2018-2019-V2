var customTextBox = new TextBox(320,150,350,40,30);
var customCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var customNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);

var customGenerateQuestion = true;
var customQuestions;
var customQuestion;//customQuestion[0]=Question,customQuestion[1]=Answer,customQuestion[2]=Explanation

var customExplanation="";
var customFeedback="";

function custom(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,10,0,0,10);
  stroke(0);
  customTextBox.update();
  customCheckButton.update();
  customNewQuestionButton.update();

  if(customGenerateQuestion){
    var temp=customQuestions[Math.floor(random(customQuestions.length))];
    console.log(temp);
    customQuestion=temp.split(";");
    customGenerateQuestion = false;
  }

  if(customNewQuestionButton.clicked){
      customGenerateQuestion = true;
  }

  if(customCheckButton.clicked){
    if(customTextBox.data==customQuestion[1]){
      customFeedback="Correct!";
    }else{
      customFeedback="Try again"
    }

    customExplanation=customQuestion[2]+"\nAnswer: "+customQuestion[1];
  }

  text(customQuestion[0],320,120);
  text("Feedback: " + customFeedback,320,325);

  text("Work/Explanation:",800,200);
  text(customExplanation,800,250);
}
