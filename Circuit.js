var circuitButtons = [new Button(320,430,220,40,"A) ",30,xOffset=20),new Button(320,480,220,40,"B) ",30,xOffset=20),new Button(320,530,220,40,"C) ",30,xOffset=20)];
var circuitAnswerButtonIndex = 0;

var circuitNewQuestionButton = new Button(320,580,220,40,"New Question",30,xOffset=15);
var circuitFeedback="";
var circuitExplanation="";
var circuitQuestion="";
var circuitTempExplanation="";

var circuitGenerateQuestion = true;

var resistorRandom=0;
var capacitorRandom=0;
var circuitResistorVars=[];
var circuitCapacitorVars=[];
var circuitR=0;
var circuitC=0;

var circuitTemplate;
var resistorComponents=[];
var capacitorComponents=[];

function circuit(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,20,0,0,20);
  stroke(0);
  circuitButtons[0].update();
  circuitButtons[1].update();
  circuitButtons[2].update();
  circuitNewQuestionButton.update();

  if(circuitGenerateQuestion){
    circuitButtons[0].text= "A) ";
    circuitButtons[1].text= "B) ";
    circuitButtons[2].text= "C) ";
    resistorRandom=Math.floor(random(0,2));
    if(resistorRandom==0){
      circuitResistorVars=[Math.round(random(200,2000))]//[0]=R1
      circuitR=circuitResistorVars[0];
    }else if(resistorRandom==1){
      circuitResistorVars=[Math.round(random(200,1000)),Math.round(random(200,1000)),Math.round(random(200,1000))]//[0]=R1,[1]=R2,[2]=R3
      circuitR=(circuitResistorVars[2]*(circuitResistorVars[0]+circuitResistorVars[1]))/(circuitResistorVars[0]+circuitResistorVars[1]+circuitResistorVars[2]).toFixed(2);
    }
    capacitorRandom=Math.floor(random(0,2));
    if(capacitorRandom==0){
      circuitCapacitorVars=[Math.round(random(15,50))]//[0]=R1
      circuitC=circuitCapacitorVars[0];
    }else if(capacitorRandom==1){
      circuitCapacitorVars=[Math.round(random(1,20)),Math.round(random(1,20)),Math.round(random(1,20))]//[0]=F1,[1]=F2,[2]=F3
      circuitC=circuitCapacitorVars[2]+((circuitCapacitorVars[0]*circuitCapacitorVars[1])/(circuitCapacitorVars[0]+circuitCapacitorVars[1]));
    }

    var questionType=Math.floor(Math.random() * 3);
    var answer;
    if(questionType==0){
      circuitQuestion="Which is closest to the time constant of the circuit?"
      answer=circuitR*circuitC;

      if(resistorRandom==0){
        circuitTempExplanation+="Step 1- the total resistance is just R1";
      }else if(resistorRandom==1){
        circuitTempExplanation+="Step 1- Use (R3(R1+R2))/(R3+R2+R1) to find the total resistance";
      }
      if(capacitorRandom==0){
        circuitTempExplanation+="\n\nStep 2- the total capacitance is just C1";
      }else if(capacitorRandom==1){
        circuitTempExplanation+="\n\nStep 2- Use C3+(C1*C2)/(C1+C2) to find the total capacitance";
      }
      circuitTempExplanation+="\n\nStep 3- Multiply the total resistance and the total capacitance\n           to get "+answer.toFixed(2);
    }else if(questionType==1){
      circuitQuestion="Which is closest to the total resistance of the circuit?"
      answer=circuitR;

      if(resistorRandom==0){
        circuitTempExplanation+="Step 1- the total resistance is just R1, which is "+answer.toFixed(2);
      }else if(resistorRandom==1){
        circuitTempExplanation+="Step 1- Use (R3(R1+R2))/(R3+R2+R1) to find the total resistance\n           which is "+answer.toFixed(2);
      }
    }else{
      circuitQuestion="Which is closest to the total capacitance of the circuit?";
      answer=circuitC;

      if(capacitorRandom==0){
        circuitTempExplanation+="Step 1- the total capacitance is just C1, which is "+answer.toFixed(2);
      }else if(capacitorRandom==1){
        circuitTempExplanation+="Step 1- Use C3+(C1*C2)/(C1+C2) to find the total capacitance\n           which is"+answer.toFixed(2);
      }
    }

    circuitAnswerButtonIndex = Math.floor(Math.random() * 3);
    circuitButtons[circuitAnswerButtonIndex].text+=answer.toFixed(2);
    for(var i=0;i<3;i++){
      if(i!=circuitAnswerButtonIndex){
        circuitButtons[i].text+=random(answer/1.5,answer*1.5).toFixed(2);
      }
    }
    circuitGenerateQuestion=false;
  }

  if(circuitNewQuestionButton.clicked){
    circuitGenerateQuestion=true;
    circuitExplanation="";
    circuitTempExplanation="";
  }

  if(circuitButtons[circuitAnswerButtonIndex].clicked){
    circuitFeedback="Correct!";
    circuitExplanation=circuitTempExplanation;
  }else if(circuitButtons[0].clicked||circuitButtons[1].clicked||circuitButtons[2].clicked){
    circuitFeedback="Try again";
    circuitExplanation=circuitTempExplanation;
  }

  image(circuitTemplate,345,130);
  image(resistorComponents[resistorRandom],214,190);
  image(capacitorComponents[capacitorRandom],492,190);
  textSize(20);
  if(resistorRandom==0){
    text(circuitResistorVars[0]+"Ω",390,280);
  }else if(resistorRandom==1){
    text(circuitResistorVars[0]+"Ω",330,265);
    text(circuitResistorVars[1]+"Ω",330,320);
    text(circuitResistorVars[2]+"Ω",435,280);
  }
  if(capacitorRandom==0){
    text(circuitCapacitorVars[0]+"F",590,290);
  }else if(capacitorRandom==1){
    text(circuitCapacitorVars[0]+"F",540,260);
    text(circuitCapacitorVars[1]+"F",540,315);
    text(circuitCapacitorVars[2]+"F",650,280);
  }
  textSize(30);
  text("Work/Explanation:",800,200);
  textSize(20);
  text(circuitExplanation,750,235)
  text(circuitQuestion,320,110);
  textSize(30);
  text("Feedback:" + circuitFeedback,320,660);
}

function loadCircuitImages(){
  circuitTemplate=loadImage("images/circuit_template_3.png");
  resistorComponents.push(loadImage("images/resistor1.png"));
  resistorComponents.push(loadImage("images/resistor2.png"));
  capacitorComponents.push(loadImage("images/capacitor1.png"));
  capacitorComponents.push(loadImage("images/capacitor2.png"));
}
