var reglist=[];
function btn1click(){
    var aryobj = {
        Name : txt1.value,
        Email: txt2.value,
        MoNo: txt3.value
    };
reglist.push(aryobj);
    lbl1.innerHTML =" ";
   for (const RegData of reglist) {
    for (const key in RegData) {
        lbl1.innerHTML += RegData[key] + " , ";
      }
      lbl1.innerHTML += "<br>";
     
   }
}