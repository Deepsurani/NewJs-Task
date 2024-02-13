var count = 0;
timer1 = undefined;
function timerfun1(){
    lbl1.innerHTML = count;
    count++;
}
function btn1() {
  
  if (timer1 == undefined) {
    timer1 = setInterval(timerfun1,100);
  }
}
function btn2(){
    clearInterval(timer1);
    timer1 = undefined;
}
function btn3(){
    clearInterval(timer1);
    timer1 = undefined;

    count = 0;
    lbl1.innerHTML = count;
}
