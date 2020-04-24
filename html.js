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

//允许拖拽
function allowDrop(ev)
{
	ev.preventDefault();
}
//拖拽
function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}
//放手时
function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
var position;
//获取位置
function getLocation(x){
    position = x;
    if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}
	else
	{
		x.innerHTML="该浏览器不支持定位。";
	}
}
//显示位置
function showPosition(pos)
{
	position.innerHTML="纬度: " + pos.coords.latitude + 
	"<br>经度: " + pos.coords.longitude;	
}
//显示报错信息
function showError(error)
{
    switch(error.code) 
    {
        case error.PERMISSION_DENIED:
            position.innerHTML="用户拒绝对获取地理位置的请求。"
            break;
        case error.POSITION_UNAVAILABLE:
            position.innerHTML="位置信息是不可用的。"
            break;
        case error.TIMEOUT:
            position.innerHTML="请求用户地理位置超时。"
            break;
        case error.UNKNOWN_ERROR:
            position.innerHTML="未知错误。"
            break;
    }
}

//localStorage存储数据
function localStorageSave(name,value){
    if(typeof(Storage)!=="undefined"){
        localStorage.name = value;
        alert("存储成功");
    }else{
        alert("您的浏览器不支持web存储")
    }
}
//获取localStorage存储数据
function localStorageGet(show,name){
    if(typeof(Storage)!=="undefined"){
        show.innerHTML=name+":"+localStorage.name;
    }else{
        show.innerHTML="您的浏览器不支持web存储";
    }
}
function removeItem(show,key){
    if(typeof(Storage)!=="undefined"){
        localStorage.removeItem(key);
        show.innerHTML="已经删除";
    }else{
        show.innerHTML="您的浏览器不支持web存储";
    }
}

//通过sessionStorage实现
function clickCounter(show){
    if(typeof(Storage)!=="undefined")
	{
		if (sessionStorage.clickcount)
		{
			sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
		}
		else
		{
			sessionStorage.clickcount=1;
		}
		show.innerHTML="在这个会话中你已经点击了该按钮 " + sessionStorage.clickcount + " 次 ";
	}
	else
	{
		show.innerHTML="抱歉，您的浏览器不支持 web 存储";
	}

}
//web sql
function websqlCreateTable(){
    //(数据库名称，版本号，描述，数据库大小，创建回调)
    var db = openDatabase('mydb','1.0','test db',2*1024*1024);
    db.transaction(function (tx) {  
        tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "谷超超")');
        tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "https://blog.csdn.net/qq_31028313")');
    });
}
//web sql 读取数据
function websqlReadDb(show){
    //(数据库名称，版本号，描述，数据库大小，创建回调)
    var db = openDatabase('mydb','1.0','test db',2*1024*1024);
    db.transaction(function(tx){
        tx.executeSql(
            'select * from LOGS',[],function (tx,results){
                var len = results.rows.length,i;
                msg = '<p>查询到记录条数：'+ len + '</p>';
                show.innerHTML +=  msg;
                for (i = 0; i < len; i++){
                    msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
                    show.innerHTML +=  msg;
                 }
            },null);
    });
}

function websqlDelete(show,id){
    var db = openDatabase('mydb','1.0','test db',2*1024*1024);
    db.transaction(function(tx){
        tx.executeSql('delete from LOGS where id=?',[id]);
        show.innerHTML +=  '<p>已删除id='+id+'的数据</p>';
    });
}