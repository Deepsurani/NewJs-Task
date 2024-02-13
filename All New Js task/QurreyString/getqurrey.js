window.onload = function(){
    var QueryString = new URLSearchParams(window.location.search);
    if (QueryString.has("q1") == true 
    && QueryString.has("q2") == true 
    && QueryString.has("q3") == true 
    && QueryString.has("q4") == true 
    && QueryString.has("q5") == true
    && QueryString.has("q6") == true
    && QueryString.has("q7") == true
    && QueryString.has("q8") == true
    && QueryString.has("q9") == true
    && QueryString.has("q10") == true
    && QueryString.has("q11") == true
    && QueryString.has("q12") == true
    && QueryString.has("q13") == true
    && QueryString.has("q14") == true
    && QueryString.has("q15") == true
    && QueryString.has("q16") == true
    && QueryString.has("q17") == true
    && QueryString.has("q18") == true
    && QueryString.has("q19") == true
    && QueryString.has("q20") == true


    ) {
        lbl1.innerHTML += QueryString.get("q1").toString();
        lbl1.innerHTML += QueryString.get("q2").toString();
        lbl1.innerHTML += QueryString.get("q3").toString();
        lbl1.innerHTML += QueryString.get("q4").toString();

        lbl2.innerHTML = QueryString.get("q5").toString();
        lbl3.innerHTML = QueryString.get("q6").toString();

        lbl4.innerHTML += QueryString.get("q7").toString() + "/";
        lbl4.innerHTML += QueryString.get("q8").toString()+"/";
        lbl4.innerHTML += QueryString.get("q9").toString();

        lbl5.innerHTML = QueryString.get("q10").toString();
        lbl6.innerHTML = QueryString.get("q11").toString();
        lbl7.innerHTML = QueryString.get("q12").toString();
        lbl8.innerHTML = QueryString.get("q13").toString();
        lbl9.innerHTML = QueryString.get("q14").toString();
        lbl10.innerHTML = QueryString.get("q15").toString();
        lbl11.innerHTML = QueryString.get("q16").toString();
        lbl12.innerHTML = QueryString.get("q17").toString();
        lbl13.innerHTML = QueryString.get("q18").toString();
        lbl14.innerHTML = QueryString.get("q19").toString();
        lbl15.innerHTML = QueryString.get("q20").toString();
        






        

    }

}