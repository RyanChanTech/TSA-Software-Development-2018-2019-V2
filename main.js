/*IMPORTANT: The x and y coordinate system looks like this:
https://openclipart.org/detail/234445/computer-math-coordinate-system*/

//Switch parameters: (x,y,width,height,text,text size, x offset (optional))
var mathSwitch=new CategorySwitch(10,70,280,45,"Math",35,xOffset=100);
var physicsSwitch=new CategorySwitch(10,140,280,45,"Physics",35,xOffset=80);
var chemistrySwitch = new CategorySwitch(10,210,280,45,"Chemistry",35,xOffset=65);
var customSwitch = new CategorySwitch(10,280,280,45,"Custom",35,xOffset=75);

var algebraSwitch = new Switch(10,410,280,45,"Simple Algebra",35,xOffset=22);
var derivativesSwitch = new Switch(10,480,280,45,"Derivatives",35,xOffset=55);
var seriesSwitch = new Switch(10,550,280,45,"Series",35,xOffset=95);
var matrixSwitch = new Switch(10,620,280,45,"Matrixes",35,xOffset=75);

var newtonsLawsSwitch = new Switch(10,450,280,50,"Newton's Laws",35,xOffset=28);
var stoichSwitch = new Switch(10,450,280,50,"Stoichiometry",35,xOffset=31);


var logo;
//The setup function only runs once
function setup() {
  //You can ignore these. It only sets the font and canvas size
  frameRate(25);
  textFont("Trebuchet MS");
  createCanvas(1800, 730);
  logo = loadImage("images/logo3.png");
  customQuestions=loadStrings("custom.txt");
}

/*The draw function loops constantly. It runs every frame, and
since this program is running at 30 frames per second, this function
loops 30 times a second*/

function draw() {
  background(255);
  displayDecorations(); //This is in the Miscellaneous.js file

  //update each tool based on their category
  if(mathSwitch.switchedOn==true){
    algebraSwitch.update();
    derivativesSwitch.update();
    seriesSwitch.update();
    matrixSwitch.update();
  }else if(physicsSwitch.switchedOn==true){
    newtonsLawsSwitch.update();
  }else if(chemistrySwitch.switchedOn==true){
    stoichSwitch.update();
  }

  //If each switch is switchedOn, run the function
  if(algebraSwitch.switchedOn==true){
    algebra();
  }else if(derivativesSwitch.switchedOn==true){
    derivatives();
  }else if(newtonsLawsSwitch.switchedOn==true){
    newtonsLaws();
  }else if(stoichSwitch.switchedOn==true){
    stoich()
  }else if(seriesSwitch.switchedOn==true){
    series();
  }else if(matrixSwitch.switchedOn==true){
    matrix();
  }else if(customSwitch.switchedOn==true){
    custom();
  }else{
    image(logo,300,80);
  }

  //update the category switches so they show up and functions.
  mathSwitch.update();
  physicsSwitch.update();
  chemistrySwitch.update();
  customSwitch.update();
}
