var course1 = prompt("what is your course1 number");
course1 = parseInt(course1);
var course2 = prompt("what is your course2 number");
course2 = parseInt(course2);
var course3 = prompt("what is your course3 number");
course3 = parseInt(course3);
var course4 = prompt("what is your course4 number");
course4 = parseInt(course4);
var course5 = prompt("what is your course5 number");
course5 = parseInt(course5);

var obtainedmarks = course1 + course2 + course3 + course4 + course5;
var totalmarks = 500;
var totalpercentage = obtainedmarks * 100 / totalmarks;
alert(totalpercentage);