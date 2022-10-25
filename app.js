// Selectors

const countDate = new Date("Oct 25, 2022 15:00:00").getTime();
// const countDate = new Date('Dec 25, 2022 00:01:00').getTime();

const countTime = document.getElementsByClassName("files");
const output = document.querySelector(".files");
const submitBtn = document.querySelector("#submit");
const inputValue = document.querySelector("#datetime");
let daysElem = document.querySelector(".d");
let hoursElem = document.querySelector(".h");
let minElem = document.querySelector(".m");
let secElem = document.querySelector(".s");

// Events

submitBtn.addEventListener("click", function (e) {
  const countDate = new Date(inputValue.value).getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDate - now;
    if (distance < 1) {
      clearInterval(x);
      return (document.getElementById("display").innerHTML = "EXPIRED!");
    }
    // time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    daysElem.innerText = days;
    hoursElem.innerText = hours;
    minElem.innerText = minutes;

    if (seconds < 10 && seconds > 0) {
      //Pentru a aparea 0 in fata atunci cand secundele < 10
      seconds = `0${seconds}`;
      secElem.innerText = seconds;
    } else {
      secElem.innerText = seconds;
    }

    // console.log(distance);
  });
});

// Functions

// let x = setInterval(function () {
//   let now = new Date().getTime();
//   let distance = countDate - now;
//   if (distance < 1) {
//     clearInterval(x);
//     return (document.getElementById('display').innerHTML = 'EXPIRED!');
//   }
//   // time calculations for days, hours, minutes and seconds
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   daysElem.innerText = days;
//   hoursElem.innerText = hours;
//   minElem.innerText = minutes;

//   if (seconds < 10 && seconds > 0) {
//     //Pentru a aparea 0 in fata atunci cand secundele < 10
//     seconds = `0${seconds}`;
//     secElem.innerText = seconds;
//   } else {
//     secElem.innerText = seconds;
//   }

//   // console.log(distance);
// });
