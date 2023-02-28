var firstnumber = prompt("What is the first number");
firstnumber = parseInt(firstnumber);
var secondnumber = prompt("What is the second number");
secondnumber = parseInt(secondnumber);
var operation = prompt("What is your calculation sign +,/,-,* and %");
if (operation == "+"){
    alert(firstnumber + secondnumber);
}
if (operation == "-"){
    alert(firstnumber - secondnumber);
}
if (operation == "/"){
    alert(firstnumber / secondnumber);
}
if (operation == "*"){
    alert(firstnumber * secondnumber);
}
if (operation == "%"){
    alert(firstnumber % secondnumber);
}