	const WIDTH = 600
	const HEIGHT = 500
	let x = 280;
    let y = 400;
    let speedX = 0;
    let speedY = -4;
    let batX = 280;
    let score = 0;
window.onload=setInterval(mainLoop,10)
    function drawBricks() {
        for (a = 0; a < 5; a++) {
            for (b = 0; b < 8; b++) {
				ctx=document.getElementById("myCanvas").getContext("2d")
                ctx.fillStyle = '#ff00' + (40 + a * 40).toString(16);
                ctx.fillRect(b * 80, 100 + a * 20, 79, 19);
            }
        }
    }
    function mainLoop() {
    // clear prior position
	ctx=document.getElementById("myCanvas").getContext("2d")
	ctx.fillStyle = 'grey';
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	drawBricks()
        // ctx.clearRect(x-1, y-1, 9, 9);
        x = x + speedX;
        y = y + speedY;
        checkForHits();

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, 7, 7);

        // check for wall hits
        if ((x > 620) || (x < 0)) speedX = -speedX;
        if (y < 28) speedY = 4;
        if (y > 480) { gameOver(); }
		console.log(batX-x)
        // bat code
        // ctx.clearRect(0, 460, 640, 20);
        ctx.fillStyle = 'black';
        ctx.fillRect(batX - 60, 460, 120, 20);
    }
    function checkForHits() {
        const col = ctx.getImageData(x, y, 1, 1).data;
        if ((y > 460) && (Math.abs(batX - x) < 60)) {
            speedY = -4;
            speedX = Math.round(0.15 * (x - batX));
        } else if (col[3] != 0) {
			pingMp3.currentTime = 0;
            pingMp3.play();
            const x0 = 80 * Math.floor(x / 80);
            const y0 = 20 * Math.floor(y / 20);
            // ctx.clearRect(x0, y0, 79, 19);
            // speedY = speedY * -1;
            score++;
            ctx.fillRect(0, 0, 640, 20);
            ctx.fillStyle = 'black';
            ctx.font = "20px Arial";
            ctx.fillText("Score: " + score, 2, 16);
        }
    }
    document.onmousemove = function () { batX = event.clientX; }
    function gameOver() {
        ctx.font = "80px Arial";
        ctx.fillText("Game Over", 100, 250);
    }



