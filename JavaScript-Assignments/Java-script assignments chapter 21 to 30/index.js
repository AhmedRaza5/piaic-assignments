//Assignment 1
const userinput = Math.ceil(prompt("what is your decimal number?"));
const text = "This is my Dummy text";
const stext = text.slice(0,userinput);
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
alert(reverseString(stext));


//Assignment 2
const alphabet ="cloUd naTive computinG";
const wordlower = alphabet.toLowerCase();

function capitalfirstletter(sentence) {
    let words = sentence.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}
console.log(capitalfirstletter(wordlower));




