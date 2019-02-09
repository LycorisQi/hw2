function setup() 
{
  createCanvas(400, 400);
}
var ball = -25;
var ballV = 2;
var radius = 30;
var ballSpeed = 7;
var ballBack = ballSpeed;
var ballVS = 2;
var ballVB = ballVS;
var ballSize = radius*2;

var ball2 = 0;
var ballV2 = 340;
var radius2 = 15;
var ballSpeed2 = 10;
var ballBack2 = ballSpeed2;
var ballVS2 = 4;
var ballVB2 = ballVS;

function draw() 
{
  background(220);
	ellipse(ball, ballV, ballSize);
	ellipse(ball2, ballV2, radius2*2);
	
	ball = ball + ballBack;
	ballV = ballV + ballVB;
	
	ball2 = ball2 + ballBack2;
	ballV2 = ballV2 + ballVB2;
	
	//ball hitting the right side
	if(ball >= width - ballSize/2)
	{
		// ball = -25;
		fill(100,0,200);
		ballBack = 0 - ballSpeed;
	}
	if(ball2 >= width - radius2)
	{
		ballBack2 = 0 - ballSpeed2 + random(5);
	}
	
	//ball hitting the left side
	if(ball <= ballSize/2)
	{
		ballBack = ballSpeed;
		fill(250,200,0);
	}
	if(ball2 <= radius2)
	{
		ballBack2 = ballSpeed2 - random(8);
		fill(0,20,200);//blue
	}
	
	//ball hitting the down side
	if(ballV >= height - ballSize/2)
	{
		ballVB = 0 - ballVS;
	}
	if(ballV2 >= height - radius2)
	{
		ballVB2 = 0 - ballVS2;
	}
	
	//ball hitting the up side
	if(ballV <= ballSize/2)
	{
		ballVB = ballVS;
	}
	if(ballV2 <= radius2)
	{
		ballVB2 = ballVS2;
	}
	
	// ball size changing horizontal
	if(ball >= mouseX)
	{
		ballSize = ballSize + random(2);
	}
	//ball size changing vertical
	if(ballV >= mouseY)
	{
		ballSize = ballSize - random(2);
	}
}
