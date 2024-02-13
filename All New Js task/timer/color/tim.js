var color = ["red","orange","blue","green"];
var timer1 = undefined;
var count = 0;
window.onload = function(){
    timer1 = setInterval(timerfun1,1000);
}
function timerfun1(){
    bodyid.style.backgroundColor = color[count];
if(count<=3){
count++;
}
else{
count=0;
}
}