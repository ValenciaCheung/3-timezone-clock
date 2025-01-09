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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    currentTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
</div>
`;
}

setInterval(updateCity, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
