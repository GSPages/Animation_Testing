var canvas = document.querySelector('canvas')
;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d')

/*//rectangles
c.fillStyle = "lightblue";
c.fillRect(100, 100, 100, 100)
c.fillStyle = "red";
c.fillRect(201, 100, 100, 100)
c.fillStyle = "lightgreen";
c.fillRect(100, 201, 100, 100)
c.fillStyle = "green";
c.fillRect(100, 302, 100, 100)
c.fillStyle = "darkgreen";
c.fillRect(201, 302, 100, 100)
c.fillRect(302, 302, 100, 100)
c.fillStyle = "dodgerblue";
c.fillRect(302, 403, 50, 50)
c.fillStyle = "pink";
c.fillRect(353, 403, 49, 50)

console.log(canvas);

/* Line
c.beginPath();
c.moveTo(200, 500);
c.lineTo(600, 700);
c.lineTo(400, 500);
c.lineTo(200, 500);
c.strokeStyle = "red";
c.fillStyle = "lightblue";
c.stroke();

/* Arc
c.beginPath();
c.arc(200, 650, 100, 0, Math.PI * 2, false);
c.strokeStyle ='blue';
c.stroke();
*/

/*for (var i = 0; i < 100; i++) {
    var x = Math.random() * window.innerWidth
    ;
    var y = Math.random() * window.innerHeight
    ;
    c.beginPath();
    c.arc(x, y, 25, 0, Math.PI * 2, false
        );
    c.strokeStyle = "lightblue";
    c.stroke();
}*/
/*
c.beginPath();
c.arc(400, 400, 55, 0, Math.PI * 2, false
    );
c.strokeStyle = "red";
c.stroke();
*/

var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 55;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath();
    c.arc(x, y, 55, 0, Math.PI * 2, false
        );
    c.strokeStyle = "red";
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

 animate();
