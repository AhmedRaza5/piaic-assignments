var courses = []
var course1 = prompt("What is your coursename?")
courses.push(course1)
var course2 = prompt("What is your coursename?")
courses.push(course2)
var course3 = prompt("What is your coursename?")
courses.push(course3)
var course4 = prompt("What is your coursename?")
courses.push(course4)
var course5 = prompt("What is your coursename?")
courses.push(course5)
alert(courses)
function editvalue (){
    var a = parseInt(prompt("which number value change?"))
    var c = a-1
    var b = prompt("what is your edit value?")
    courses.splice(c,1,b)
    alert(courses)
}
