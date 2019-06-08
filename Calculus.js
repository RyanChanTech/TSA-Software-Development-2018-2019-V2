function DifficultySwitch(x,y,w,h,t,ts,xOffset=5){
  this.switchedOn = false;

  this.update = function(){
    if(!this.switchedOn){
      fill(255);
    }else{
      fill(239, 143, 143);
    }
    noStroke();
    rect(x,y,w,h,10);
    stroke(0);
    textSize(ts);
    fill(0);
    text(t,x+xOffset,y+h-15);
    if(mouseIsPressed&&mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
      this.switchedOn = true;
    }else if(mouseIsPressed&&mouseX>320&&mouseX<740&&mouseY>500&&mouseY<755&&
      (mouseX<x||mouseX>x+w||mouseY<y||mouseY>y+h)){
      this.switchedOn = false;
    }
  }
}
//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var calculusTextBox = new TextBox(320,260,350,40,30);
var calculusCheckButton = new Button(380,310,180,40,"Check",30,xOffset=50);
var calculusNewQuestionButton = new Button(370,360,220,40,"New Question",30,xOffset=15);
var singleCalculus = new DifficultySwitch(355,550,350,50,"Single Variable Calculus",30,xOffset=15);
var multiCalculus = new DifficultySwitch(355,620,350,50,"Multivariable Calculus",30,xOffset=28);
var calculusGenerateQuestion = true; calculusShowExplanation = false;
var integralsQuestion = ""; integralsXQuestion = ""; integralsYQuestion = ""; integralsZQuestion = "";
var integralsAnswer = ""; integralsXAnswer = ""; integralsYAnswer = ""; integralsZAnswer = "";
var integralsExplanation = ""; integralsTempExplanation = ""; calculusFeedback="";
var integalsXNumericAnswer = 0; integalsYNumericAnswer = 0; integalsZNumericAnswer = 0;
var integralsXAnswerCoefficient = 0; integralsYAnswerCoefficient = 0; integralsZAnswerCoefficient = 0;
var integralsXQuestionCoefficient = 0; integralsYQuestionCoefficient = 0; integralsZQuestionCoefficient = 0;
var integralsType = 0; integralsNumeric = 0; temp1 = 0; temp2 = 0;
var integralsXSubType = 0; integralsYSubType = 0; integralsZSubType = 0;
var integralsXCoefficient = 0; integralsYCoefficient = 0; integralsZCoefficient = 0;
var lowerBound1 = 0; upperBound1 = 0; lowerBound2 = 0; upperBound2 = 0; lowerBound3 = 0; upperBound3 = 0;
var derivativesPowers = [2,3,4,5,6,7,8,9,10]; calculusType = 0;
var derivativesQuestion = ""; derivativesAnswer = "";
var derivativesFeedback=""; derivativesExplanation="";

