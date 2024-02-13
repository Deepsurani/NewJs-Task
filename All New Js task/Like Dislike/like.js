count = 0;
window.onload = function () {
  if (localStorage.getItem("l1") != null) {
    lbl1.innerHTML = localStorage.getItem("l1").toString();
  }
};
function btn1() {
  lbl1.innerHTML = count + 1;
  count++;
  var t1 = lbl1.innerHTML;
  localStorage.setItem("l1", t1);
}
function btn2() {

  if (lbl1.innerHTML <= 0) {
    lbl1.innerHTML = 0;
  } else {
    lbl1.innerHTML = count - 1;
    count--;
  }
  var t1 = lbl1.innerHTML;
  localStorage.setItem("l1", t1);
}
