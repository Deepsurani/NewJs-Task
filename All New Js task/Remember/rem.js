window.onload = function(){
    if(localStorage.getItem("l1") != null && localStorage.getItem("l2") != null){
        txt1.value = localStorage.getItem("l1").toString();
        txt2.value = localStorage.getItem("l2").toString();
    }
    else{
        txt1.value = " ";
        txt2.value  = " ";
    }

}
function btn1(){
    var t1 = txt1.value;
    var t2 = txt2.value;
    window.location.href = "wel.html";
    if(ck1.checked == true){
        localStorage.setItem("l1",t1);
        localStorage.setItem("l2",t2);
    }
    else{
        localStorage.removeItem("l1");
        localStorage.removeItem("l2");
        txt1.value = " ";
        txt2.value  = " ";
    }
}