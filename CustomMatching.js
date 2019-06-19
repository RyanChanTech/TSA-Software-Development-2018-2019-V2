var matchingNewQuestionsButton = new Button(320,100,230,40,"New Questions",30,xOffset=15);

var matchingGenerateQuestions = true;

var matchingQuestionMovables=[];
var matchingAnswerMovables=[];

var question;
var temp;
var customTest = [];
var repeat = true;

function customMatching(){
  matchingNewQuestionsButton.update();

  if(matchingGenerateQuestions){
    var possiblePositions=[[320,160],[320,290],[320,420],[320,550],[320,680],[670,100],[670,230],[670,360],[670,490],[670,620]];
    matchingQuestionMovables=[];
    matchingAnswerMovables=[];

    for(var i=0;i<5;i++){
      while (repeat == true){
        repeat = false;
        temp=customQuestions[Math.floor(random(customQuestions.length))];
        question=temp.split(";");
        //test if the question already appeared
        for (var j = 0;j<customTest.length;j++){
          if (temp == customTest[j]){repeat = true;}
        }
      }
      customTest.push(temp); repeat = true;console.log(customTest);

      var positionIndex=Math.floor(random(0,possiblePositions.length));
      matchingQuestionMovables.push(new Movable(possiblePositions[positionIndex][0],possiblePositions[positionIndex][1],question[0].length*9+60,50,question[0],20));
      possiblePositions.splice(positionIndex,1);
      positionIndex=Math.floor(random(0,possiblePositions.length));
      matchingAnswerMovables.push(new Movable(possiblePositions[positionIndex][0],possiblePositions[positionIndex][1],question[1].length*9+60,50,question[1],20));
      possiblePositions.splice(positionIndex,1);
    }
    //console.log(temp);
    matchingGenerateQuestions = false;
  }

  for(var i=0;i<matchingQuestionMovables.length;i++){
    matchingQuestionMovables[i].update();
    matchingAnswerMovables[i].update();

    if(matchingQuestionMovables[i].touching(matchingAnswerMovables[i])){
      matchingQuestionMovables.splice(i,1);
      matchingAnswerMovables.splice(i,1);
    }
  }

  if(matchingNewQuestionsButton.clicked){
    matchingGenerateQuestions = true;
  }
}
