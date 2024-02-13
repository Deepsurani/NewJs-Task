var timer1 = undefined;
var count=0;
window.onload = function(){
timer1 = setInterval(timerfun1,1000);
}
function timerfun1(){
  var color = Math.floor((Math.random() * (1000 - 100)) + 100);
  console.log(color);
  bodyid.style.backgroundColor = "#" + color;
  
    
}