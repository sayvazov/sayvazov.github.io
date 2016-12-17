
var tops = [5, 30, 30, 40];
var lefts = [42, 5, 75, 42];
function Bubble(i)
{
	this.obj = document.getElementById("bubble"+(i));
	this.obj.style.top = tops[i]+"vw";
	this.obj.style.left = lefts[i]+"vw";
	this.theta = 0;
};

var bubbleContainer = document.getElementById("bubbles");
var children  = document.getElementsByClassName("bubble");
for(var i = 0 ; i < children.length; i++)
{
	children[i].style.left = lefts[i];
	children[i].style.top = tops[i];
	
}

var bubbles =[];
for (var i = 0; i < 4; i++)
{
	bubbles[i] = new Bubble(i);
}