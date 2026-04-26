//for loops nested

var restaurant = ["biryani", "pulao", "korma", "nihari", "karahi"];
console.log(restaurant.length)
var drinks = ["cola next", "sting", "Fizzup"];

for (var i = 0; i < 5; i++) {
console.log(restaurant[i])
  for (var j = 0; j < 3; j++) {

    // console.log(drinks[j], "-----j")
    console.log("hum de rhy hain apko " + restaurant[i] + " or drinks main " + drinks[j])
  }
}

//print star
// *
// **
// ***
// *****

// var n=5;

// for (var i=0; i<1 ; i++ ) {
//    console.log(i, "outer loop")
//    let row = ""
//    for (var j=0; j<5; j++){
//     row = row + "*"
//     console.log(row)
//    }
// }

//function
function addValue(num1, num2) {
  console.log(num1 + num2);
}
console.log(addValue(2, 2));

//function expression
let mulValues = function (num1, num2) {
  return num1 * num2;
};

mulValues(5, 5);
mulValues(5, 5);

console.log(mulValues(10, 5));

//array
var classes = [
  "adil",
  "568",
  "28",
  "hussain",
  "420",
  "kazim",
  "3715",
  "ahsan",
  "125",
];
console.log(classes)

//object
var person = {
  name: "adil",
  age: 28,
  rollNo: "568",
  siblings: ["a", "b" , "c"],
  maritalStatus: "single",
  isOpentoWork: function () {
   return console.log("i am open to work as a mern stack developer")
  }
};
console.log(person.isOpentoWork())

// array of objects

var classArr = [
  {
    name: "hussain",
    age: 20,
    status: "single",
  },
  {
    name: "adil",
    age: 28,
    status: "single",
  },
  {
    name: "kazim",
    age: 28,
    status: "single",
  },
  {
    name: "shakeel",
    age: 35,
    status: "married",
  },
  {
    name: "adeel hussain",
    age: 32,
    status: "married",
  },
];

// document.write(person.name);

console.log(classArr)
console.log(classArr[1])
document.write(classArr[0].name + "</br>");
document.write(classArr[1].name + "</br>");
document.write(classArr[2].name + "</br>");
document.write(classArr[3].name + "</br>");
document.write(classArr[4].name);