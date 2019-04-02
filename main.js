/*IMPORTANT: The x and y coordinate system looks like this:
https://openclipart.org/detail/234445/computer-math-coordinate-system
*/

//Switch parameters: (x,y,width,height,text,text size)
var mathSwitch=new CategorySwitch(10,80,280,50,"Math",40);
var physicsSwitch=new CategorySwitch(10,150,280,50,"Physics",40);
var chemistrySwitch = new CategorySwitch(10,220,280,50,"Chemistry",40);

var algebraSwitch = new Switch(10,380,280,50,"Simple Algebra",40);
var derivativesSwitch = new Switch(10,450,280,50,"Derivatives",40);
var newtonsLawsSwitch = new Switch(10,380,280,50,"Newton's Laws",40);
var stoichSwitch = new Switch(10,380,280,50,"Stoichiometry",40);

var img;
//The setup function only runs once
function setup() {
  //You can ignore these. It only sets the font and canvas size
  textFont("Trebuchet MS");
  createCanvas(1920, 1000);
  img = loadImage("images/logo2_pink.png");
}

/*The draw function loops constantly. It runs every frame, and
since this program is running at 30 frames per second, this function
loops 30 times a second*/

function draw() {
  background(20,29,38);
  noStroke();
  textSize(50);
  fill(255);
  text("TSA Question Generator",580,70);
  fill(30,30,30,100);
  rect(0,0,300,300);
  fill(100,100,100,100);
  rect(0,300,300,1000);
  fill(255,255,255);
  textSize(40);
  text("Categories",10,50);
  text("Generators",10,350);
  stroke(0);
  //The above code only draws the shapes and text.You can ignore them.

  //update each tool based on their category
  if(mathSwitch.switchedOn==true){
    algebraSwitch.update();
    derivativesSwitch.update();
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
  }else{
    image(img,500,80);
  }

  //update the category switches so they show up and functions.
  mathSwitch.update();
  physicsSwitch.update();
  chemistrySwitch.update();
}
