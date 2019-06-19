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
    var xQuestionPos = [180,280,380,480,580]; xAnswerPos = [180,280,380,480,580];
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
      customTest.push(temp); repeat = true;//console.log(customTest);
      var xQuestionPosIndex = Math.floor(random(xQuestionPos.length));
      if (question[0].length>75){
        matchingQuestionMovables.push(new Movable(620,xQuestionPos[xQuestionPosIndex],question[0].length*9,50,question[0],20,xOffset=20,onColor=[16,163,209],offColor=[255,206,206]));
      } else {
        matchingQuestionMovables.push(new Movable(620,xQuestionPos[xQuestionPosIndex],question[0].length*9+60,50,question[0],20,xOffset=20,onColor=[16,163,209],offColor=[255,206,206]));
      }
      xQuestionPos.splice(xQuestionPosIndex,1);
      var xAnswerPosIndex = Math.floor(random(xAnswerPos.length));
      matchingAnswerMovables.push(new Movable(320,xAnswerPos[xAnswerPosIndex],question[1].length*9+60,50,question[1],20,xOffset=20,onColor=[16,163,209],offColor=[239,143,143]));
      xAnswerPos.splice(xAnswerPosIndex,1);
    }
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
