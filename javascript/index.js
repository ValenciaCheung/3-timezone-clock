let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");
let newYorkTime = moment()
  .tz("America/New_York")
  .format("dddd, MMMM D, YYYY h:m A");
let londonTime = moment()
  .tz("Europe/London")
  .format("dddd, MMMM D, YYYY h:m A");
let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:m A");

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
