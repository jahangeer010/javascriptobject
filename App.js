var table = document.getElementById("studentData");
var rollnumberInput = document.getElementById("inp");
var showRollNumber = document.getElementById("showRollNumber");
var showName = document.getElementById("showName");
var showFatherName = document.getElementById("showFatherName");
var showContact = document.getElementById("showContact");
var showResult = document.getElementById("showResult");
var student = [
  {
    rollno: 1,
    name: "Syed Jahangeer ",
    fathername: "Syed Junaid khalid",
    contact: "0316",
    Result: "Pass",
  },
  {
    rollno: 2,
    name: "Aman",
    fathername: "Farhan",
    contact: "0317",
    Result: "Pass",
  },
  {
    rollno: 3,
    name: "Taha",
    fathername: "Munawwar",
    contact: "0318",
    Result: "A",
  },
  {
    rollno: 4,
    name: "Shaiz",
    fathername: "Ali",
    contact: "0319",
    Result: "A+",
  },
  {
    rollno: 5,
    name: "Hadi",
    fathername: "Yaqoob",
    contact: "0320",
    Result: "Promote",
  },
];

for (var i = 0; i < student.length; i++) {
  table.innerHTML +=
    "<tr><td>" +
    student[i].rollno +
    "</td><td>" +
    student[i].name +
    "</td><td>" +
    student[i].fathername +
    "</td><td>" +
    student[i].contact +
    "</td><td>" +
    student[i].Result;
  ("</td></tr>");
}

function searchResult() {
  var userRollNumber = rollnumberInput.value;
  for (var i = 0; i < student.length; i++) {
    if (userRollNumber == student[i].rollno) {
      var obj = student[i];
      console.log(student[i]);
      showRollNumber.innerHTML = obj.rollno;
      showName.innerHTML = obj.name;
      showFatherName.innerHTML = obj.fathername;
      showContact.innerHTML = obj.contact;
      showResult.innerHTML = obj.Result;
    }
  }
}
