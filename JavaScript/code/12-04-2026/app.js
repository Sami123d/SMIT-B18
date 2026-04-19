
// function repeat() {
  
//   console.log("running")
// };



// for (var i = 1; i <= 5; i++) {

//   repeat()
// }

// var song = ` Sing 1 bottles of beer on the wall, 1 bottles of beer. </br>`

// for (let i = 1; i <= 101; i++){
//     document.write( `Sing ${i} bottles of beer on the wall, ${i} bottles of beer. </br>`);
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

// var cityToCheck = "Karachi";

// var cleanestCities = ["islamabad", "Karachi", "Umerkot", "Larkana", "Lahore"];

// var matchFound = "no";

// for (var i = 0; i<=4; i++) {
//   if(cityToCheck === cleanestCities[i]){
//     matchFound = "yes";
//     console.log(`It's one of the cleanest cities in parallel universe ${cleanestCities[i]}`);
//   }
// }

// if(matchFound === "no") {
// console.log("cleanset cities not found")
// }


var userDemand = "biryani";

var restaurant = ["biryani", "pulao", "biryani", "biryani", "karahi"];

for (i=0; i<=4 ; i++){
  if (i == 0 || i == 2) {
    console.log("biryani yaha se nhi agay se leni hai");
    continue
  }
  if(userDemand == restaurant[i]) {
    console.log("biryani mil gayi is counter se " + i)
  break
  }
}