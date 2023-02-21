"use strict";

// variables is created
const studentsJson = "students.json";
let students;
const allStudents = new Array();
// This is the prototype/Template for displaying student data
const Student = {
  firstName: "",
  lastName: "",
  middleName: "",
  nickName: "",
  image: "",
  house: "",
  gender: "",
};

// listens for all content to load, then calls function start
document.addEventListener("DOMContentLoaded", start);

// this function cals the getData function
function start() {
  getData();
}

// this function fetches the data from the json file, and puts ->
// the value of the json file on the variable students
async function getData() {
  const respons = await fetch(studentsJson);

  students = await respons.json();

  console.log(students);
  //   calls the clean data function and gives the function the data from the students variable
  cleanData(students);
}

// runs a forEach loop on the elements in the students variable
function cleanData(students) {
  // the json data is now called "student"
  students.forEach((student) => {
    // Creates a copy of the Template we made and calls it newStudent
    const newStudent = Object.create(Student);
    // calls the clean studen name function and gives it the values of newStudent og student
    cleanStudentName(newStudent, student);
    // calls the clean studen house function and gives it the values of newStudent og student
    cleanStudenHouse(newStudent, student);
    cleanStudentGender(newStudent, student);
    cleanStudentImage(newStudent, student);
    allStudents.push(newStudent);
  });

  //   calls the displayData function
  displayStudents();
}

function cleanStudentName(newStudent, student) {
  // trims the ends of student.fullname
  student.fullname = student.fullname.trim();

  if (student.fullname.includes(" ")) {
    newStudent.firstName = student.fullname.substring(0, student.fullname.indexOf(" "));
    newStudent.lastName = student.fullname.substring(student.fullname.lastIndexOf(" ") + 1);
    newStudent.middleName = student.fullname.substring(student.fullname.indexOf(" ") + 1, student.fullname.lastIndexOf(" "));

    if (student.fullname.includes("-")) {
      newStudent.lastName = student.fullname.substring(student.fullname.lastIndexOf("-") + 1);
      newStudent.middleName = student.fullname.substring(student.fullname.indexOf(" ") + 1, student.fullname.indexOf("-"));
    } else if (student.fullname.includes(`"`)) {
      //   console.log(`nick name`);
      newStudent.nickName = student.fullname.substring(student.fullname.indexOf(`"`) + 1, student.fullname.lastIndexOf(`"`));
    }
  } else {
    newStudent.firstName = student.fullname.substring(0);
    newStudent.lastName = "unknown";
  }
  //   console.log(`_${newStudent.lastName}_`);

  newStudent.firstName = `${newStudent.firstName[0].toUpperCase()}${newStudent.firstName.substring(1)}`;
  newStudent.lastName = `${newStudent.lastName[0].toUpperCase()}${newStudent.lastName.substring(1)}`;
  if (student.fullname.substring(student.fullname.indexOf(" "), student.fullname.lastIndexOf(" ")) === "") {
    newStudent.middleName = undefined;
  } else {
    newStudent.middleName = `${newStudent.middleName[0].toUpperCase()}${newStudent.middleName.substring(1)}`;
  }

  //   console.log(`_${newStudent.firstName}_`);
  //   allStudents.push(newStudent);
}

function cleanStudenHouse(newStudent, student) {
  // trims the ends of student.house
  student.house = student.house.trim();
  //   console.log(`_${student.house}_`);
  newStudent.house = student.house;
  //   console.log(`_${newStudent.house}_`);
  newStudent.house = `${student.house[0].toUpperCase()}${student.house.substring(1).toLowerCase()}`;
}

function cleanStudentGender(newStudent, student) {
  newStudent.gender = student.gender;
  //   console.log(`_${newStudent.gender}_`);
  newStudent.gender = `${newStudent.gender[0].toUpperCase()}${newStudent.gender.substring(1)}`;
}

function cleanStudentImage(newStudent, student) {
  //   console.log(`_${newStudent.lastName}_`);
  //   newStudent.image = `${newStudent.lastName.toLowerCase()}_${newStudent.firstName[0].toLowerCase()}.png`;
}

function displayStudents() {
  console.table(allStudents);
}
