function updateCityTime() {
  let tokyoElement = document.querySelector("#tokyo-city");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyo-date");
    let tokyoTimeElement = document.querySelector("#tokyo-time");
    tokyoDateElement.innerHTML = moment
      .tz("Asia/Tokyo")
      .format("dddd MMM Do YYYY");
    tokyoTimeElement.innerHTML = moment
      .tz("Asia/Tokyo")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  let newYorkElement = document.querySelector("#newyork-city");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#newyork-date");
    let newYorkTimeElement = document.querySelector("#newyork-time");
    newYorkDateElement.innerHTML = moment
      .tz("America/New_York")
      .format("dddd MMM Do YYYY");
    newYorkTimeElement.innerHTML = moment
      .tz("America/New_York")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  let londonElement = document.querySelector("#london-city");
  if (londonElement) {
    let londonDateElement = document.querySelector("#london-date");
    let londonTimeElement = document.querySelector("#london-time");
    londonDateElement.innerHTML = moment
      .tz("Europe/London")
      .format("dddd MMM Do YYYY");
    londonTimeElement.innerHTML = moment
      .tz("Europe/London")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
  let parisElement = document.querySelector("#paris-city");
  if (parisElement) {
    let parisDateElement = document.querySelector("#paris-date");
    let parisTimeElement = document.querySelector("#paris-time");
    parisDateElement.innerHTML = moment
      .tz("Europe/Paris")
      .format("dddd MMM Do YYYY");
    parisTimeElement.innerHTML = moment
      .tz("Europe/Paris")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
        <div class="date">${cityTime.format("dddd MMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="/">All cities</a>`;
}

updateCityTime();
setInterval(updateCityTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
