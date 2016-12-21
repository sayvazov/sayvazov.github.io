
var numBubbles = 4;
var tops = [5, 30, 30, 40];
var lefts = [42, 5, 75, 42];
var centered = false;

function Bubble(i)
{
	this.obj = document.getElementById("bubble"+(i));
	//this.obj.style.top = tops[i]+"vw";
	//this.obj.style.left = lefts[i]+"vw";
	this.theta = 0;
};

var bubbles =[];
for (var i = 0; i < 4; i++)
{
	bubbles[i] = new Bubble(i);
}


function arrange(){
	for (var i = 0; i < bubbles.length; i++)
	{
		bubbles[i].obj.style.top   = tops[i]+"vw";
		bubbles[i].obj.style.left  = lefts[i]+"vw";
	}
}

function center(num)
{
	var rowStart = 5;
	var left = true;
	var thisBubble = document.getElementById("bubble" + num);
	thisBubble.style.left = "42.5vw";
	thisBubble.style.top  = "20vw";
	for (var j = 0; j <bubbles.length; j++)
	{
		if (j != num)
		{
			var curBubble = document.getElementById("bubble" + j);
			curBubble.style.top  = rowStart +"vw";
			if (left)
			{
				curBubble.style.left = "5vw";
				left = false;
			}
			else 
			{
				curBubble.style.left = "80vw";
				rowStart += 20;
				left = true;
			}
		}
	}
}

arrange();

var helloBubble = document.getElementById("bubble0");

function scatterAround(num)
{
	if (!centered)
	{
		centered = true;
		center(num);
	}
	else
	{
		centered = false;
		arrange();
	}
	//thisBubble.animate({left: "35vw"});
}

//helloBubble.on("click", scatterAround(1));
