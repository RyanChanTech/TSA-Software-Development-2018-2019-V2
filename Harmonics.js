var harmonicsTextBox = new TextBox(320,150,350,40,30);
var harmonicsCheckButton = new Button(380,200,180,40,"Check",30,xOffset=50);
var harmonicsNewQuestionButton = new Button(370,250,220,40,"New Question",30,xOffset=15);
var harmonicsGenerateQuestion = true;
var harmonicsTheta=0;
var harmonicsMass=0;
var harmonicsLength=0;
var harmonicsAnswer = 0;
var harmonicsTau = 0;
var harmonicsFeedback="";
var harmonicsExplanation = "";
var displace=0;

function harmonics(){
  fill(255,238,153,100);
  noStroke();
  rect(735,155,615,525,10,0,0,10);
  stroke(0);

  harmonicsTextBox.update();
  harmonicsCheckButton.update();
  harmonicsNewQuestionButton.update();

  if(harmonicsGenerateQuestion == true){
    harmonicsTheta=int(random(235,325));
    harmonicsLength=(random(0,10));
    harmonicsMass=(random(0,45));
    harmonicsTau= 2*3.14*sqrt(harmonicsLength/9.8)
    console.log("length: "+harmonicsLength);
    console.log("tau: "+harmonicsTau);

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

    //harmonicsExplanation="Step 1-Subtract: " + harmonicsRandomNumberTwo+" - "+harmonicsRandomNumberOne+" = "+harmonicsAnswer;
  }

  var yOffset=50;
  var amplitudeMultiplier=30;
  var periodMultiplier=40;
  var trans=[350,120];
  displace+=.1;
  for(var x=0;x<250;x++){
    var point1=[x+trans[0], 30*sin(radians(x*3)+displace)+trans[1]]
    //var point2=[x+1+trans[0], 30*sin(radians((x+1)*3)+displace)+trans[1]]
    //push();
    //strokeWeight(2);
    point(point1[0],point1[1]);
    //pop();
    //line(point1[0],point1[1],point2[0],point2[1]);
  }
  //text(harmonicsRandomNumberOne + " + x = " + harmonicsRandomNumberTwo,320,120);
  text("Feedback: " + harmonicsFeedback,320,330);

  text("Work/Explanation:",800,200);
  text(harmonicsExplanation,800,250);
}
