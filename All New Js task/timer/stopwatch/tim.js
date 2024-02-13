var timer1 = undefined;
var count = 0;
var count2 = 0;
var count3 = 0;
var Sr = 1;
function timerfun1() {
  lbl1.innerHTML = count3;
  lbl2.innerHTML = count2;
  lbl3.innerHTML = count;

  if (lbl3.innerHTML == 60) {
    count = 0;
    lbl3.innerHTML = count;
    count2++;
  }
  if (lbl2.innerHTML == 60) {
    count = 0;
    count2 = 0;
    lbl2.innerHTML = count2;
    lbl3.innerHTML = count;
    count3++;
  } else {
    count++;
  }
}
function btn1Click() {
  if (timer1 == undefined) {
    timer1 = setInterval(timerfun1, 100);
  }
}
function btn2Click() {
  clearInterval(timer1);
  timer1 = undefined;
}
function btn3Click() {
  clearInterval(timer1);
  timer1 = undefined;
  count = 0;
  count2 = 0;
  count3 = 0;
  lbl1.innerHTML = count3;
  lbl2.innerHTML = count2;
  lbl3.innerHTML = count;
  lbl4.innerHTML = "";
  Sr = 1;
}

function btn4Click(){
lbl4.innerHTML = "<br>" + (Sr++) + ")."+   lbl1.innerHTML + ":"+lbl2.innerHTML + ":"+ lbl3.innerHTML + lbl4.innerHTML;
}
