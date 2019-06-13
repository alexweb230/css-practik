let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//code

ctx.fillStyle = 'silver';
 ctx.strokeStyle = ('red');
 ctx.lineWidth = 4;
 ctx.scale(2,2);

 ctx.rotate(-10 * Math.PI/100);


// ctx.fillRect(50, 50, 300, 200);
// ctx.strokeRect(50, 50, 300, 200);
// ctx.arc(canvas.width / 3, canvas.height / 3, 200, 0, Math.PI * 2);
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(25, 100);
// ctx.lineTo(75, 100);
// ctx.closePath();
//
// ctx.stroke();


ctx.font = '20px Verdana';
ctx.fillText('hello world', 50, 50);




















