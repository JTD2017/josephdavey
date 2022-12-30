var body = document.getElementById("top");
body.className = localStorage.getItem("stateMode");

function toggleDarkLight() {

  var elem = document.getElementById("DarkBtn");
  if (elem.innerHTML=="Toggle Light mode") elem.innerHTML = "Toggle Dark mode";
  else elem.innerHTML = "Toggle Light mode";

  var body = document.getElementById("top");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  localStorage.setItem("stateMode", body.className);
}
