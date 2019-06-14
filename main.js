/*IMPORTANT: The x and y coordinate system looks like this:
https://openclipart.org/detail/234445/computer-math-coordinate-system*/

//Switch parameters: (x,y,width,height,categoryBoudary=[x1,y1,x2,y2],text,text size, x offset (OPTIONAL))
var mathSwitch=new CategorySwitch(10,70,280,45,[0,0,300,280],"Math",35,xOffset=100);
var scienceSwitch=new CategorySwitch(10,140,280,45,[0,0,300,280],"Science",35,xOffset=80);
var customSwitch = new CategorySwitch(10,210,280,45,[0,0,300,280],"Custom",35,xOffset=80);

var customQuestions; //Used in Custom Generators

//Math:
var algebraSwitch = new CategorySwitch(10,340,280,50,[0,0,300,1080],"Simple Algebra",35,xOffset=22);
var volumeSwitch = new CategorySwitch(10,410,280,50,[0,0,300,1080],"Volume",35,xOffset=80);
var matrixSwitch = new CategorySwitch(10,480,280,50,[0,0,300,1080],"Matrixes",35,xOffset=75);
var seriesSwitch = new CategorySwitch(10,550,280,50,[0,0,300,1080],"Series",35,xOffset=90);
var calculusSwitch = new CategorySwitch(10,620,280,50,[0,0,300,1080],"Calculus",35,xOffset=75);
//Science:
var newtonsLawsSwitch = new CategorySwitch(10,340,280,50,[0,0,300,1080],"Newton's Laws",35,xOffset=28);
var harmonicsSwitch = new CategorySwitch(10,410,280,50,[0,0,300,1080],"Harmonics",35,xOffset=65);
var circuitSwitch = new CategorySwitch(10,480,280,50,[0,0,300,1080],"Circuits",35,xOffset=80);
var stoichSwitch = new CategorySwitch(10,550,280,50,[0,0,300,1080],"Stoichiometry",35,xOffset=31);
//Custom
var typingSwitch = new CategorySwitch(10,340,280,50,[0,0,300,1080],"Typing",35,xOffset=85);
var matchingSwitch = new CategorySwitch(10,410,280,50,[0,0,300,1080],"Matching",35,xOffset=65);

var testM1=new Movable(100,340,280,50,"test 1",20);
var testM2=new Movable(150,340,280,50,"test 2",20);

var logo;
//The setup function only runs once
function setup() {
  createCanvas(1920, 1080);
  frameRate(25);
  textFont("Trebuchet MS");
  logo = loadImage("images/logo3.png");
  loadCircuitImages();
  customQuestions=loadStrings("custom.txt");
}

/*The draw function loops constantly. It runs every frame, and
since this program is running at 30 frames per second, this function
loops 30 times a second*/

function draw() {
  background(255);
  displayDecorations(); //This is in the Miscellaneous.js file

  //testM1.update();
  //testM2.update();
  //console.log(testM1.touching(testM2));

  //update each tool based on their category
  if(mathSwitch.switchedOn==true){
    algebraSwitch.update();
    calculusSwitch.update();
    seriesSwitch.update();
    matrixSwitch.update();
    volumeSwitch.update();
  }else if(scienceSwitch.switchedOn==true){
    newtonsLawsSwitch.update();
    circuitSwitch.update();
    harmonicsSwitch.update();
    stoichSwitch.update();
  }else if(customSwitch.switchedOn==true){
    typingSwitch.update();
    matchingSwitch.update();
  }

  //If each switch is switchedOn, run the function
  if(algebraSwitch.switchedOn==true){
    algebra();
  }else if(calculusSwitch.switchedOn==true){
    calculus();
  }else if(newtonsLawsSwitch.switchedOn==true){
    newtonsLaws();
  }else if(stoichSwitch.switchedOn==true){
    stoich()
  }else if(seriesSwitch.switchedOn==true){
    series();
  }else if(matrixSwitch.switchedOn==true){
    matrix();
  }else if(typingSwitch.switchedOn==true){
    customTyping();
  }else if(circuitSwitch.switchedOn==true){
    circuit();
  }else if(harmonicsSwitch.switchedOn==true){
    harmonics();
  }else if(volumeSwitch.switchedOn==true){
    volume();
  }else if(matchingSwitch.switchedOn==true){
    customMatching();
  }else{
    image(logo,300,80);
  }

  //update the category switches so they show up and functions.
  mathSwitch.update();
  scienceSwitch.update();
  customSwitch.update();
}
