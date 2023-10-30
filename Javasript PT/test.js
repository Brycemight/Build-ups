console.log('hello world')
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

function myFunction(p1, p2) {
    return p1 * p2;
  }

  // Returns a random integer from 1 to 100:
let my = Math.round(Math.random() * 100) + 1;

console.log(my)
var clockText = document.querySelector('.clock h1');

setInterval(() => {
  var now = new Date();
  var hoursToMidnight = 24 - now.getHours();
  var minutes = 59 - now.getMinutes();
  var seconds = 59 - now.getSeconds();
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  clockText.textContent = `${hoursToMidnight}:${minutes}:${seconds}`;
}, 1000)

const hi = new Date();
document.getElementById("date").innerHTML = hi.toString();