var customTextBox = new TextBox(320,150,350,40,30);
var customCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var customNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);

var customGenerateQuestion = true;
var customQuestion;//customQuestion[0]=Question,customQuestion[1]=Answer,customQuestion[2]=Explanation

var customExplanation="";
var customFeedback="";

var temp;
var customTest = [];
var repeat = true;
var explanationTemp = [];

function customTyping(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  customTextBox.update();
  customCheckButton.update();
  customNewQuestionButton.update();

  if(customGenerateQuestion){
    customGenerateQuestion = false;
    while (repeat == true){
      repeat = false;
      temp=customQuestions[Math.floor(random(customQuestions.length))];
      customQuestion=temp.split(";");
      //test if the question already appeared
      for (var i = 0;i<customTest.length;i++){
        if (temp == customTest[i]){repeat = true;}
      }
    }
    customTest.push(temp); repeat = true;//console.log(customTest);
    //put !! where you wanna add another line
    explanationTemp = customQuestion[2].split("!!");
    customQuestion[2]="";
    for (var j = 0;j<explanationTemp.length;j++){
      customQuestion[2] += explanationTemp[j] + "\n";
    }
  }

  if(customNewQuestionButton.clicked){
    customTextBox.data="";
    customExplanation = "";
    customFeedback = "";
    customGenerateQuestion = true;
  }

  if(customCheckButton.clicked){
    if(customTextBox.data.toLowerCase().trim()==customQuestion[1].toLowerCase().trim()){
      customFeedback="Correct!";
    }else{
      customFeedback="Try again"
    }

    customExplanation="Answer: "+customQuestion[1];
    if (customQuestion[2] != customQuestion[1]){
      customExplanation = customQuestion[2] + "\n" + customExplanation;
    }
  }

  text(customQuestion[0],320,120);
  text("Feedback: " + customFeedback,320,330);

  text("Work/Explanation:",760,200);
  text(customExplanation,760,250);
}