function calculus(){
  fill(255,238,153,100); noStroke(); rect(765,155,585,600,20,0,0,20);
  fill(255,206,206); rect(320,495,420,205,20,20,20,20); stroke(0);
  calculusTextBox.update();
  calculusCheckButton.update();
  calculusNewQuestionButton.update();
  textSize(20);
  text("Choose your difficulty: (SVC by default)",355,530); textSize(30);

  if (calculusSwitch.switchedOn==true){
    singleCalculus.update();
    multiCalculus.update();
  }

  if(calculusGenerateQuestion == true){
    //single or double or triple
    if (multiCalculus.switchedOn==true){
      integralsType = Math.floor(random(0,3));
    } else {integralsType = Math.floor(random(0,1));}
    //differentiation or integration
    calculusType = Math.floor(random(0,2));

    if (calculusType == 0){
      //polynomial or e or sin or cos or const
      integralsXSubType = Math.floor(random(0,5));
      integralsYSubType = Math.floor(random(0,3));
      integralsZSubType = Math.floor(random(0,3));

      integralsXCoefficient = Math.floor(random(4,7));
      integralsYCoefficient = Math.floor(random(4,7));
      integralsZCoefficient = Math.floor(random(4,7));
      //definite or indef
      integralsNumeric = Math.floor(random(0,2));
      lowerBound1 = Math.floor(random(-5,0));
      upperBound1 = Math.floor(random(0,5));
      lowerBound2 = Math.floor(random(-5,0));
      upperBound2 = Math.floor(random(0,5));
      lowerBound3 = Math.floor(random(-5,0));
      upperBound3 = Math.floor(random(0,5));

      integralsExplanation="Find the antiderivative F of the integrand with respect\n   to x applying the constant rule:\n       ";

      integralsXQuestionCoefficient = integralsXCoefficient;
      if (integralsXSubType == 0){integralsXAnswerCoefficient = 1;}
      else {integralsXAnswerCoefficient = integralsXCoefficient;}
      if (integralsXSubType == 0){
        integralsXQuestion =/*integralsXCoefficient*/"(x^"+(integralsXCoefficient-1)+")";
        integralsXAnswer = "(x^" + (integralsXCoefficient) + ")";
        integralsXNumericAnswer= +(pow(upperBound1,integralsXCoefficient)-pow(lowerBound1,integralsXCoefficient)).toFixed(2);
      } else if (integralsXSubType == 1){
        integralsXQuestion = /*integralsXCoefficient*/ "(e^x)";
        integralsXAnswer = /*integralsXCoefficient +*/ "(e^x)";
        integralsXNumericAnswer = +(exp(upperBound1)-exp(lowerBound1)).toFixed(2);
      } else if (integralsXSubType == 2){
        integralsXQuestion = /*integralsXCoefficient*/ "sin(x)";
        integralsXAnswer = /*"-" + integralsXCoefficient +*/ "cos(x)";
        integralsXNumericAnswer= +(-cos(upperBound1)+cos(lowerBound1)).toFixed(2);
      } else if (integralsXSubType == 3){
        integralsXQuestion = /*integralsXCoefficient*/ "cos(x)";
        integralsXAnswer = /*integralsXCoefficient +*/ "sin(x)";
        integralsXNumericAnswer = +(sin(upperBound1)-sin(lowerBound1)).toFixed(2);
      } else if (integralsXSubType == 4){
        integralsXQuestion = /*integralsXCoefficient*/"";
        integralsXAnswer = /*integralsXCoefficient +*/ "x";
        integralsXNumericAnswer = +(upperBound1-lowerBound1).toFixed(2);
      }

      integralsYQuestionCoefficient = integralsYCoefficient;
      if (integralsYSubType == 0){integralsYAnswerCoefficient = 1;}
      else {integralsYAnswerCoefficient = integralsYCoefficient;}
      if (integralsYSubType == 0){
        integralsYQuestion=/*integralsYCoefficient*/"(y^"+(integralsYCoefficient-1)+")";
        integralsYAnswer = "(y^" + integralsYCoefficient + ")";
        integralsYNumericAnswer= +(pow(upperBound2,integralsYCoefficient)-pow(lowerBound2,integralsYCoefficient)).toFixed(2);
      } else if (integralsYSubType == 1){
        integralsYQuestion = /*integralsYCoefficient + */"(e^y)";
        integralsYAnswer = /*integralsYCoefficient +*/ "(e^y)";
        integralsYNumericAnswer = +(exp(upperBound2)-exp(lowerBound2)).toFixed(2);
      } else if (integralsYSubType == 2){
        integralsYQuestion = /*integralsYCoefficient*/"";
        integralsYAnswer = /*integralsYCoefficient +*/ "y";
        integralsYNumericAnswer = +(upperBound2-lowerBound2).toFixed(2);
      }

      integralsZQuestionCoefficient = integralsZCoefficient;
      if (integralsZSubType == 0){integralsZAnswerCoefficient = 1;}
      else {integralsZAnswerCoefficient = integralsZCoefficient;}
      if (integralsZSubType == 0){
        integralsZQuestion=/*integralsZCoefficient +*/"(z^"+(integralsZCoefficient-1)+")";
        integralsZAnswer = "(z^" + integralsZCoefficient + ")";
        integralsZNumericAnswer= +(pow(upperBound3,integralsZCoefficient)-pow(lowerBound3,integralsZCoefficient)).toFixed(2);
      } else if (integralsZSubType == 1){
        integralsZQuestion = /*integralsZCoefficient +*/ "(e^z)";
        integralsZAnswer = /*integralsZCoefficient +*/ "(e^z)";
        integralsZNumericAnswer = +(exp(upperBound3)-exp(lowerBound3)).toFixed(2);
      } else if (integralsZSubType == 2){
        integralsZQuestion = /*integralsZCoefficient*/"";
        integralsZAnswer = /*integralsZCoefficient +*/ "z";
        integralsZNumericAnswer = +(upperBound3-lowerBound3).toFixed(2);
      }
      //if the integral is double or triple, it's always definite
      if (integralsType == 0){
        integralsQuestion = (integralsXQuestionCoefficient) + integralsXQuestion;
        if (integralsNumeric==0){
          if (integralsXSubType == 0){
            integralsAnswer = integralsXAnswer + " + C";
          } else {
            integralsAnswer=integralsXAnswerCoefficient+integralsXAnswer + " + C";
            integralsXAnswer = integralsXAnswerCoefficient + integralsXAnswer; }
          //add the - minus sign for the case when the integral is indefinite, single and sin
          if(integralsXSubType==2){integralsAnswer="-"+integralsAnswer;integralsXAnswer="-"+integralsXAnswer;}
          integralsExplanation+=integralsXAnswer+"\nThen add the constant:\n      "+integralsAnswer;
        } else {
          integralsAnswer= +(integralsXAnswerCoefficient*integralsXNumericAnswer).toFixed(2);
          if (integralsXSubType == 0){
            integralsExplanation+=integralsXAnswer+
            "\nThen use the Fundamental Theorem of Calculus with\n   respect to x:\n       F(b) - F(a) = "+
            "F("+upperBound1+") - F("+lowerBound1+")\n    = "+integralsAnswer;
          } else {
            integralsExplanation+=integralsXAnswerCoefficient+integralsXAnswer+
            "\nThen use the Fundamental Theorem of Calculus with\n   respect to x:\n       F(b) - F(a) = "+
            "F("+upperBound1+") - F("+lowerBound1+")\n    = "+integralsAnswer;
          }
        }
      }
      if (integralsType == 1){
        integralsQuestion=(integralsXQuestionCoefficient*integralsYQuestionCoefficient)+integralsXQuestion+integralsYQuestion;
        integralsAnswer= +(integralsXAnswerCoefficient*integralsYAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer).toFixed(2);
        if (integralsXSubType == 0){
          temp1 = +(integralsYQuestionCoefficient).toFixed(2);
          temp2 = +(integralsXNumericAnswer*integralsYQuestionCoefficient).toFixed(2);
        } else {
          temp1 = +(integralsXAnswerCoefficient*integralsYQuestionCoefficient).toFixed(2);
          temp2 = +(integralsXNumericAnswer*integralsXAnswerCoefficient*integralsYQuestionCoefficient).toFixed(2);
        }
        integralsTempExplanation=temp1+integralsXAnswer+integralsYQuestion+
        "\nThen use the Fundamental Theorem of Calculus with\n   respect to x:\n       "+
        temp1+integralsYQuestion+"(F(b) - F(a)) = "+temp1+integralsYQuestion+
        "(F("+upperBound1+") - F("+lowerBound1+"))\n    = "+temp2+integralsYQuestion+"\n";
        if (integralsYSubType == 0){
          temp1 = +(integralsXAnswerCoefficient*integralsXNumericAnswer).toFixed(2);
        } else {
          temp1 = +(integralsXAnswerCoefficient*integralsXNumericAnswer*integralsYAnswerCoefficient).toFixed(2);
        }
        integralsTempExplanation+=
        "Find the antiderivative F of the new integrand with\n   respect to y applying the constant rule:\n      "+
        temp1+integralsYAnswer+"\nThen use the Fundamental Theorem of Calculus with\n   respect to y:\n      "+
        temp1+"(F(b) - F(a)) = "+temp1+"(F("+upperBound2+") - F("+lowerBound2+
        "))\n    = "+integralsAnswer;
        if (integralsXSubType == 2){
          integralsExplanation += "-" + integralsTempExplanation;
        } else { integralsExplanation += integralsTempExplanation; }
      }

      if (integralsType == 2){
        integralsQuestion=(integralsXQuestionCoefficient*integralsYQuestionCoefficient*integralsZQuestionCoefficient)+integralsXQuestion+integralsYQuestion+integralsZQuestion;
        integralsAnswer= +(integralsXAnswerCoefficient*integralsYAnswerCoefficient*integralsZAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer*integralsZNumericAnswer).toFixed(2);
        if (integralsXSubType == 0){
          temp1 = +(integralsYQuestionCoefficient*integralsZQuestionCoefficient).toFixed(2);
          temp2 = +(integralsXNumericAnswer*integralsYQuestionCoefficient*integralsZQuestionCoefficient).toFixed(2);
        } else {
          temp1 = +(integralsXAnswerCoefficient*integralsYQuestionCoefficient*integralsZQuestionCoefficient).toFixed(2);
          temp2 = +(integralsXNumericAnswer*integralsXAnswerCoefficient*integralsYQuestionCoefficient*integralsZQuestionCoefficient).toFixed(2);
        }
          integralsTempExplanation=temp1+integralsXAnswer+integralsYQuestion+integralsZQuestion+
          "\nThen use the Fundamental Theorem of Calculus with\n   respect to x:\n       "+
          temp1+integralsYQuestion+integralsZQuestion+"(F(b) - F(a)) = "+temp1+
          integralsYQuestion+integralsZQuestion+"(F("+upperBound1+") - F("+lowerBound1+
          "))\n    = "+temp2+integralsYQuestion+integralsZQuestion+"\n";
        if (integralsYSubType == 0){
          temp1 = +(integralsXAnswerCoefficient*integralsXNumericAnswer*integralsZQuestionCoefficient).toFixed(2);
          temp2 = +(integralsXAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer*integralsZQuestionCoefficient).toFixed(2);
        } else {
          temp1 = +(integralsXAnswerCoefficient*integralsXNumericAnswer*integralsYAnswerCoefficient*integralsZQuestionCoefficient).toFixed(2);
          temp2 = +(integralsXAnswerCoefficient*integralsXNumericAnswer*integralsYAnswerCoefficient*integralsYNumericAnswer*integralsZQuestionCoefficient).toFixed(2);
        }
        integralsTempExplanation+=
        "Find the antiderivative F of the new integrand with\n   respect to y applying the constant rule:\n       "+
        temp1+integralsYAnswer+integralsZQuestion+"\nThen use the Fundamental Theorem of Calculus with\n   respect to y:\n       "+
        temp1+integralsZQuestion+"(F(b) - F(a)) = "+temp1+integralsZQuestion+"(F("+
        upperBound2+") - F("+lowerBound2+"))\n    = "+temp2+integralsZQuestion+"\n";
        if (integralsZSubType == 0){
          temp1 = +(integralsXAnswerCoefficient*integralsYAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer).toFixed(2);
        } else {
          temp1 = +(integralsXAnswerCoefficient*integralsYAnswerCoefficient*integralsXNumericAnswer*integralsYNumericAnswer*integralsZAnswerCoefficient).toFixed(2);
        }
        integralsTempExplanation+="Find the antiderivative F of the new integrand with\n   respect to z applying the constant rule:\n       "+
        temp1+integralsZAnswer+"\nThen use the Fundamental Theorem of Calculus with\n   respect to z:\n       "+
        temp1+"(F(b) - F(a)) = "+temp1+"(F("+upperBound3+") - F("+lowerBound3+"))\n    = "+integralsAnswer;
        if (integralsXSubType == 2){
          integralsExplanation += "-" + integralsTempExplanation;
        } else { integralsExplanation += integralsTempExplanation; }
      }

      if (integralsType>=0){integralsQuestion += "dx"};
      if (integralsType>=1){integralsQuestion += "dy"};
      if (integralsType==2){integralsQuestion += "dz"};
    } else {
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
    }
    calculusGenerateQuestion = false;
  }
  /*If the integralsNewQuestionButon is clicked, set calculusGenerateQuestion
  to true, so it generates a new question in the next frame*/
  if(calculusNewQuestionButton.clicked==true){
    calculusTextBox.data="";
    calculusGenerateQuestion = true;
    calculusShowExplanation = false; }
  /*check if the user's answer is right or not when the calculusCheckButton is clicked*/
  if(calculusCheckButton.clicked==true){
    calculusShowExplanation = true;
    if((calculusTextBox.data)==integralsAnswer){calculusFeedback="Correct!";}
    else {calculusFeedback="Try again"}
  }

  function derivativesPowerRule(){
    var question = ""; answer = ""; n = Math.floor(Math.random() * 3+1)
    for(var i = 0;i<n;i++){
      /*this picks a random number from the derivativesPowers list, then remove that number from the list,
      so it won't be picked again.*/
      var powerSelection = Math.floor(random(0,derivativesPowers.length));
      var rand = derivativesPowers[powerSelection];
      derivativesPowers.splice(powerSelection,1);
      question+="x^" + rand; answer += ""+rand + "x^" + (rand-1);
      if(i != (n-1)){ question+="+"; answer+="+"; }
    }
    derivativesPowers = [2,3,4,5,6,7,8,9,10];
    var explanation = "Power & Addition Rules:\n"+answer;
    return [question,answer,explanation];
  }

  function derivativesChainRule(insideQuestion,insideAnswer){
    var question = ""; answer = ""; explanation = "";
    var rand = Math.floor(Math.random() * 100);
    if(rand<=33){
      question="sin("+insideQuestion+")";
      answer="cos("+insideQuestion+")("+insideAnswer+")"
      explanation = "Step 1- Chain Rule:\ncos("+insideQuestion+")*d/dx("+insideQuestion+")"+
                      "\n\nStep 2- Power & Addition Rules:\n"+answer;
    }else{
      question="ln("+insideQuestion+")";
      answer="("+insideAnswer+")"+"/("+insideQuestion+")";
      explanation = "Step 1- Chain Rule:\n1/("+insideQuestion+")*d/dx("+insideQuestion+")"+
                      "\n\nStep 2- Power & Addition Rules:\n"+answer;
    }
    return [question,answer,explanation];
  }

  //Display the output, feedback, and explanation
  text("Feedback: ",320,440);
  text("Work/Explanation:",800,200);
  if (calculusType==0){
    if (calculusShowExplanation){
      textSize(20); text(integralsExplanation,800,230); textSize(30);
      text(calculusFeedback,470,440); }
    text("Evaluate the following integral:",320,120);
    //print integral signs and bounds
    if (integralsType>=0){
      textSize(60); text("∫",385,210);
      if (integralsNumeric==1 || integralsType >=1){
        textSize(18); text(lowerBound1,400,235); text(upperBound1,418,170); }
      textSize(30);
    }
    if (integralsType>=1){
      textSize(60); text("∫",355,210); textSize(18);
      text(lowerBound2,370,235); text(upperBound2,388,170); textSize(30);  }
    if (integralsType==2){
      textSize(60); text("∫",325,210); textSize(18);
      text(lowerBound3,340,235); text(upperBound3,358,170); textSize(30); }
    textSize(28); text(integralsQuestion,415,210); textSize(30);
  } else {
    text("Find the derivative:",320,120); text(" d\n"+"dx",340,180);
    strokeWeight(2);line(340,190,370,190);strokeWeight(1); //reset to default value
    text("("+derivativesQuestion+") = ?",375,195);
    if (calculusShowExplanation){
      text(derivativesFeedback,470,410);
      text(derivativesExplanation,800,245);
    }
  }
}
