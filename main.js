/*IMPORTANT: The x and y coordinate system looks like this:
https://openclipart.org/detail/234445/computer-math-coordinate-system
*/

//Switch parameters: (x,y,width,height,text,text size, x offset (optional))
var mathSwitch=new CategorySwitch(10,80,280,50,"Math",40,xOffset=95);
var physicsSwitch=new CategorySwitch(10,150,280,50,"Physics",40,xOffset=75);
var chemistrySwitch = new CategorySwitch(10,220,280,50,"Chemistry",40,xOffset=55);

var algebraSwitch = new Switch(10,380,280,50,"Simple Algebra",35);
var derivativesSwitch = new Switch(10,450,280,50,"Derivatives",35);
var seriesSwitch = new Switch(10,520,280,50,"Series",35);
var matrixSwitch = new Switch(10,590,280,50,"Matrixes",35);

var newtonsLawsSwitch = new Switch(10,380,280,50,"Newton's Laws",35);
var stoichSwitch = new Switch(10,380,280,50,"Stoichiometry",35);


var logo;
//The setup function only runs once
function setup() {
  //You can ignore these. It only sets the font and canvas size
  textFont("Trebuchet MS");
  createCanvas(1800, 1500);
  logo = loadImage("images/logo2.png");
}

/*The draw function loops constantly. It runs every frame, and
since this program is running at 30 frames per second, this function
loops 30 times a second*/

function draw() {
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
  }else{
    image(logo,300,80);
  }

  //update the category switches so they show up and functions.
  mathSwitch.update();
  physicsSwitch.update();
  chemistrySwitch.update();
}
