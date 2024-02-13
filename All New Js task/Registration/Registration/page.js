window.onload = function () {};

var count = 1;
function btn1Click() {
  var Name = txt1.value;
  var Email = txt2.value;
  var City = drop1.value;
  var Gender = "";
  if (rdo1.checked == true) {
    Gender = rdo1.value;
  } else {
    Gender = rdo2.value;
  }
  var Address = txt3.value;
  var DOB = Birth1.value + "/" + Birth2.value + "/" + Birth3.value;
  CreateRow(count,Name, Email, City, Gender, Address, DOB);
  count++;
  txt1.value = "";
  txt2.value = "";
  drop1.selectedIndex = 0;
  txt3.checked = false;
  rdo1.checked = false;
  Birth1.selectedIndex = 0;
  Birth2.selectedIndex = 0;
  Birth3.selectedIndex = 0;
  // count++;
}
function btn2Click() {
  var Name = txt1.value;
  var Email = txt2.value;
  var City = drop1.value;
  var Gender = "";
  if (rdo1.checked == true) {
    Gender = rdo1.value;
  } else {
    Gender = rdo2.value;
  }
  var Address = txt3.value;
  var DOB = Birth1.value + "/" + Birth2.value + "/" + Birth3.value;

  var RowPos = document.getElementById("UpdateBtn").getAttribute("data-pos");
  var ColsOfRow = document.querySelectorAll("#tbdTag>tr:nth-child("+RowPos+")>td");
  ColsOfRow[1].innerHTML = Name;
  ColsOfRow[2].innerHTML = Email;
  ColsOfRow[3].innerHTML = City;
  ColsOfRow[4].innerHTML = Gender;
  ColsOfRow[5].innerHTML = Address;
  ColsOfRow[6].innerHTML = DOB;
  txt1.value = "";
  txt2.value = "";
  drop1.selectedIndex = 0;
  txt3.checked = false;
  rdo1.checked = false;
  Birth1.selectedIndex = 0;
  Birth2.selectedIndex = 0;
  Birth3.selectedIndex = 0;
  console.log(ColsOfRow)

  btn1.style.display = "Block";
  UpdateBtn.style.display = "none";
}
function CreateRow(No, Name, Email, City, Gender, Address, DOB) {
  // Row
  var Row = document.createElement("tr");
  document.getElementById("tbdTag").appendChild(Row);

  //No Coloum
  var NoCol = document.createElement("td");
  NoCol.innerHTML = No;
  Row.appendChild(NoCol);

  // Name coloum
  var NameColoum = document.createElement("td");
  NameColoum.innerHTML = Name;
  Row.appendChild(NameColoum);

  // Email Coloum
  var EmailColoum = document.createElement("td");
  EmailColoum.innerHTML = Email;
  Row.appendChild(EmailColoum);

  // City Coloum
  var CityColoum = document.createElement("td");
  CityColoum.innerHTML = City;
  Row.appendChild(CityColoum);

  // Gender Coloum
  var GenderColoum = document.createElement("td");
  GenderColoum.innerHTML = Gender;
  Row.appendChild(GenderColoum);

  // Address Coloum
  var AddressColoum = document.createElement("td");
  AddressColoum.innerHTML = Address;
  Row.appendChild(AddressColoum);

  // birth Coloum
  var birthColoum = document.createElement("td");
  birthColoum.innerHTML = DOB;
  Row.appendChild(birthColoum);

  //button coloum
  var EditColoum = document.createElement("td");
  EditColoum.innerHTML = "";
  Row.appendChild(EditColoum);

  // Editbuttom
  var EditBtn = document.createElement("input");
  EditBtn.type = "button";
  EditBtn.value = "Edit";
  EditBtn.onclick = function () {
    btn1.style.display = "none";
    UpdateBtn.style.display = "block";
    txt1.value = NameColoum.innerHTML;
    txt2.value = EmailColoum.innerHTML;
    drop1.value = CityColoum.innerHTML;
    if (GenderColoum.innerHTML == "Male") {
      rdo1.checked = true;
    } else {
      rdo2.checked = true;
    }
    txt3.value = AddressColoum.innerHTML;
    var db = birthColoum.innerHTML.split("/", 3);
    Birth1.value = db[0];
    Birth2.value = db[0];
    Birth3.value = db[0];

    document.getElementById("UpdateBtn").setAttribute("data-pos",No);
  };
  EditColoum.appendChild(EditBtn);

  //button coloum
  var DeleteCol = document.createElement("td");
  Row.appendChild(DeleteCol);

  // Deltebuttom
  var DeleteBtn = document.createElement("input");
  DeleteBtn.type = "button";
  DeleteBtn.value = "Delete";
  DeleteBtn.onclick = function () {
    document.getElementById("tbdTag").removeChild(Row);
  };
  DeleteCol.appendChild(DeleteBtn);
}
