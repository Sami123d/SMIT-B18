// var firstName = "Adil"
// var lastName = "Khan"
// var fullName = firstName + " " + lastName

// alert(firstName + " " + lastName)

// document.writeln(firstName + " " + lastName)
// document.writeln(fullName)
// document.writeln(firstName, lastName)


// document.writeln("2" + "2a")
// document.writeln("2" / "2")

// document.writeln("my age is " + 22)

// alert("Name")
// prompt()
// prompt("Enter your name", "Pakistan")

// var name = prompt("Enter you name:")

// var number = +prompt("Enter your lucky number: ")


// document.writeln(10 + number)

// console.log(typeof(name))

// var name = NaN

// console.log(typeof(undefined));




// document.writeln("Welcome, " + name)

// document.writeln("Welcome, " + name)


// var luckyNum = +prompt("Enter your lucky number: ")

// document.writeln(2 + luckyNum)

// var age = 35

// if () {}

// if (age < 18) {
//   alert("Patli gali niklo")
// }






// console.log(3 !== '3');
// console.log("ab" === "AB");
// console.log("ab" !== "AB");





// != not equal console.log(8 != 7);
// == equal to console.log(8 == 8);
// === equal as well as checks the type  console.log("8" === 8);
// > greater than console.log(8.00001 > 8);
// < less than console.log(2 < 4);
// <= less than or equal console.log(2 <= 2);
// >= greater than or equal console.log(6 >= 6);

// console.log(2 == 2 || 4 == 4  || 4 > 1 || 0 < 45);
//          true   or   true    ===> true

// console.log(2 == 1 || 3 == 4);
//          true      false   ===> true

// console.log(2 == 2 && 4 == 9 && 4 > 9);


// || or
// && and


// var boolean = false

// document.writeln(!boolean)

// var num = 10
//  12  not equal to 0
// if (num != 16) {
// document.writeln("Number is not equal to zero")

// equal
// if (num == 18) {
// document.writeln("Number is equal")

// less than
// if (num < 18) {
//   document.writeln("number is less than 18")
// }

// greater than
// if (num > 18) {
//   document.writeln("Number is greater than 18")
// }

// greater than or equal
// if (num >= 18) {
//   document.writeln("Number is greater than or equal to 18")
// }


// less than or equal
// if (num <= 18) {
//   document.writeln("Number is less than or equal to 18")
// }

// var age = 16

// if (age === 16) {
//   document.writeln("age is 16")
// }

// var age = prompt("Enter your age: ")
// var city = prompt("Enter your city: ")

// or operation
// if (age > 16 || city == "karachi") {
//   document.writeln("Welcome to the city of ligh!")
// }

// if (age > 16 && city == "karachi") {
//   document.writeln("Welcome to the city of ligh!")
// }



// var age = prompt("Enter your age: ");


// if (age >= 18) {
//   document.writeln("You are eligible for CNIC")
// } else {
//   document.writeln("You are NOT eligible for CNIC")
// }


// var cityName = prompt("Enter your living city: ") // lahore

// if (cityName === "karachi") {
//   document.writeln("You are in the right place.")
// }

// if (cityName == "hub" || cityName == "thatta") {
//   document.writeln("You are too close")
// } else {
//   document.writeln("Chal putter chutti kar")
// }

// if (cityName === "karachi") { // lahore === karachi ==> false
//   document.writeln("You are in the right place.")
// } else if (cityName == "hub" || cityName == "thatta") { // lahore === hub || lahore === "thatta"
//   document.writeln("You are too close")
// } else {
//   document.writeln("Chal putter chutti kar")
// }

// var per = prompt("Enter your percentage: ")

// var grade;
// if (per >= 80 && per <= 100) {
//   grade = "A+"
// } else if (per >= 70 && per < 80) {
//   grade = "A"
// } else if (per >= 60 && per < 70) {
//   grade = "B"
// } else if (per >= 50 && per < 60) {
//   grade = "C"
// } else if (per >= 40 && per < 50) {
//   grade = "D"
// } else if (per >= 35 && per < 40) {
//   grade = "E"
// } else if (per < 35 && per > 0) {
//   grade = "FAIL 😔"
// } else {
//   grade = "Invalid percentage"
// }

// document.writeln("Your grade: " + grade)


var age = prompt("Enter your age: ")
var isMem = prompt("Are you a memeber of our club? ")

// if (age > 18) {
//   if (isMem == "Yes" || isMem == "yes" || isMem == "YES" || isMem == "y") {
//     document.writeln("Yes your are part of our club")
//   }
// } else {
//   document.writeln("Pogo dekh ke aao")
// }

if (age > 18 && (isMem == "Yes" || isMem == "yes" || isMem == "YES" || isMem == "y")) {
  document.writeln("Yes your are part of our club")
} else {
  document.writeln("You are nor part of our club")
}