// Map Method examples 1
const lang = ["HTML", "CSS", "Bootstrap", "React"];

const newLang = lang.map((val, index, array) => {
    return val;
})
document.querySelector("#p1").innerHTML = newLang;

// Map Method examples 2
const users = [
    { firstName: "john", lastName: "doe" },
    { firstName: "Daniel", lastName: "steve" },
    { firstName: "mike", lastName: "hoff" },
  ];

  const newUser = users.map((val,index,array) => {
    return val.firstName;
  })
  document.querySelector("#p2").innerHTML = newUser;

  // Map Method examples 3

  const num = [1,2,3,4,5,6,7,8,9,10];

  const newNumber = num.map((val,index,array) => {
    return val*2;
  })
  document.querySelector("#p3").innerHTML = newNumber;

 // Map Method examples 4

 const firstName = ["Priya", "Sandeep", "Ridant"];

 const newName = firstName.map((val,index,array) => {
    if (index == 2) {
        return val.toUpperCase();
    }
    else{
        return val.toLowerCase();
    }
 })
 document.querySelector("#p4").innerHTML = newName;

 // Map Method examples 5

 const square = [1,4,9,16,25,36,49,64,81,100]

 const newSquare = square.map((val,index,array) =>{
    return (Math.sqrt(val));
 })
 document.querySelector("#p5").innerHTML = newSquare;

// Filter Method examples 1

const num1 = [10,20,30,40,50,60,70,80,90,100]

const newNumber1 = num1.filter((val,index,array) =>{
    return val > 50;
})
document.querySelector("#p6").innerHTML ="Grater Than 50 : " + newNumber1;

// Filter Method examples 2

const cars = ["BMW", "Bentely", "Baleno", "FORD","Hundai"];

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
document.querySelector("#p7").innerHTML = "B letter Names : " + (filterItems(cars,"B"));


// const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter'];

// const filteredNames = (char, array) => {
//   return array.filter((name) => name[0].toLowerCase() === char);
// };

// console.log(filteredNames('j', names));
//  Output: ["Jim", "James"]


// Filter Method examples 3

const num2 = [1,2,3,4,5,6,7,8,9];

const newNumber2 = num2.filter((val,index,array) =>{
    return val % 2 === 0;
})
document.querySelector("#p8").innerHTML ="Mod : "+ newNumber2;

// Filter Method examples 4

const numPositive = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9];

const newPositive = numPositive.filter((val,index,array) =>{
    return val >= 0;
})
document.querySelector("#p9").innerHTML ="Positive Numbers :"+ newPositive;

// Filter Method examples 5
const myArray = [-5, -4, 1, 3, 7, 12, 13, 15, 17, 21, 23, 25, 27, 30];

function findPrime(item){
  for (let x = 2; item > x; x++) {

    if (item % x == 0) {
      return false;
    }
  }

  return item > 1;
}
document.querySelector("#p10").innerHTML ="Prime Numbers :"+ myArray.filter(findPrime);