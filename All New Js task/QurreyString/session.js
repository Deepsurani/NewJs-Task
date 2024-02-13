window.onload = function (){
    if(sessionStorage.getItem("s1") != null &&
    sessionStorage.getItem("s2") != null &&
    sessionStorage.getItem("s3") != null &&
    sessionStorage.getItem("s4") != null &&
    sessionStorage.getItem("s5") != null &&
    sessionStorage.getItem("s6") != null &&
    sessionStorage.getItem("s7") != null &&
    sessionStorage.getItem("s8") != null &&
    sessionStorage.getItem("s9") != null &&
    sessionStorage.getItem("s10") != null &&
    sessionStorage.getItem("s11") != null &&
    sessionStorage.getItem("s12") != null &&
    sessionStorage.getItem("s13") != null &&
    sessionStorage.getItem("s14") != null &&
    sessionStorage.getItem("s15") != null &&
    sessionStorage.getItem("s16") != null &&
    sessionStorage.getItem("s17") != null &&
    sessionStorage.getItem("s18") != null &&
    sessionStorage.getItem("s19") != null &&
    sessionStorage.getItem("s20") != null)
    {
        lbl1.innerHTML += sessionStorage.getItem("s1").toString();
        lbl1.innerHTML += sessionStorage.getItem("s2").toString() + "&nbsp;";
        lbl1.innerHTML += sessionStorage.getItem("s3").toString() + "&nbsp;";
        lbl1.innerHTML += sessionStorage.getItem("s4").toString();

        lbl2.innerHTML = sessionStorage.getItem("s5").toString();
        lbl3.innerHTML = sessionStorage.getItem("s6").toString();

        lbl4.innerHTML += sessionStorage.getItem("s7").toString() + "/";
        lbl4.innerHTML += sessionStorage.getItem("s8").toString()+"/";
        lbl4.innerHTML += sessionStorage.getItem("s9").toString();

        lbl5.innerHTML = sessionStorage.getItem("s10").toString();
        lbl6.innerHTML = sessionStorage.getItem("s11").toString();
        lbl7.innerHTML = sessionStorage.getItem("s12").toString();
        lbl8.innerHTML = sessionStorage.getItem("s13").toString();
        lbl9.innerHTML = sessionStorage.getItem("s14").toString();
        lbl10.innerHTML = sessionStorage.getItem("s15").toString();
        lbl11.innerHTML = sessionStorage.getItem("s16").toString();
        lbl12.innerHTML = sessionStorage.getItem("s17").toString();
        lbl13.innerHTML = sessionStorage.getItem("s18").toString();
        lbl14.innerHTML = sessionStorage.getItem("s19").toString();
        lbl15.innerHTML = sessionStorage.getItem("s20").toString();


    }

}