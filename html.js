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