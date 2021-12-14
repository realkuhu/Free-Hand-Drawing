
var mouseEvent="empty";
var last_x,last_y;
canvas = document.getElementById("myCanvas");
colour= "violet";
width_of_line= 3;

ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    //Additional Activity Starts//
    colour = document.getElementById("colour").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Additional Activity Ends//

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e){

    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e){

    mouseEvent = "mouseUp";
}


canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e){

current_x= e.client - canvas.offsetLeft;
current_y= e.client - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth= width_of_line;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
}

last_x=current_x;
last_y=current_y;

}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}