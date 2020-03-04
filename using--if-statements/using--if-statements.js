var score = 75; //score
var msg; //Message

if (score >= 50) {
  //if score is 50 or higer then print msg on the page
  msg = "part1 Congratulations! ";
  msg += " proceed to the next round ";
}

var el = document.getElementById("answer");
el.textContent = msg;

var score = 75; // score
var msg = ""; //message

function congratulate() {
  msg += " part2 Congratulations! ";
}

if (score >= 50) {
  //if score is 50 or more
  congratulate();
  msg += "Proceed to the next round.";
}
var el = document.getElementById("answer2");
el.innerHTML = msg;

var socre = 1000; //score
var msg = ""; //message

function compareNumber() {
  msg += " good the score is greater then what you need to pass so you pass ";
}

if (socre >= 100) {
  //if score is 100 or more
  compareNumber();
  msg += "Porceed to the next round";
}

//here the code to display the message on the page
var el = document.getElementById("answer3");
el.innerHTML = msg;
