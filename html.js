var count=0;
function onClick(){
    x = document.getElementById("pshow");
    x.innerHTML="Hello JavaScript!"+count;//修改内容
    x.style.color="#ff0000"; //修改样式
    count++;
}
function reset(x){
    count = 0;
    x.innerHTML="Hello JavaScript!"+count;//修改内容
    x.style.color="#ff0000"; //修改样式
}

function playPause(myVideo){
   
	if (myVideo.paused) 
	  myVideo.play(); 
	else 
	  myVideo.pause(); 
}

//绘制矩形
function drawRect(canvas){
    var ctx = canvas.getContext("2d");//创建context对象
    ctx.fillStyle="#FF5246";
    ctx.fillRect(50,50,200,100)
}
//绘制圆形
function drawCircle(canvas){
    var ctx = canvas.getContext("2d");//创建context对象
    ctx.beginPath();
    ctx.arc(350,100,50,0,2*Math.PI);
    ctx.stroke();

}
//绘制文字
function drawText(canvas,text){
    var ctx = canvas.getContext("2d");//创建context对象
    ctx.font="30px Arial";
    ctx.fillText(text,450,100);//实心

    ctx.strokeText(text,450,150);//空心
}

/*绘制渐变矩形框*/
function drawGradient(canvas){
    var ctx=canvas.getContext("2d");

    // Create gradient
    // var grd=ctx.createLinearGradient(0,0,200,0);//(x,y,x1,y1)

    // 创建渐变
    var grd=ctx.createRadialGradient(125,250,5,140,260,100);//(x,y,r,x1,y1,r1)
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"green");

    // Fill with gradient
    ctx.fillStyle=grd;
    ctx.fillRect(50,200,200,100);//(x,y,width,height)

}
//绘制图片
function drawImage(canvas ,img){
    var ctx=canvas.getContext("2d");
    ctx.drawImage(img,300,200,100,100);//(iamge,x,y,width,height)
}