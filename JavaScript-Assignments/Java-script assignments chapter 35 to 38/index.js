//Assignment 1
const userValue = prompt("Please Enter Your String Value");
const wordlower = userValue.toLowerCase();

function capitalfirstletter(sentence) {
    let words = sentence.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}
console.log(capitalfirstletter(wordlower));


//Assignment 2
const factorialValue =prompt("What is your factorial number?");
function factorialize(num) {
    let total = 1
    for (let i = 1; i <= num; i++) {
      total *= i
    }
    return total;
  }
  
  console.log(factorialize(factorialValue));
