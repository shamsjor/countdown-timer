let days = 9,
  hours = 23,
  minutes = 33,
  seconds = 59;
let daysSpan = document.querySelector(`.days span`),
  hoursSpan = document.querySelector(`.hours span`),
  minutesSpan = document.querySelector(`.minutes span`),
  secondssSpan = document.querySelector(`.seconds span`);

function counter() {
  seconds -= 1;
  if (seconds < 0) {
    minutes -= 1;
    seconds = 59;
  }
  secondssSpan.innerHTML = `${seconds}`.padStart(2, "0");
  minutesSpan.innerHTML = `${minutes}`.padStart(2, "0");
  if (minutes === 0 && seconds === 0) {
    hours -= 1;
    minutes = 59;
  }
  hoursSpan.innerHTML = `${hours}`.padStart(2, "0");
  if (minutes === 0 && seconds === 0 && hours === 0) {
    days -= 1;
    hours = 23;
  }
  daysSpan.innerHTML = `${days}`.padStart(2, "0");
  if (minutes === 0 && seconds === 0 && hours === 0) {
    daysSpan.innerHTML = `00`;
    daysSpan.innerHTML = `00`;
    daysSpan.innerHTML = `00`;
    daysSpan.innerHTML = `00`;
  }
  setTimeout(counter, 1000);
}
counter();
