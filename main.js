const lang = navigator.language;

let date = new Date();
let dayNumber = date.getDate();
let month = date.getMonth();
let monthName = date.toLocaleString(lang, {month: "long"});
let dayName = date.toLocaleString(lang, {weekday: "long"});
let year = date.getFullYear();

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;
