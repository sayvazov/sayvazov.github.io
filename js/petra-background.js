
function squigglyLine(ctx, position, squiggliness) {
    yAvg = ctx.canvas.height * position;
    xStart = 0;
    xEnd = ctx.canvas.width;
    hills = []
    hillHeights = []
    hillWidths = []
    numHills = Math.floor(window.innerWidth / 15);
    for (var i = 0; i < numHills; i++) {
        hills.push(Math.random() * xEnd);
        hillHeights.push ((Math.random() - 0.5) * 2 * squiggliness);
        hillWidths.push ((Math.random() + 0.5) * xEnd*0.02);
    }
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(128, 128, 128)";

    ctx.moveTo(0, yAvg);
    
    for (var x = 0; x < xEnd; x++) {
        y = yAvg;
        for (var i = 0 ; i < numHills; i ++) {
            y += 1/(((x - hills[i])/hillWidths[i])**2 +1) * hillHeights[i];
        }
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function drawPetra (ctx, x, y, id, speed, toLeft, petraHeight, petraWidth) {
    //console.log(x, y, id, speed, toLeft);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    petra = document.getElementById(id);
    if (!toLeft) {
        ctx.translate(x + petraWidth, y);
        ctx.scale(-1, 1);
        ctx.drawImage(petra, 0, 0, petraWidth, petraHeight);
        ctx.setTransform(1,0,0,1,0,0);
    }
    else {
        ctx.drawImage(petra, x, y, petraWidth, petraHeight);
    }
    screenWidth = window.innerWidth;
    if(toLeft) {
        x -= petraWidth*0.5;    
    }
    else {
        x += petraWidth*0.5;
    }
    nextId = "petra1";
    if (id == "petra1") {
        nextId = "petra2";
    } 

    if (x < screenWidth + petraWidth && x > -2 * petraWidth) {
        setTimeout(function() {drawPetra(ctx, x, y, nextId, speed, toLeft, petraHeight, petraWidth) }, speed);
    }
    else {
        // console.log("New Run");
        //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        newY = Math.floor(Math.random() * 6 + 1) * window.innerHeight *0.125;
        newX = 0;
        if (!toLeft) {
            newX = window.innerWidth;
        }
        timeout = (Math.random() * 5 + 1) * speed;
        setTimeout(function() {drawPetra(ctx, newX, newY, nextId, speed, !toLeft, petraHeight, petraWidth)}, timeout); 

    }
}

window.onload = function() {
    console.log("Loaded JS");
    const lineCanvas = document.getElementById('line-canvas');
    lineCanvas.width= window.innerWidth;
    lineCanvas.height = window.innerHeight;
    var lineCtx = lineCanvas.getContext("2d")

    // Load images first, as other drawing is happening.
    var firstRunImage =  document.getElementById("petra1");
    var secondRunImage =  document.getElementById("petra2");
    
    var squiggliness = window.innerHeight * 0.005;
    // Draw running lines. 
    for (var i = 0.125; i < 1; i += 0.125) {
        squigglyLine(lineCtx, i, squiggliness);
    }

    // If we still haven't loaded the images, just sit until we do. 
    cycles = 0 
    while (! (firstRunImage.complete && secondRunImage.complete)){
        cycles += 1;
    }
    // console.log(cycles);

    const dogCanvas = document.getElementById('dog-canvas');
    dogCanvas.width= window.innerWidth;
    dogCanvas.height = window.innerHeight;
    var dogCtx = dogCanvas.getContext("2d")
    // Run Petra on the lines. 

    petraHeight = window.innerHeight * 0.15;
    petraWidth = petraHeight * 1.58;
    drawPetra(dogCtx, 0, 0.5 * window.innerHeight, 
        "petra1", 500, false, petraHeight, petraWidth);
}



