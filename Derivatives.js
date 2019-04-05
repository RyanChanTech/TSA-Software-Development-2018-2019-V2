var derivativesTextBox = new TextBox(320,230,350,40,30);
var derivativesCheckButton = new Button(380,280,180,40,"Check",30,xOffset=50);
var derivativesNewQuestionButton = new Button(370,330,220,40,"New Question",30,xOffset=15);
var derivativesGenerateQuestion = true;
var derivativesQuestion = "";
var derivativesAnswer = "";
var derivativesFeedback="";
var derivativesExplanation="";
var derivatiesShowExplanation = false;

function derivatives(){
  fill(255,238,153,100);
  noStroke();
  rect(775,155,575,525,20,0,0,20);
  stroke(0);
  derivativesTextBox.update();
  derivativesCheckButton.update();
  derivativesNewQuestionButton.update();

  if(derivativesGenerateQuestion == true){
    var rand = Math.floor(Math.random() * 100);
    if(rand<50){
      var temp1 = derivativesPowerRule();
      derivativesQuestion=temp1[0];
      derivativesAnswer=temp1[1];
      derivativesExplanation=temp1[2];
    }else{
      var pr = derivativesPowerRule();
      var temp2 = derivativesChainRule(pr[0],pr[1]);
      derivativesQuestion=temp2[0];
      derivativesAnswer=temp2[1];
      derivativesExplanation=temp2[2];
    }
    derivativesGenerateQuestion = false;
  }

  if(derivativesNewQuestionButton.clicked==true){
    derivativesQuestion="";
    derivativesAnswer="";
    derivativesGenerateQuestion = true;
    derivatiesShowExplanation=false;
  }
  if(derivativesCheckButton.clicked==true){
    derivatiesShowExplanation=true;
    if(derivativesTextBox.data==derivativesAnswer){
      derivativesFeedback="Correct!";
    }else{
      derivativesFeedback="Try again"
    }
  }

  text("Find the derivative:",320,120);
  text(" d\n"+"dx",320,160);
  strokeWeight(2);
  line(320,170,350,170)
  strokeWeight(1); //reset to default value
  text("("+derivativesQuestion+") = ?",355,175);
  text("Feedback: " + derivativesFeedback,320,410);
  text("Work/Explanation:",790,195);
  if(derivatiesShowExplanation){
    text(derivativesExplanation,790,245);
  }
}

function derivativesPowerRule(){
  var question = "";
  var answer = "";

  var n = Math.floor(Math.random() * 3+1)

  for(var i = 0;i<n;i++){
    var rand = Math.floor(Math.random() * 8+3)
    question+="x^" + rand;
    answer += ""+rand + "x^" + (rand-1);
    if(i != (n-1)){
      question+="+";
      answer+="+";
    }
  }
  var explanation = "Step 1-Power & Addition Rules:\n"+answer;
  return [question,answer,explanation];
}

function derivativesChainRule(insideQuestion,insideAnswer){
  var question = "";
  var answer = "";
  var explanation = "";
  var rand = Math.floor(Math.random() * 100);
  if(rand<=33){
    question="sin("+insideQuestion+")";
    answer="cos("+insideQuestion+")("+insideAnswer+")"
    explanation = "Step 1-Chain Rule:\ncos("+insideQuestion+")*d/dx("+insideQuestion+")"+
                    "\n\nStep 2-Power & Addition Rules:\n"+answer;
  }else{
    question="ln("+insideQuestion+")";
    answer="("+insideAnswer+")"+"/("+insideQuestion+")";
    explanation = "Step 1-Chain Rule:\n1/("+insideQuestion+")*d/dx("+insideQuestion+")"+
                    "\n\nStep 2-Power & Addition Rules:\n"+answer;
  }
  return [question,answer,explanation];
}
