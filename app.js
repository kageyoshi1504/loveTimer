const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const specialDay = new Date("Nov 11 2022");

function getCountDown() {
  const currentDay = new Date();
  const countDays = currentDay - specialDay;
  console.log(countDays);
  const d = Math.floor(countDays / 1000 / 60 / 60 / 24);
  const h = Math.floor(countDays / 1000 / 60 / 60) % 24;
  const m = Math.floor(countDays / 1000 / 60) % 60;
  const s = Math.floor(countDays / 1000) % 60;
  days.innerHTML = d + " Ngày";
  hours.innerHTML = h.toString().length >= 2 ? h : `0${h}`;
  minutes.innerHTML = m.toString().length >= 2 ? m : `0${m}`;
  seconds.innerHTML = s.toString().length >= 2 ? s : `0${s}`;
}
setInterval(getCountDown, 1000);
