var car = {
  make: "suzuki",
  model: "alto",
  year: 2025,
  colors: ["white", "silver", "gray", "black"],
  hybrid: false,
  drive: function () {console.log("alto is running")},
  Stop:  function () {console.log("alto is stop")}
}

console.log(car.make, "make")
console.log(car.colors[0], "colors")
console.log(car.drive())
console.log(car.Stop())

// challenge

var person1 = {
  name: "sami",
  age:23,
  status: "resident"
};

var person2 = {
  name: "john",
  age: 18,
  status: "tourist"
};

if(person1.age > 18 && person1.status === "resident"){
    console.log("PAKISTAN Resident")
}else{
   console.log("OVERSEAS")
}
if(person2.age > 18 && person2.status === "resident"){
    console.log("PAKISTAN Resident")
}else{
   console.log("OVERSEAS")
}


var atmMenu = ["1) withdraw", "2) deposit", "3) check balance", "4) utility bills"];

for(var i=0; i<=3; i++){

  document.writeln(atmMenu[i] + "</br>")
}

var userInput = +prompt("select user ATM option");


switch(userInput){
  case 1:
    console.log("your amount is successfully withdraw");
    break;
    case 2:
    console.log("your amount is successfully deposit");
    break;
    case 3:
    console.log("your current balance is xyz");
    break;
    case 4:
    console.log("your utility bill is paid");
    break;
    default:
      console.log("invalid option enter");
}