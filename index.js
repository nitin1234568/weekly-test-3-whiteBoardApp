let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let getThing=()=>   
{
	var getColor = document.getElementById("Color").value;
	var getSize = document.getElementById("Size").value;

	return {
		getColor, getSize
	};
}


let clearAll=()=>
{ 
	canvas.width = canvas.width;
}

let Draw=(e)=> 
{
	if (drawing == false) return;
	let editor = getThing();
	ctx.lineWidth = editor.getSize;
	ctx.strokeStyle = editor.getColor;	
	ctx.lineCap ="round";
	ctx.lineTo(e.clientX, e.clientY);//starting point
	ctx.moveTo(e.clientX, e.clientY);//ending point
	ctx.stroke();

}

let StartDraw=(e)=> 
{
	drawing = true;
	Draw(e);
}

let StopDraw=()=> 
{
	drawing = false;
	ctx.beginPath();
}

canvas.addEventListener("mousedown", StartDraw);
canvas.addEventListener("mouseup", StopDraw);
canvas.addEventListener("mousemove",Draw);