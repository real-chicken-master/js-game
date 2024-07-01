// this space is for variables
// dino Image
var dinoImage = new Image()
dinoImage.src = "dino.png"
//dino var
var dinox=50,dinoy=250,dinow=50,dinoh=50
var cactusspeed =2
var cactus1x=500,cactus1y=250,cactus1w=15,cactus1h=50
var cactus2x=800,cactus2y=250,cactus2w=15,cactus2h=50
// pause
var pausetimer = 0 
var pause = 0
// canvas
const WIDTH = 600
const HEIGHT = 500
var framenumber = 0
//zombieshootout
// startcheck
var start = 0
// player
var playerImage = new Image()
playerImage.src = "upplayer.png"
var leftplayerImage = new Image()
leftplayerImage.src = "leftplayer.png"
var rightplayerImage = new Image()
rightplayerImage.src = "rightplayer.png"
var upplayerImage = new Image()
upplayerImage.src = "upplayer.png"
var downplayerImage = new Image()
downplayerImage.src = "downplayer.png"
var playerYposition = 300
var playerXposition = 275
var playerwidth = 75
var playerheight = 120
var playerYSpeed = 4
var playerXSpeed = 4
// controls
var uppressed = false
var leftpressed = false
var downpressed = false
var rightpressed = false
// house
var housex = 129
var housey = 29
var housew = 342
var househ = 222
// door
var doorx = 249
var doory = 54
var doorw = 102
var doorh = 202
// place 1 = start, 2 = house, 3 = shop area, 4 = shop, 5 = crossroads, 6 = main area
var place = 1
var game = 0
// exit
var exith = 50
var exitw = 100
var exity = HEIGHT-50
var exitx = WIDTH/2-50
// money
var money = 0
// table
var tableh = 100
var tablew = 200
var tablex = 210
var tabley = 120
var tableImage = new Image()
tableImage.src = "table.png"
// table draw
var drawh = 40
var draww = 40
var drawx = 210
var drawy = tableh+tabley
var drawImage = new Image()
drawImage.src = "table_draw.png"
var draw = 0
// floor
var housefloory = 0
var housefloorx = 0
var floorImage = new Image()
floorImage.src = "floor.jpg"
// gun
var ammo = 0
// shop
var shopImage = new Image()
shopImage.src = "shop.PNG"
// welcome mat
var welcomeImage = new Image()
welcomeImage.src = "welcome.PNG"
// mouse
var mouseX = 0
var mouseY = 0
// keydown
var keyDown = 1
// mouseclick
var click = 0
// scope
var scopeImage = new Image()
scopeImage.src = "scope.PNG"
//background
var backgroundImage = new Image()
backgroundImage.src = "background.png"
//zombie
var zombieImage = new Image()
zombieImage.src = "zombie.png"
// var zomx
// var zomy
var zombiearray = []
class Zombie{
	constructor(){
		this.zomx = Math.random() * (WIDTH-100)
		this.zomy = Math.random()* (HEIGHT-100)
	}
	movezombie(){
		this.zomx = Math.random() *(WIDTH-100)
		this.zomy = Math.random() *(HEIGHT-100)
	}
}
zombiearray.push(new Zombie)
//logo
var logoImage = new Image()
logoImage.src = "logo.png"
//upgrades
var upgrades = 1
var mny = 1
window.addEventListener('mousemove', mouseMovedFunction)
function mouseMovedFunction(mouseEvent){
mouseX = mouseEvent.offsetX;
mouseY = mouseEvent.offsetY;
// debug
 // console.log("mouseX, mouseY",mouseX ,mouseY)
}
window.onload=setInterval(startCanvas,10)
function startCanvas(){
	// console.log(pause)
	if (pausetimer>0){
		pausetimer = pausetimer-1
		
	}
	ctx=document.getElementById("myCanvas").getContext("2d")
if(pause==0){
	if(game==0){
	startcheck()
	//zombie shootout
	ctx.fillStyle= 'lime'
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	ctx.fillStyle="blue"
	ctx.fillRect(9,6,120,60)
	ctx.fillStyle= 'lime'
	ctx.fillRect(10,7,118,58)
	ctx.fillStyle="black"
	ctx.font="30px arial"
	ctx.fillText("zombie",10,30)
	ctx.fillText("shootout",10,60)
	//circle game
	ctx.fillStyle="blue"
	ctx.fillRect(139,6,120,60)
	ctx.fillStyle= 'lime'
	ctx.fillRect(140,7,118,58)
	ctx.fillStyle="black"
	ctx.font="30px arial"
	ctx.fillText("circle",155,35)
	ctx.fillText("game",155,55)
	//flappy bird
	ctx.fillStyle="blue"
	ctx.fillRect(269,6,120,60)
	ctx.fillStyle= 'lime'
	ctx.fillRect(270,7,118,58)
	ctx.fillStyle="black"
	ctx.font="30px arial"
	ctx.fillText("flappy",290,30)
	ctx.fillText("bird",290,60)
	//dino game
	ctx.fillStyle="blue"
	ctx.fillRect(399,6,120,60)
	ctx.fillStyle= 'lime'
	ctx.fillRect(400,7,118,58)
	ctx.fillStyle="black"
	ctx.font="30px arial"
	ctx.fillText("dino",420,30)
	ctx.fillText("game",420,60)
}else{
	if(game=="zombie"){
		ctx.fillStyle="white"
		ctx.fillRect(0,0,WIDTH, HEIGHT)
		zombiestartCanvas()
	}
	if(game=="circle"){
		ctx.fillStyle="white"
		ctx.fillRect(0,0,WIDTH, HEIGHT)
		startcircleCanvas()
	}
	if(game=="bird"){
		ctx.fillStyle="white"
		ctx.fillRect(0,0,WIDTH, HEIGHT)
		mainLoop()
	}
	if(game=="birdstop"){
		birdstop()
	}
	if(game=="dino"){
		dino()
	}
	if(game=="dinostop"){
		dinostop()
	}
	//pause button
	ctx.fillStyle="black"
	ctx.fillRect(565,10,25,2.5)
	ctx.fillRect(565,15,25,2.5)
	ctx.fillRect(565,20,25,2.5)
	// ctx.fillRect(565,10,25,12)
	if(mouseX>565&&
	mouseX<590&&
	mouseY>0&&
	mouseY<25
	&& click==1
	&& pause==0
	&& pausetimer==0
	){
		pausetimer = 10
		pause=1
		// console.log("pause")
	}
	}
//continue
}else if(pause==1){
gamepause()
}
function gamepause(){
	ctx.font="20px arial"
	ctx.fillStyle="black"
	ctx.fillText("game paused",200,100)
	ctx.fillRect(225,280,100,30)
	ctx.fillStyle="white"
	ctx.fillText("menu",250,300)
if(mouseX>565&&
	mouseX<590&&
	mouseY>0&&
	mouseY>12
	&& click==1
	&& pause==1
	&& pausetimer==0
	){
		pausetimer = 10
		pause=0
		// console.log("unpause")
	}
}
if(mouseX>225
&&mouseX<325
&&mouseY>280
&&mouseY<310
&&click==1
&&pausetimer==0){
	pausetimer = 10
	pause=0
	score=0
	game=0
	// console.log("menu")
}
}
//zombie shootout
function startcheck(){
	if(mouseY>10
	&& mouseY<65
	&& mouseX>10
	&& mouseX<130
	&& click==1){
		game="zombie"
	}
	if(mouseY>10
	&& mouseY<65
	&& mouseX>140
	&& mouseX<260
	&& click==1){
		game="circle"
	}
	if(mouseY>10
	&& mouseY<65
	&& mouseX>270
	&& mouseX<390
	&& click==1){
		game="bird"
	}
	if(mouseY>10
	&& mouseY<65
	&& mouseX>400
	&& mouseX<520
	&& click==1){
		game="dino"
	}
}
function zombiestartCanvas(){
	// setInterval sets the framerate.
	// 10 means 10 milliseconds between frames (100 frames per second)
	// setimeout is a delay 10000 is 10 seconds
	if(start==0){
	zombiestartinstrustions()
	}
	if (start==1){
	updateCanvas()
	}
}
function updateCanvas(){
	if (place == 1){
		updatestartCanvas()
	}
	if (place == 2){
		updatehouse()
	}
	if (place ==3){
		updateshop()
	}
	if(place==4){
		shopopen()
	}
	if(place==5){
		crossroads()
	}
	if(place==6){
		waves()
	}
	ctx.fillStyle="black"
	ctx.fillRect(0,0,130,20)
	ctx.font="20px arial"
	ctx.fillStyle="yellow"
	ctx.fillText("you have $"+money,5,16)
	ctx.fillStyle="black"
	ctx.fillRect(0,20,130,20)
	ctx.font="20px arial"
	ctx.fillStyle="yellow"
	ctx.fillText("ammo = "+ammo,5,36)
	// console.log(framenumber)
	// framenumber = framenumber +1
	edegecheck()
	if(keyDown=="?"){
		ammo=ammo+1
	}
	bordercheck()
}
// place = start
function updatestartCanvas(){
	// debug
	// console.log("start")
	// Clear the frame
	// grass
	ctx.fillStyle="lime"
	ctx.fillRect(0,0,WIDTH, HEIGHT)
	// console.log("update")//debug
	// path
	ctx.fillStyle="yellow"
	ctx.fillRect(250,200,100,250)
	ctx.fillRect(0,350,300,100)
	// player
	ctx.drawImage(playerImage,playerXposition,playerYposition,playerwidth,playerheight);
	// house
	ctx.fillStyle="black"
	ctx.fillRect(housex,housey,housew,househ)
	ctx.fillStyle="sienna"
	ctx.fillRect(130,30,340,220)
	// door
	ctx.fillStyle="black"
	ctx.fillRect(doorx,doory,doorw,doorh)
	ctx.fillStyle="saddlebrown"
	ctx.fillRect(250,55,100,200)
	// doorknob
	ctx.fillStyle="black"
	ctx.beginPath();
	ctx.arc(335, 150, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	// roof
	ctx.fillRect(119,0,362,51)
	ctx.fillStyle="tan"
	ctx.fillRect(120,0,360,50)
	// debug x and y position on screen
	ctx.fillStyle="black"
	// ctx.fillText("X position: "+playerXposition,5,40)
	// ctx.fillText("Y position: "+playerYposition,5,60)
	// check if player is past house
	housecollision()
	dooropen()
}
// keydown
window.addEventListener('keydown', keyDownFunction)
function keyDownFunction(keyboardEvent){
	keyDown = keyboardEvent.key
	// uncoment for debug
	// console.log("You just pressed", keyDown)
    // up left down right
	 if (keyDown=="w"){
	 	playerYposition -=playerYSpeed
		playerImage.src = "upplayer.png"
		playerwidth = 75
		playerheight = 120
		bullety=-3
	 }
	 if (keyDown=="a"){
	 	playerXposition -= playerXSpeed
		playerImage.src = "leftplayer.png"
		playerwidth = 120
		playerheight = 75
		bulletx=-3
	 }
	 if (keyDown=="s"){
	 	playerYposition +=playerYSpeed
		playerImage.src = "downplayer.png"
		playerwidth = 75
		playerheight = 120
		bullety=3
	 }
	 if (keyDown=="d"){
	 	playerXposition += playerXSpeed
		playerImage.src = "rightplayer.png"
		playerwidth = 120
		playerheight = 75
		bulletx=3
	 }
	 if (keyDown=="ArrowUp"){
	 	playerYposition -=playerYSpeed
		playerImage.src = "upplayer.png"
		playerwidth = 75
		playerheight = 120
		bullety=-3
	 }
	 if (keyDown=="ArrowLeft"){
	 	playerXposition -= playerXSpeed
		playerImage.src = "leftplayer.png"
		playerwidth = 120
		playerheight = 75
		bulletx=-3
	 }
	 if (keyDown=="ArrowDown"){
	 	playerYposition +=playerYSpeed
		playerImage.src = "downplayer.png"
		playerwidth = 75
		playerheight = 120
		bullety=3
	 }
	 if (keyDown=="ArrowRight"){
	 	playerXposition += playerXSpeed
		playerImage.src = "rightplayer.png"
		playerwidth = 120
		playerheight = 75
		bulletx=3
	 }
	 // shop EXIT
	 if(place==4){
	 if(keyDown == "q"){
		place=3
		playerYposition=300
		playerImage.src = "downplayer.png"
	 }}
	setTimeout(() => keyDown=1, 8)
	if(keyDown== "/"){
		money = money + 10
	}
}
// check if player is touching house walls
function housecollision(){
	// left wall
	if (playerXposition > housex - playerwidth &&
		playerYposition < househ + 25 &&
		playerXposition < housex + 1){
	 playerXposition = playerXposition - 3
	}
	// bottom wall
	if (playerYposition < househ + 25 &&
		playerXposition > housex - playerwidth && 
		playerXposition < housew + housex &&
		playerYposition > househ - 1){
	playerYposition = playerYposition + 3
	}
	// right wall
	if(playerXposition > housew + housex -5 &&
		playerXposition < housew + housex +1 &&
		playerYposition < househ){
		playerXposition = playerXposition + 3
	}
}
// check if player touches door
function dooropen(){
	if (playerYposition < doorh + doory &&
	    playerXposition > doorx-playerwidth &&
		playerXposition < doorw + doorx){
		// console.log("enter house")
		place = 2
		playerXposition = 275
		playerYposition = 300
		}
	
}
// place = house
function updatehouse(){
	// console.log("this works")
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)
	// floor
	ctx.drawImage(floorImage,0,0,WIDTH,HEIGHT);
	// player
	ctx.drawImage(playerImage,playerXposition,playerYposition,playerwidth,playerheight);
	// exit
	ctx.fillStyle="lime"
	ctx.fillRect(exitx,exity,exitw,exith)
	ctx.fillStyle="red"
	ctx.font= "40px arial"
	ctx.fillText("EXIT",257,490)
	exitcheck()
	// table
	ctx.drawImage(tableImage,tablex,tabley,tablew,tableh);
	// table draw
	if (draw == 0){
	ctx.drawImage(drawImage,drawx,drawy,draww,drawh);
	// money on table
	ctx.fillStyle="black"
	ctx.beginPath();
	ctx.arc(225, 242, 11, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle="yellow"
	ctx.beginPath();
	ctx.arc(225, 242, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.fillStyle="black"
	ctx.font="15px arial"
	ctx.fillText("$5",216,248)
	ctx.fillStyle="black"
	ctx.beginPath();
	ctx.arc(228, 239, 11, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle="yellow"
	ctx.beginPath();
	ctx.arc(228, 239, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.fillStyle="black"
	ctx.font="15px arial"
	ctx.fillText("$5",220,245)}
	tablecheck()
}
function exitcheck(){
	if (playerXposition + playerwidth > exitx &&
	playerXposition < exitx + exitw &&
	playerYposition + playerheight > exity){
		// debug
		// console.log("exit house")
		place = 1
		playerXposition = 275
		playerYposition = 300
	}
}
function tablecheck(){
	// bottom
	if (playerYposition < tableh+tabley &&
	    playerYposition > tableh+tabley-6 &&
	    playerXposition < tablew+tablex &&
	    playerXposition > tablex-playerwidth){
		playerYposition = playerYposition + 5
	}
	// left
	if (playerXposition > tablex - playerwidth &&
		playerYposition < tableh + tabley &&
		playerXposition < tablex + 1 && 
		playerYposition > tabley - playerheight
		){
		playerXposition = playerXposition - 5
	}
	// top
	if(playerYposition < tabley - playerheight &&
	   playerYposition > tabley +6-playerheight &&
	   playerXposition > tablex &&
	   playerXposition < tablex + playerwidth){
		playerYposition = playerYposition - 5
	}
	// right
	if(playerXposition > tablex - 6 + tablew &&
	   playerXposition < tablex + tablew &&
	   playerYposition < tableh + tabley &&
	   playerYposition > tabley - playerheight
	   ){
		playerXposition = playerXposition + 5
	}
	// draw
	if (draw == 0){
	if(playerYposition > drawy
	&& playerYposition < drawy + drawh
	&& playerXposition < drawx + draww
	&& playerXposition > drawx
	){
		// debug
		// console.log("got money")
		money = money + 10
		draw = 1
	}
	}
}
// check to go to the next place
function edegecheck(){
	if(place==1){
		if (playerYposition > 300
		&& playerXposition < -1
		&& playerYposition<400
		){
			// console.log("place3")
			place = 3
			playerXposition = WIDTH-playerwidth-10
		}		
	}
	if(place==3){
		if(playerYposition > 300
		&& playerXposition > WIDTH-playerwidth
		&& playerYposition < 400
		){
			// console.log("place1")
			place = 1
			playerXposition = 0
		}
	}
	if(place==3){
		if (playerYposition > 300
		&& playerXposition < -1
		&& playerYposition<400
		){
			// console.log("place3")
			place = 5
			playerXposition = WIDTH-playerwidth-10
		}		
	}
	if(place==5){
		if(playerYposition > 300
		&& playerXposition > WIDTH-playerwidth
		&& playerYposition < 400
		){
			// console.log("place3")
			place = 3
			playerXposition = 0
		}
	}
}
function updateshop() {
	// debug
	// console.log("shop")
	// clear canvas
	ctx.fillStyle = "white"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	// grass
	ctx.fillStyle ="lime"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	// path
	ctx.fillStyle="yellow"
	ctx.fillRect(250,200,100,250)
	ctx.fillRect(0,350,600,100)
	// shop
	ctx.drawImage(shopImage,200,0,200,200);
	// welcome
	ctx.drawImage(welcomeImage,240,200,120,90);
	shopenter()
	// player
	ctx.drawImage(playerImage,playerXposition,playerYposition,playerwidth,playerheight);
}
function shopenter(){
	// welcome mat
	if (playerXposition > 240-playerwidth 
	&& playerXposition < 360
	&& playerYposition > 200
	&& playerYposition < 290
	){
		// console.log("shop open")
		place = 4
	}
}
function shopopen(){
	// background
	ctx.fillStyle = "lime"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	// ammo border
	ctx.fillStyle = "blue"
	ctx.fillRect(9,70,180,50)
	ctx.fillStyle = "lime"
	ctx.fillRect(10,71,178,48)
	// instructions
	ctx.font="25px arial"
	ctx.fillStyle = "black"
	ctx.fillText("press Q to exit",400,480)
	ctx.fillText("click to buy",400,450)
	// ammo
	ctx.font="40px arial"
	ctx.fillText("ammo $5",10,110)
	//upgrades
	if(upgrades > 1){
		ctx.fillStyle = "blue"
		ctx.fillRect(10,120,330,50)
		ctx.fillStyle = "lime"
		ctx.fillRect(11,121,328,48)
		ctx.fillStyle = "black"
		ctx.font="30px arial"
		ctx.fillText("+1 money multplier $"+(15*mny),10,150)
		if(mouseX > 10
		&& mouseX < 330
		&& mouseY > 120
		&& mouseY < 180
		&& click == 1
		&& money >= 15){
			mny = mny + 1
			money = money - 15
		}
		ctx.fillStyle = "blue"
		ctx.fillRect(10,170,200,50)
		ctx.fillStyle = "lime"
		ctx.fillRect(11,171,198,48)
		ctx.fillStyle = "black"
		ctx.font="30px arial"
		ctx.fillText("+1 zombie $"+(15*zombiearray.length),10,200)
	}
	buycheck()
}
function buycheck(){
	// ammo
	if(mouseX > 10
	&& mouseX <190
	&& mouseY > 70
	&& mouseY < 120
	&& money >= 5
	&& click == 1){
		// debug
		// console.log("bought")
		money = money-5
		ammo=ammo+5
		if(upgrades == 1){
		console.log(" ")
		upgrades = 2	
		}
	}
	if(upgrades > 1){
	//mony multiplyer 
		if(mouseX > 10
		&& mouseX < 330
		&& mouseY > 120
		&& mouseY < 180
		&& click == 1
		&& money >= (15*mny)){
			mny = mny + 1
			money = money - (15*mny)
		}
		
		
	//zombie
	}
	if(upgrades > 1){
		if(mouseX > 10
		&& mouseX < 250
		&& mouseY > 170
		&& mouseY < 220
		&& click == 1
		&& money >= (15*zombiearray.length)){
			money = money - (15*zombiearray.length)
			zombiearray.push(new Zombie)
		}
	}
}
window.addEventListener('click', clickFunction)
function clickFunction(mouseEvent){
// console.log("Click!")
if(mouseEvent.button === 0){
click = 1
setTimeout(() => click=0, 9)}
}
function zombiestartinstrustions(){
	ctx.fillStyle= 'lime'
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	ctx.drawImage(logoImage,90,30,400,200)
	ctx.fillStyle="blue"
	ctx.fillRect(235,260,110,50)
	ctx.fillStyle= 'lime'
	ctx.fillRect(237,262,106,46)
	ctx.fillStyle="black"
	ctx.font="50px arial"
	ctx.fillText("start",240,300) 
	zombiestartcheck()
}
function bordercheck(){
	if(playerXposition<-5){
		playerXposition=playerXposition+5
	}
	if(playerXposition>WIDTH+5-playerwidth){
		playerXposition=playerXposition-5
	}
	if(playerYposition<-5){
		playerYposition=playerYposition+5
	}
	if(playerYposition>HEIGHT+5-playerheight){
		playerYposition=playerYposition-5
	}
}
function crossroads(){
	//debug
	// console.log("crossroads")
	// grass
	ctx.fillStyle = "lime"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	//path
	ctx.fillStyle = "yellow"
	ctx.fillRect(0,350,WIDTH,200)
	//barrier
	ctx.fillStyle="brown"
	ctx.fillRect(0,320,WIDTH,30)
	if(playerYposition<310){
		playerYposition = playerYposition +6
	}
	//Text
	ctx.fillText("aproch edge and press e to start",200,100)
	// player
	ctx.drawImage(playerImage,playerXposition,playerYposition,playerwidth,playerheight);
	wavestartcheck()
}
function zombiestartcheck(){
	if(mouseY>260
	&&mouseY<310
	&&mouseX>235
	&&mouseX<340
	&&click==1
	){
		// debug
		// console.log("start")
		start=1
	}
}
function wavestartcheck(){
	if(playerYposition<320
	&&keyDown=="e"){
		place=6
	}
}
function waves(){
	//background
	ctx.drawImage(backgroundImage,-50,0,WIDTH+100,HEIGHT)
	//zombie draw
	var count = 0
	while(count < zombiearray.length){
			ctx.drawImage(zombieImage,zombiearray[count].zomx,zombiearray[count].zomy,100,100)
			//debug
			//console.log(zombiearray[count].zomx+" "+zombiearray[count].zomy)
		count++;
	}
	//crosshair
	ctx.fillStyle = "black"
	ctx.beginPath();
	ctx.lineWidth = 30;
	ctx.arc(mouseX, mouseY, 60, 0, 2 * Math.PI);
	ctx.stroke();
	//crosshair border
	ctx.fillRect(0,0,WIDTH,mouseY-50)
	ctx.fillRect(0,mouseY+50,WIDTH,HEIGHT)
	ctx.fillRect(mouseX+50,0,WIDTH,HEIGHT)
	ctx.fillRect(0,0,mouseX-50,HEIGHT)
	//crosshair lines
	ctx.fillRect(mouseX+20,mouseY,50,3)
	ctx.fillRect(mouseX-70,mouseY,50,3)
	ctx.fillRect(mouseX,mouseY-70,3,50)
	ctx.fillRect(mouseX,mouseY+20,3,50)
	//small crosshair lines
	ctx.fillRect(mouseX,mouseY+1,50,1)
	ctx.fillRect(mouseX-50,mouseY+1,50,1)
	ctx.fillRect(mouseX+1,mouseY-50,1,50)
	ctx.fillRect(mouseX+1,mouseY,1,50)
	//dot in middle
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(mouseX+1, mouseY+1, 5, 0, 2 * Math.PI);
	ctx.fill()
	ctx.stroke();
	hitcheck()
	//exit
	ctx.fillStyle = "white"
	ctx.fillText("press Q to exit", 450,50)
	wavesexitcheck()
}
function hitcheck(){
	var count = 0
	while(count < zombiearray.length){
	if (mouseX > zombiearray[count].zomx
	&& mouseX < zombiearray[count].zomx+100
	&& mouseY > zombiearray[count].zomy
	&& mouseY < zombiearray[count].zomy+100
	&& click == 1
	&& ammo >= 1){
		//console.log("bang")
		money = money + (2*mny)
	zombiearray[count].movezombie()
	}
		count++;
	}
	if(click==1
	&& ammo >= 1){
		ammo = ammo - 1
	}
}
function wavesexitcheck(){
	if(keyDown=="q"){
		place = 5
	}
}
//circle game
//score
var score = 0
//player
const PLAYERRADIUS = 5
//obstacle
var OBSTACLERADIUS = 100
var obstacleXPosition = 300
var obstacleYPosition = 250
var obstacleXSpeed = Math.random()*4-2
var obstacleYSpeed = Math.random()*4-2
var obstacleColor
var mouseX = 0
var mouseY = 0
//game
function startcircleCanvas(){
	// Clear the frame
	//score
	ctx.font="20px arial"
	ctx.fillStyle="black"
	ctx.fillText("your score is " +  (Math.floor(score)),10,30)
	// Move the player
	movePlayer()
	moveObstacle()
	if (collisionDetected()){
		obstacleColor = "darkcyan"
		if (OBSTACLERADIUS > 1){
		OBSTACLERADIUS = OBSTACLERADIUS-0.5
		score = score +0.05
		}
	} else {
		if(OBSTACLERADIUS < 90){
		OBSTACLERADIUS = OBSTACLERADIUS+0.07
		}
		obstacleColor = "orange"
	}
	// Draw the obstacle
	ctx.fillStyle=obstacleColor
	ctx.beginPath();
	ctx.arc(obstacleXPosition, obstacleYPosition, OBSTACLERADIUS, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	// Draw the dot
	ctx.fillStyle="blue"
	ctx.beginPath();
	ctx.arc(playerXPosition, playerYPosition, PLAYERRADIUS, 0, 2 * Math.PI);
	ctx.fill();
}
/****
**
**  Collision detection function
**  This is where all the logic to detect the collision will happen
**	the function will 
**
****/
function collisionDetected(){
	ctx.fillStyle="black"
	// ctx.fillText("Player X position: " + playerXPosition,30,30)
	// ctx.fillText("Player Y position: " + playerYPosition,30,50)
	// ctx.fillText("Obstacle X position: " + obstacleXPosition,30,70)
	// ctx.fillText("Obstacle Y position: " + obstacleYPosition,30,90)
	// console.log(OBSTACLERADIUS)
	var xDist = playerXPosition - obstacleXPosition
	var yDist = playerYPosition - obstacleYPosition
	// ctx.fillText("X distance: " + xDist,30,110)
	// ctx.fillText("Y distance: " + yDist,30,130)	
	var distance = Math.sqrt(Math.pow(xDist,2)+Math.pow(yDist,2))
	var tdist =  Math.ceil(distance - OBSTACLERADIUS - PLAYERRADIUS)
	// ctx.fillText("Distance between centers: " + distance,30,150)
	// ctx.fillText("Distance between edges: " + tdist,30,170)
	if(tdist<=0){
		// console.log("true")
		return(true)
	}else{
		//console.log("false")
		return(false)
	}
}
function moveObstacle(){
	// Move the rectangle - Change it's position
	obstacleXPosition += obstacleXSpeed
	obstacleYPosition += obstacleYSpeed
	// Bounce at the edges of the canvas
	// When part of the rectangle goes out of the sides, reverse teh speed in that direction my making it the negative of itself
	if(obstacleXPosition < OBSTACLERADIUS || obstacleXPosition + OBSTACLERADIUS > WIDTH){
			obstacleXSpeed = -obstacleXSpeed
	}
	if(obstacleYPosition < OBSTACLERADIUS || obstacleYPosition + OBSTACLERADIUS > HEIGHT){
			obstacleYSpeed = -obstacleYSpeed
	}
}
function movePlayer(){
	// Move the player if the movement keys are being pressed
	playerXPosition = mouseX
	playerYPosition = mouseY
}
//flappy bird
var x=640, ty=-150, by=450, fishY=220, ySpeed=0, score=0 ,xspeed=-2 ,speedgap=0;
var pipetopImage = new Image()
pipetopImage.src = "pipetop.png"
var pipebottomImage = new Image()
pipebottomImage.src = "pipebottom.png"
var birdImage = new Image()
birdImage.src = "bird.png"
var background2Image = new Image()
background2Image.src = "background2.png"
function mainLoop(){
	ctx.drawImage(background2Image,0,0,WIDTH,HEIGHT+5);
	ctx.drawImage(pipetopImage,x,ty,80,400);
	ctx.drawImage(pipebottomImage,x,by,80,400);
	ctx.fillStyle="black"
	//debug
	// ctx.fillRect(x,ty+400,100,100)
	// ctx.fillRect(x,by,100,100)
	if(speedgap==5){
		xspeed=xspeed-0.1
		speedgap=0
	}
	x+=xspeed;
	checkHitPipe();
	if(x<-80){
		x=WIDTH;ty=Math.random()*-200-150;
		by=ty+600
		// console.log(ty,by)
		score++;
		speedgap++
	}
	ctx.drawImage(birdImage,10,fishY,150,150);
	ctx.font="30px Arial";
	ctx.fillText("Score: "+score,10,30);
	ySpeed+=0.02;
	fishY+=ySpeed;
	if(fishY+100>HEIGHT){
		fishY-=ySpeed;
	}
	if(fishY+50<0){
		fishY-=ySpeed;
	}
}
document.onkeydown=function(){
	//flappy bird jump
	if(game=="bird"){
	ySpeed=-2;
	// console.log("jump")
	}
	//dino jump
	if(game=="dino"&&dinoy==250){
	ySpeed=-2.6;
	// console.log("jump")
	}
	}
	//continue with pipe hitboxs
	function checkHitPipe(){
		if(x<120&&x>20){
			if((fishY<(ty+350))||(fishY>(by-100))){
			game = "birdstop"
			}
		}
		// console.log(by)
	}
	function birdstop(){
		//draw the screen
	ctx.drawImage(background2Image,0,0,WIDTH,HEIGHT+5);
	ctx.drawImage(pipetopImage,x,ty,80,400);
	ctx.drawImage(pipebottomImage,x,by,80,400);
	ctx.fillStyle="black"
	ctx.drawImage(birdImage,10,fishY,150,150);
	ctx.font="30px Arial";
	ctx.fillText("Score: "+score,10,30);
	//draw game over
	ctx.fillStyle="black"
	ctx.font="80px Arial";
	ctx.fillText("Game Over", 100,250);
	//draw restart button
		ctx.fillStyle="black"
		ctx.fillRect(175,300,200,40)
		ctx.fillStyle="white"
		ctx.font="40px Arial"
		ctx.fillText("restart",210,330)
		ctx.fillStyle="black"
		if((mouseY>300&&
		click==1&&
		mouseY<340&&
		mouseX>175&&
		mouseX<375) || (keyDown=="r")){
		Reset()}
	}
function Reset(){
	//debug
	//console.log("Reset")
	score=0
	fishY=300
	x=WIDTH
	game="bird"
	speedgap=0
	xspeed=-2
}
// chrome dino
function dino(){
	//Clear screen
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	//floor
	ctx.fillStyle="DimGray"
	ctx.fillRect(0,300,WIDTH,10)
	//dino
	ctx.drawImage(dinoImage,dinox,dinoy,dinow,dinoh)	
	//cactus1
	ctx.fillRect(cactus1x,cactus1y,cactus1w,cactus1h)
	//cactus2
	ctx.fillRect(cactus2x,cactus2y,cactus2w,cactus2h)
	//jump
	dinoy=dinoy+ySpeed
	//gravity
	ySpeed+=0.04;
	//stop from going past floor
	if(dinoy+dinoh>300){
		dinoy=250
	}
	//Move cactus1
	cactus1x=cactus1x-cactusspeed
	//Move cactus2
	cactus2x=cactus2x-cactusspeed
	//reset cactus1
	if(cactus1x<0-cactus1w){
	cactus1x=WIDTH
	score++
	cactusspeed++
	}
	//reset cactus2
	if(cactus2x<0-cactus2w){
	cactus2x=WIDTH
	score++
	cactusspeed++
	}
	//Collisions
	//1st cactus
	if(cactus1x<dinox+dinoh
	&&cactus1x+cactus1w>dinox+11
	&&cactus1y<dinoy+dinoh
	){
		game="dinostop"
		console.log(game)
	}
	if(cactus2x<dinox+dinoh
	&&cactus2x+cactus2w>dinox+11
	&&cactus2y<dinoy+dinoh
	){
		game="dinostop"
		console.log(game)
		}
	ctx.font="30px Arial";
	ctx.fillText("Score: "+score,10,30);
	if(speedgap==5){
		cactusspeed=cactusspeed+0.2
		speedgap=0
	}
}
function dinostop(){
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	ctx.fillStyle="DimGray"
	ctx.fillRect(0,300,WIDTH,10)
	//dino
	ctx.drawImage(dinoImage,dinox,dinoy,dinow,dinoh)	
	//cactus1
	ctx.fillRect(cactus1x,cactus1y,cactus1w,cactus1h)
	//cactus2
	ctx.fillRect(cactus2x,cactus2y,cactus2w,cactus2h)
		ctx.font="30px Arial";
	ctx.fillText("Score: "+score,10,30);
	//draw game over
	ctx.fillStyle="black"
	ctx.font="80px Arial";
	ctx.fillText("Game Over", 100,250);
	//draw restart button
		ctx.fillStyle="black"
		ctx.fillRect(175,300,200,40)
		ctx.fillStyle="white"
		ctx.font="40px Arial"
		ctx.fillText("restart",210,330)
		ctx.fillStyle="black"
		if((mouseY>300&&
		click==1&&
		mouseY<340&&
		mouseX>175&&
		mouseX<375) || (keyDown=="r")){
		score=0
		cactus1x=500
		cactus2x=800
		cactusspeed=2
		game="dino"
		}
}
