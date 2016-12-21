var display = document.getElementById("display");

function Particle(x, y, spd, theta) {
	this.x = this.centerX = x;
	this.y = y;
	this.spd = spd;
	this.theta = theta;
};

Particle.prototype.move = function() {
	this.theta += (this.spd)/100 +0.1;
	this.x = this.centerX + 5* Math.sin(this.theta*this.spd);
	this.y -= this.spd;
	if (this.y <0)
	{
		this.y += window.innerHeight;
	}
};

Particle.prototype.draw = function() {
	ctx.strokeStyle = '#46206d';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(this.x,this.y, 10/(this.spd+1),0,2*Math.PI);
	ctx.stroke();
};

var ctx = display.getContext('2d');

var particles = [];
var width = display.width = window.innerWidth*99/100 ;
var height = display.height = window.innerHeight*99/100;

for (var i = 0; i < 100; i++) {
	particles[i] = new Particle(Math.random() * width, Math.random() * height, Math.random()*3, 0);
}

requestAnimationFrame(frame);

function frame() {
	requestAnimationFrame(frame);
	ctx.clearRect(0, 0, width, height);
	for (var i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].draw();
	}
}

