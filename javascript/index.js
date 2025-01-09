function updateClock() {
  let tokyoElement = document.querySelector("#tokyo-city");
  let tokyoTimeElement = document.querySelector("#tokyo-time");
  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM D, YYYY");
  let timeWithoutPeriod = tokyoTime.format("hh:mm:ss");
  let period = tokyoTime.format("A"); // A is for AM/PM
  tokyoTimeElement.innerHTML = `${timeWithoutPeriod} <small>${period}</small>`;

  let newYorkElement = document.querySelector("#newyork-city");
  let newYorkTimeElement = document.querySelector("#newyork-time");
  let newYorkDateElement = document.querySelector("#newyork-date");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM D, YYYY");
  let newYorkTimeWithoutPeriod = newYorkTime.format("hh:mm:ss");
  let newYorkPeriod = newYorkTime.format("A"); // A is for AM/PM
  newYorkTimeElement.innerHTML = `${newYorkTimeWithoutPeriod} <small>${newYorkPeriod}</small>`;

  let londonElement = document.querySelector("#london-city");
  let londonTimeElement = document.querySelector("#london-time");
  let londonDateElement = document.querySelector("#london-date");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("dddd, MMMM D, YYYY");
  let londonTimeWithoutPeriod = londonTime.format("hh:mm:ss");
  let londonPeriod = londonTime.format("A"); // A is for AM/PM
  londonTimeElement.innerHTML = `${londonTimeWithoutPeriod} <small>${londonPeriod}</small>`;

  let parisElement = document.querySelector("#paris-city");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisDateElement = document.querySelector("#paris-date");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("dddd, MMMM D, YYYY");
  let parisTimeWithoutPeriod = parisTime.format("hh:mm:ss");
  let parisPeriod = parisTime.format("A"); // A is for AM/PM
  parisTimeElement.innerHTML = `${parisTimeWithoutPeriod} <small>${parisPeriod}</small>`;
}
setInterval(updateClock, 1000);
function displaySelectedCityTime(event) {
  if (event.target.value === "Asia/Tokyo") {
    alert(`It is ${tokyoTime} in Asia/Tokyo`);
  }
  if (event.target.value === "America/New_York") {
    alert(`It is ${newYorkTime} in America/New_York`);
  }
  if (event.target.value === "Europe/London") {
    alert(`It is ${londonTime} in Europe/London`);
  }
  if (event.target.value === "Europe/Paris") {
    alert(`It is ${parisTime} in Europe/Paris`);
  }
}
let citiesSelector = document.querySelector("#clocks");
citiesSelector.addEventListener("change", displaySelectedCityTime);
