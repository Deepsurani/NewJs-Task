var timer1 = undefined;
var count = 0;
var x = 0;

function timerfun1() {
  lbl1.innerHTML = count;
  if (lbl1.innerHTML == 10) {
    x = 1;
  } 
  if(lbl1.innerHTML == 0) {
    x = 0;
  }
  if (x == 1) {
    count--;
  } else if (x == 0) {
    count++;
  }
}

function btn1() {
  timer1 = setInterval(timerfun1, 1000);
}
