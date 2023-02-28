const userValue = parseInt(prompt("What is your course 1 number?"));
const userValue1 = parseInt(prompt("What is your course 2 number?"));
const userValue2 = parseInt(prompt("What is your course 3 number?"));
const userValue3 = parseInt(prompt("What is your course 4 number?"));
const userValue4 = parseInt(prompt("What is your course 5 number?"));
const userValueSum = userValue + userValue1 + userValue2 + userValue3 + userValue4;
const totalMarks = 500;
const percentage = userValueSum * 100 / totalMarks;

switch (true) {
    case percentage > 100:
        
       alert("Course Number is Invalid");
      break;
    case percentage>=90:
        
        alert('Your Grade is A+ and ' + percentage + "%");
        break;
    case percentage >= 75:
        
       alert("Your Grade is A and " + percentage + "%");
      break;
    case percentage >= 60:
        
       alert("Your Grade is B and " + percentage + "%");
      break;
    case percentage >= 45:
        
       alert("Your Grade is C and " + percentage + "%");
      break;
    case percentage >= 30:
        
       alert("Your Grade is D and " + percentage + "%");
      break;
    case percentage >= 0:
        
       alert("Your Grade is F and " + percentage + "%");
      break;  
}
