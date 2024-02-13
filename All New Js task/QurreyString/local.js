window.onload = function (){
    if(localStorage.getItem("l1") != null &&
    localStorage.getItem("l2") != null &&
    localStorage.getItem("l3") != null &&
    localStorage.getItem("l4") != null &&
    localStorage.getItem("l5") != null &&
    localStorage.getItem("l6") != null &&
    localStorage.getItem("l7") != null &&
    localStorage.getItem("l8") != null &&
    localStorage.getItem("l9") != null &&
    localStorage.getItem("l10") != null &&
    localStorage.getItem("l11") != null &&
    localStorage.getItem("l12") != null &&
    localStorage.getItem("l13") != null &&
    localStorage.getItem("l14") != null &&
    localStorage.getItem("l15") != null &&
    localStorage.getItem("l16") != null &&
    localStorage.getItem("l17") != null &&
    localStorage.getItem("l18") != null &&
    localStorage.getItem("l19") != null &&
    localStorage.getItem("l20") != null)
    {
        lbl1.innerHTML += localStorage.getItem("l1").toString();
        lbl1.innerHTML += localStorage.getItem("l2").toString() + "&nbsp;";
        lbl1.innerHTML += localStorage.getItem("l3").toString() + "&nbsp;";
        lbl1.innerHTML += localStorage.getItem("l4").toString();

        lbl2.innerHTML = localStorage.getItem("l5").toString();
        lbl3.innerHTML = localStorage.getItem("l6").toString();

        lbl4.innerHTML += localStorage.getItem("l7").toString() + "/";
        lbl4.innerHTML += localStorage.getItem("l8").toString()+"/";
        lbl4.innerHTML += localStorage.getItem("l9").toString();

        lbl5.innerHTML = localStorage.getItem("l10").toString();
        lbl6.innerHTML = localStorage.getItem("l11").toString();
        lbl7.innerHTML = localStorage.getItem("l12").toString();
        lbl8.innerHTML = localStorage.getItem("l13").toString();
        lbl9.innerHTML = localStorage.getItem("l14").toString();
        lbl10.innerHTML = localStorage.getItem("l15").toString();
        lbl11.innerHTML = localStorage.getItem("l16").toString();
        lbl12.innerHTML = localStorage.getItem("l17").toString();
        lbl13.innerHTML = localStorage.getItem("l18").toString();
        lbl14.innerHTML = localStorage.getItem("l19").toString();
        lbl15.innerHTML = localStorage.getItem("l20").toString();


    }

}