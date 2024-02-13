function btn1() {
  if (rdo1.checked == true) {
    var gen = rdo1.value;
  } else {
    gen = rdo2.value;
  }

  if (rdo3.checked == true) {
    var Emp = rdo3.value;
  } else {
    Emp = rdo4.value;
  }

  t1 = drop1.value;
  t2 = txt1.value;
  t3 = txt2.value;
  t4 = txt3.value;
  t5 = gen;
  t6 = drop2.value;
  t7 = Date1.value;
  t8 = Date2.value;
  t9 = Date3.value;
  t10 = add1.value;
  t11 = txt4.value;
  t12 = txt5.value;
  t13 = drop3.value;
  t14 = txt6.value;
  t15 = txt7.value;
  t16 = txt8.value;
  t17 = drop4.value;
  t18 = drop5.value;
  t19 = Emp;
  t20 = txt9.value;

  window.location.href =
    "getqurrey.html?q1=" +
    t1 +
    "&q2=" +
    t2 +
    "&q3=" +
    t3 +
    "&q4=" +
    t4 +
    "&q5=" +
    t5 +
    "&q6=" +
    t6 +
    "&q7=" +
    t7 +
    "&q8=" +
    t8 +
    "&q9=" +
    t9 +
    "&q10=" +
    t10 +
    "&q11=" +
    t11 +
    "&q12=" +
    t12 +
    "&q13=" +
    t13 +
    "&q14=" +
    t14 +
    "&q15=" +
    t15 +
    "&q16=" +
    t16 +
    "&q17=" +
    t17 +
    "&q18=" +
    t18 +
    "&q19=" +
    t19 +
    "&q20=" +
    t20;
}
function btn2() {
  if (rdo1.checked == true) {
    var gen = rdo1.value;
  } else {
    gen = rdo2.value;
  }

  if (rdo3.checked == true) {
    var Emp = rdo3.value;
  } else {
    Emp = rdo4.value;
  }

  t1 = drop1.value;
  t2 = txt1.value;
  t3 = txt2.value;
  t4 = txt3.value;
  t5 = gen;
  t6 = drop2.value;
  t7 = Date1.value;
  t8 = Date2.value;
  t9 = Date3.value;
  t10 = add1.value;
  t11 = txt4.value;
  t12 = txt5.value;
  t13 = drop3.value;
  t14 = txt6.value;
  t15 = txt7.value;
  t16 = txt8.value;
  t17 = drop4.value;
  t18 = drop5.value;
  t19 = Emp;
  t20 = txt9.value;

  sessionStorage.setItem("s1", t1);
  sessionStorage.setItem("s2", t2);
  sessionStorage.setItem("s3", t3);
  sessionStorage.setItem("s4", t4);
  sessionStorage.setItem("s5", t5);
  sessionStorage.setItem("s6", t6);
  sessionStorage.setItem("s7", t7);
  sessionStorage.setItem("s8", t8);
  sessionStorage.setItem("s9", t9);
  sessionStorage.setItem("s10", t10);
  sessionStorage.setItem("s11", t11);
  sessionStorage.setItem("s12", t12);
  sessionStorage.setItem("s13", t13);
  sessionStorage.setItem("s14", t14);
  sessionStorage.setItem("s15", t15);
  sessionStorage.setItem("s16", t16);
  sessionStorage.setItem("s17", t17);
  sessionStorage.setItem("s18", t18);
  sessionStorage.setItem("s19", t19);
  sessionStorage.setItem("s20", t20);
  window.location.href = "seesion.html";
}

function btn3() {
  if (rdo1.checked == true) {
    var gen = rdo1.value;
  } else {
    gen = rdo2.value;
  }

  if (rdo3.checked == true) {
    var Emp = rdo3.value;
  } else {
    Emp = rdo4.value;
  }

  t1 = drop1.value;
  t2 = txt1.value;
  t3 = txt2.value;
  t4 = txt3.value;
  t5 = gen;
  t6 = drop2.value;
  t7 = Date1.value;
  t8 = Date2.value;
  t9 = Date3.value;
  t10 = add1.value;
  t11 = txt4.value;
  t12 = txt5.value;
  t13 = drop3.value;
  t14 = txt6.value;
  t15 = txt7.value;
  t16 = txt8.value;
  t17 = drop4.value;
  t18 = drop5.value;
  t19 = Emp;
  t20 = txt9.value;

  localStorage.setItem("l1", t1);
  localStorage.setItem("l2", t2);
  localStorage.setItem("l3", t3);
  localStorage.setItem("l4", t4);
  localStorage.setItem("l5", t5);
  localStorage.setItem("l6", t6);
  localStorage.setItem("l7", t7);
  localStorage.setItem("l8", t8);
  localStorage.setItem("l9", t9);
  localStorage.setItem("l10", t10);
  localStorage.setItem("l11", t11);
  localStorage.setItem("l12", t12);
  localStorage.setItem("l13", t13);
  localStorage.setItem("l14", t14);
  localStorage.setItem("l15", t15);
  localStorage.setItem("l16", t16);
  localStorage.setItem("l17", t17);
  localStorage.setItem("l18", t18);
  localStorage.setItem("l19", t19);
  localStorage.setItem("l20", t20);
  window.location.href = "local.html";
}
