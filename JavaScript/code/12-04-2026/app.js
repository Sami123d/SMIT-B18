
// function repeat() {
  
//   console.log("running")
// };



// for (var i = 1; i <= 5; i++) {

//   repeat()
// }

// var cityToCheck = "Tucson";

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the cleanest cities"  + cleanestCities[0]);
// }
// else if (cityToCheck === cleanestCities[1]) {
//   alert("It's one of the cleanest cities" + cleanestCities[1]);
// }
// else if (cityToCheck === cleanestCities[2]) {
//   alert("It's one of the cleanest cities" + cleanestCities[2]);
// } else if (cityToCheck === cleanestCities[3]) {
//   alert("It's one of the cleanest cities" + cleanestCities[3]);
// }
// else if (cityToCheck === cleanestCities[4]) {
//   alert("It's one of the cleanest cities" + cleanestCities[4]);
// }

var cityToCheck = "Karachi";
// console.log(cityToCheck)
var cleanestCities = ["islamabad", "hyderabad", "Umerkot", " Larkana", "Karachi"];

for (var i = 0; i<=4; i++) {
  // console.log(cleanestCities[i], "i====>")
  if(cityToCheck === cleanestCities[i]){
    alert(`It's one of the cleanest cities in parallel universe ${cleanestCities[i]}`);
  }
}