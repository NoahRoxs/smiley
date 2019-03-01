let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//gezicht
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.fillStyle = "yellow";
context.fill();
context.stroke();
//linkeroog
context.beginPath();
context.arc(130,130,40,0,2*Math.PI);
context.fillStyle = "red";
context.fill();
context.closePath();
context.stroke();
//rechteroog
context.beginPath();
context.arc(270,130,40,0,2*Math.PI);
context.fillStyle = "red";
context.fill();
context.stroke();
//mond
context.beginPath();
context.arc(200,230,75,0,2*Math.PI/2);
context.fillStyle = "green";
context.fill();
context.closePath();
context.stroke();
//neus
context.beginPath();
context.arc(175,175,40,0,2);
context.fillStyle = "blue";
context.fill();
context.closePath();
context.stroke();
//haar
context.lineWidth=2;
context.strokeRect(190, 18, 1, 32);
context.lineWidth=2;
context.strokeRect(200, 18, 1, 32);
context.lineWidth=2;
context.strokeRect(210, 18, 1, 32);
