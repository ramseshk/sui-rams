function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header_date").innerHTML = date;
}

function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = "Buona notte 😴";
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = "Buon giorno 📈";
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = "Buon pomeriggio 💯";
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = "Buona sera 🌙";
      break;
  }
}

function loadFunctions() {
  date();  
  greet();
}


