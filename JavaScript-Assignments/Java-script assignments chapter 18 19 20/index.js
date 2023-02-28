const courses = []
for (let i = 0; i <= 4; i++) {
    courses.push(prompt("What is your course name?"))
}
alert(courses)
function editvalue (){
    var a = parseInt(prompt("which number value change?"))
    var c = a-1
    var b = prompt("what is your edit value?")
    courses.splice(c,1,b)
    alert(courses)
}