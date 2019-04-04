var stoichTextBox = new TextBox(320,190,350,40,30);
var stoichCheckButton = new Button(320,230,350,40,"Check",30);
var stoichNewQuestionButton = new Button(320,270,350,40,"New Question",30);
var stoichGenerateQuestion = true;
var stoichrandom = 0;
var hrand = 0;
var stoichAnswer = 0;
var stoichFeedback="";
var stoichExplanation = "";
var varchoice = 0
var stoichExplanation="First, Balance carbon on each side \n Second, Balance Hydrogen on each side \n Third, Balance oxygen on each side \n (easily done with W + Z/2)\n Finally, Multiply by 2 if you have a fraction";
var stoichShowExplanation = false;

function stoich(){
  stoichTextBox.update();
  stoichCheckButton.update();
  stoichNewQuestionButton.update();

  if(stoichGenerateQuestion==true){
    stoichrandom = Math.floor(Math.random() * 10) + 1;
    stoichShowExplanation = false
    opchoice = Math.random();
    if(opchoice < .33){
      hrand = 2 *stoichrandom -2
    } else if (opchoice > .66){
      hrand = 2 *stoichrandom +2
    } else {
      hrand = 2 *stoichrandom
    }


    varchoice = Math.random()

    if(varchoice < .25){
      varchoice = "W"
    } else if (varchoice < .5){
      varchoice = "X"
    } else if (varchoice < .75){
      varchoice = "Y"
    } else {
      varchoice = "Z"
    }

    stoichAnswer = solve(stoichrandom,hrand,varchoice)

    stoichGenerateQuestion = false;

  }

  if(stoichNewQuestionButton.clicked==true){
    stoichGenerateQuestion = true;
  }

  if(stoichCheckButton.clicked==true){
    stoichShowExplanation = true
    if(parseInt(stoichTextBox.data)==stoichAnswer){
      stoichFeedback="Correct!";

    }else{
      stoichFeedback="Try again"
    }
}
  if(stoichShowExplanation){
    text(stoichExplanation,780,220);
  }

  text("WC"+stoichrandom+"H"+hrand + " + XO2 = YCO2 + Z H20" ,320,120)
  text( "What does " + varchoice + " equal?", 320, 160)
  text("Feedback: " + stoichFeedback,320,350);

}

var w = 1
var x = 0
var y = 0
var z = 0
function solve(carbon,hydro,choice){
  y = carbon
  z = hydro / 2
  x = (y*2 + z) / 2
  w = 1

  if(x%1 != 0){
    y = y*2
    z = z*2
    x = x*2
    w = w*2
  }

  if(choice == "Y"){
    return y
  } else if (choice == "Z"){
    return z
  } else if (choice == "X"){
    return x
  } else if (choice == "W"){
    return w
  }
}
