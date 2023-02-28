const yourname = prompt("What is your name","Type Here");
const dobdate = prompt("What is your DOB(date)","Type Here");
const dobmonth = prompt("What is your DOB(month)","Type Here");
const dobyear = prompt("What is your DOB(year)","Type Here");


var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  console.log("Hello " + yourname + " Good Morning")
} else if (curHr < 18) {
  console.log("Hello " + yourname + " Good Afternoon")
} else if (curHr < 21){
  console.log("Hello " + yourname + " Good Evening")
} else {
  console.log("Hello " + yourname + " Good Night")
}
console.log("Your DOB is " + dobdate + "/" + dobmonth + "/" + dobyear)

function age() {
    var d1 = dobdate;
    var m1 = dobmonth;
    var y1 = dobyear;
    var totalyear= dobdate +  dobmonth +  dobyear;
  
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1 > d2){
      d2 = d2 + month[m2 - 1];
      console.log(d2);
      m2 = m2 - 1;
      console.log(m2)
    }
    if(m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    var dayyear = y*365;
    if(m > 0){
    var daymonth = month.slice(0,m)
    const reducer = (accumulator, curr) => accumulator + curr;
    var daymonthresult = daymonth.reduce(reducer);
    var ageindays = d+daymonthresult+dayyear;
    console.log("Your Age in Days " + ageindays)
  }else{
    var ese = d+dayyear;
    console.log("Your Age in Days " + ese);
  }
  
  console.log('Your Age is '+y+' Years, '+ m+' Months ' +d+' Days ' + hour +' Hours '+ minute + ' Minutes '+ second+  ' Seconds '+' old')

  var lefthour = 23-hour;
  var leftminute = 60-minute;
  var leftsecond = 60-second;
  
  var leftdays = month.slice(m,12);
  var leftdayscount = (acc, arr) => acc + arr;
  var leftdaysresult = leftdays.reduce(leftdayscount);
  var leftdaysanswer = leftdaysresult-d;
  if(m==0){
    console.log("How much time left in your next birthday? " + leftdaysanswer + " Days " + lefthour + " Hours " + leftminute + " Minutes " + leftsecond + " Seconds");
  }else{
    console.log("How much time left in your next birthday? " + (leftdaysresult+d) + " Days " + lefthour + " Hours " + leftminute + " Minutes " + leftsecond + " Seconds");
  }
  var happy = dobdate +  dobmonth;
  var totalyear1= d2.toString() +  m2.toString();
  if(totalyear1 == happy){
    console.log("Happy Birth Day " + yourname + " Today is Your " + y + "th " + " Birthday")
  }
  
}
  age()