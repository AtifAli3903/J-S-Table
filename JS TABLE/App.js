// var student = {
//     name: "Ali",
//     fathername: "Mubeen",
//     age: 18,
// };

// student.name = "Minam";
// student.insttitute = "SAIMS";

// delete student.age;
// console.log(student);
//--------------------------------------

// var student = {
//     name: prompt("Enter Your Name"),
//     fathername: prompt("Enter Your Father Name"),
//     class: prompt("Enter Your Class"),
//     rollno: prompt("Enter Your Roll No"),
//     age: prompt("Enter Your Age"),
// }
// console.log(student);

// --------------------------------

var table = document.getElementById("studentData")
var rollnumberInput = document.getElementById("inp");
var showRollNumber = document.getElementById("showRollNumber");
var showName = document.getElementById("showName");
var showFatherName = document.getElementById("showFatherName");
var showContact = document.getElementById("showContact");
var showResult = document.getElementById("showResult");
var student = [
    {
        rollno: 1,
        name: "Ali",
        fathername: "Suleman",
        contact: "0316",
        Result: "Fail",
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
console.log(rollnumberInput.value)
for (var i = 0; i < student.length; i++) {
    table.innerHTML +=
        "<tr><td>" + student[i].rollno +
        "</td><td>" + student[i].name +
        "</td><td>" + student[i].fathername +
        "</td><td>" + student [i].contact +
        "</td><td>" + student[i].Result
        "</td></tr>"
    }

function searchResult() {
    var userRollNumber = rollnumberInput.value;
    for (var i = 0; i < student.length; i++) {
        if (userRollNumber == student[i].rollno) {
            var obj = student[i];
            console.log(student[i])
            showRollNumber.innerHTML = obj.rollno
            showName.innerHTML = obj.name
            showFatherName .innerHTML = obj.fathername
            showContact.innerHTML = obj.contact
            showResult.innerHTML = obj.Result;
        }
    }

}


// var student = {
//     name: "Muhammad Ali",
//     fathername: "Ahmed",
//     age: 16,
//     contact:"0312345678",
// };

// //edit//
// student.fathername ="Abdul Rehman";

// add

// student.institute :












//--------------------
// for (var i = 0; i < student.length; i++) {
//     student[i].id = i + 1;
//     console.log(student[i]);
// }
//--------------------------------

// var student = {
//     name: "Ali",
//     fathername: "Mubeen",
//     age: 18,
//     hobbies: ["a" , "b" , "c"],
//     isClearedInAllSubjects: false,
//     address: {
//         Country: "Pakistan",
//         city: "Karachi",
//         Area: "Hussainabad",
//     },
//     func: function() {
//         console.log("Function Called");
//     },
// };
// // student.func();
// console.log(student);