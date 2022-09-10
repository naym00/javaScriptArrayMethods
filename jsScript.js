let items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
/*
const afterFilter = items.filter((item) =>  item.price <= 100);
console.log(afterFilter);
*/

/*
const afterFilter = items.filter((item) =>  {
  if(item.price<=25)
  {
    return item;
  }});
  console.log(afterFilter);
*/

/*
const sortedArray = items.sort((a, b) => a.price - b.price);
console.log(sortedArray);
*/

/*
const afterMap = items.map((item) =>  item.price);
console.log(afterMap);
*/

/*
const afterMap = items.map((item) =>  {if(item.price>200){return item.price}});
console.log(afterMap);
*/

/*
const afterMap = items.map((item) =>  {
  if (item.price<=25)
  {
    return item;
  }});
console.log(afterMap);
*/

items.forEach((item) =>  console.log(item.name));
// items.forEach((item) => {for(let i=0; i<item.name.length; i++){console.log(item.name[i])}});
// let object = [
//   { name: ['B', 'i', 'k', 'e'], price: 100 },
//   { name: ['T', 'V'], price: 200 },
//   { name: ['A', 'l', 'b', 'u', 'm'], price: 10 },
//   { name: ['B', 'o', 'o', 'k'], price: 5 },
//   { name: ['P', 'h', 'o', 'n', 'e'], price: 500 },
//   { name: ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r'], price: 1000 },
//   { name: ['K', 'e', 'y', 'b', 'o', 'a', 'r', 'd'], price: 25 }
// ];
// object.forEach((item) => item.name.forEach((eachChar) => console.log(eachChar)));

// const afterSome = items.some((item) =>  item.price < 25);
// console.log(afterSome);

// const afterEvery = items.every((item) =>  item.price < 1001);
// console.log(afterEvery);

// const afterReduce = items.reduce((sum, item) =>  sum + item.price, 0);
// console.log(afterReduce);

// const afterReduce = items.reduce((sum, item, index, array) =>  {
//   console.log(item, index, array);
//   return sum + item.price}, 0);
// console.log(afterReduce);

// const arrayNumber = [1, 2, 3, 4, 5];
// const afterIncludes = arrayNumber.includes(4);
// console.log(afterIncludes);

// const result = ((a, b) => {return a*b;});
// console.log(result(5, 5));
// const result = ((a, b) => (a*b));
// console.log(result(5, 5));

// const nums = (...rest) => rest;
// console.log(nums(1, 2, 3, 4));

// const showCity = () => ({city:"Boston"})
// console.log(showCity().city)

// const arrayOdd = [1, 3, 5, 7, 9];
// arrayOdd.forEach(
//   (value, index, arr, rr = 0) => console.log(value, index, arr, rr)
// );

// const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
// let randomArrayCount = new Object();
// randomArray.forEach(item => {
//   item in randomArrayCount ? randomArrayCount[item] +=1 : randomArrayCount[item] = 1;
// });
// console.log(randomArrayCount);

// const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
// let randomArrayCount = new Object();
// randomArray.forEach(item => {
//   if(item in randomArrayCount){
//     randomArrayCount[item] +=1;
//   }else{
//     randomArrayCount[item] = 1
//   }
// });
// console.log(randomArrayCount);

// const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
// let randomArrayCount = new Object();
// randomArray.forEach(item => {
//   randomArrayCount.hasOwnProperty(item) ? randomArrayCount[item] +=1 : randomArrayCount[item] = 1;
// });
// console.log(randomArrayCount);

// const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
// let randomArrayCount = new Object();
// randomArray.forEach(item => {
//   if(randomArrayCount.hasOwnProperty(item)){
//     randomArrayCount[item] +=1;
//   }else{
//     randomArrayCount[item] = 1
//   }
// });
// console.log(randomArrayCount);

// const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
// let randomArrayCount = new Object();
// randomArray.forEach(item => {
//   randomArrayCount[item] !== undefined ? randomArrayCount[item] +=1 : randomArrayCount[item] = 1;
// });
// console.log(randomArrayCount);

// const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
// let randomArrayCount = new Object();
// randomArray.forEach(item => {
//   if(randomArrayCount[item] !== undefined){
//     randomArrayCount[item] +=1;
//   }else{
//     randomArrayCount[item] = 1
//   }
// });
// console.log(randomArrayCount);

// const numArray = [0, 10, 20, 30, 40, 50];
// const testArray = numArray.map(test);
// function test(value, index, _){
//   console.log(value*index);
// }
// console.log('Test Array ', testArray);

// let person = {
//   name: "XXX Hossain",
//   age: 20,
//   gender: "Male"
// }
// let copyPerson = JSON.parse(JSON.stringify(person));
// let copyPerson2 = { ...person };
// let copyPerson3 = Object.assign({}, person);
// copyPerson.name = "YYY Hossain";
// copyPerson2.name = "ZZZ Hossain";
// copyPerson3.name = "UUU Hossain";
// console.log(person);
// console.log(copyPerson);
// console.log(copyPerson2);
// console.log(copyPerson3);

//const randomArray = [1, 2, 3, 1, 5, 2, 4, 4, 2, 6, 7, 1, 7, 3, 4, 1, 8, 1, 9, 6, 10];
//const distinctNum = randomArray.filter((value, index, array) => array.indexOf(value) === index);
//console.log(distinctNum);

let products = [
  {
    name: "Laptop",
    price: 60000,
    count: 2,
  },
  {
    name: "Desktop",
    price: 50000,
    count: 5,
  },
  {
    name: "Mobile",
    price: 25000,
    count: 11,
  },
  {
    name: "Head Phone",
    price: 5000,
    count: 100,
  },
];
//let newObject = products.map((item) => (Object.assign({totalCost: item.count*item.price}, item)));
//console.log(newObject);

//console.log(products.filter(item => item.count % 2 == 0).map(item => (Object.assign({countStatus: 'Even'}, item))));

//function addElement(ob){
//  return Object.assign({countStatus: 'Even'}, ob);
//}

//let addElement = ob => Object.assign({countStatus: 'Even'}, ob);

//console.log(addElement(products[0]));

//let tem = Array(10).fill(0).map((val, ind) => ind+1);
//console.log(tem);

//const takeOrder = (customer, callback) => {
//  console.log(`take order for ${customer}`);
//  callback(customer);
//};
//const processorder = (customer, callback) => {
//  console.log(`processing order for ${customer}`);
//  setTimeout(() => {
//    console.log(`cooking completed`);
//    console.log(`order processed for ${customer}`);
//    callback(customer);
//  }, 3000);
//};
//const completeOrder = (customer) => {
//  console.log(`completed order for ${customer}`);
//};
//takeOrder('Customer 1', (customer) => {
//  processorder(customer, (customer) => {
//    completeOrder(customer);
//  });
//});
//console.log('Hello');

//const takeOrder = (customer, callback) => {
//  console.log(`take order for ${customer}`);
//  callback(customer, completeOrder);
//};
//const processorder = (customer, callback) => {
//  console.log(`processing order for ${customer}`);
//  setTimeout(() => {
//    console.log(`cooking completed`);
//    console.log(`order processed for ${customer}`);
//    callback(customer);
//  }, 3000);
//};
//const completeOrder = (customer) => {
//  console.log(`completed order for ${customer}`);
//};
//takeOrder('Customer 1', processorder);

/*
// Function in Array
let cusArray = [
  () => 1,
  () => 2,
  () => 3
]
console.log(cusArray[1]());
*/

/*
// Object in Array
let cusArray = [
  {
    a: 1,
    b: 2,
    c: function(){return this.a + this.b}
  },
  {
    a: 2,
    b: 3,
    c: function(){return this.a + this.b}
  },
  {
    a: 3,
    b: 4,
    c: function(){return this.a + this.b}
  },
  {
    a: 4,
    b: 5,
    c: function(){return this.a + this.b}
  }
]
console.log(cusArray[1].c());
*/

/*
// Object in Array
let cusArray = [
  {
    a: 1,
    b: 2,
    c: function(callback){ callback(); return this.a + this.b}
  },
  {
    a: 2,
    b: 3,
    c: function(callback){ callback(); return this.a + this.b}
  },
  {
    a: 3,
    b: 4,
    c: function(callback){ callback(); return this.a + this.b}
  },
  {
    a: 4,
    b: 5,
    c: function(callback){ callback(); return this.a + this.b}
  }
]
function hello(){console.log('Hello')};
console.log(cusArray[0].c(hello));
*/

/*
// Promise
const meeting = new Promise((resolve, reject) => {
  if(true){
    resolve({name: 'Fake Meeting', male: 3, female: 2, totalmember: function(){ return this.male + this.female}});
  }
  else{
    reject('Unavailable Meeting!');
  }
});
meeting
  .then(res => console.log(JSON.parse(JSON.stringify(res))))
  .catch(err => console.log(err));
*/

/*
// Promise

function promiseMeeting()
{
  const meeting = new Promise(resolve => {
    resolve({name: 'Fake Meeting', male: 3, female: 3});
  });
  return meeting;
}
const meeting = promiseMeeting();
meeting
  .then(res => console.log(JSON.parse(JSON.stringify(res))));
*/

/*
// Promise

function promiseMeeting()
{
  return Promise.resolve({name: 'Fake Meeting', male: 3, female: 3});
}
const meeting = promiseMeeting();
meeting
  .then(res => console.log(JSON.parse(JSON.stringify(res))));
*/

///*
// Promise
// console.log('1');
// const meeting = new Promise((resolve, reject) => {
//   if (false) {
//     resolve({name: "Fake Meeting", male: 3, female: 2 });
//   } else {
//     reject('No meeting');
//   }
// });
// console.log('2');
// const addToCalender = function promiseMeeting(meetingDetails) {
//   return Promise.resolve(`Meeting name ${meetingDetails.name} and Male ${meetingDetails.male} and Female ${meetingDetails.female}`);
// };
// console.log('3');
// meeting
//   .then(addToCalender)
//   .then((res) => console.log(JSON.parse(JSON.stringify(res))))
//   .catch((err) => console.log(err));
// console.log('4');
//*/

// Defining function to get unique values from an array
function getUnique(array){
  var uniqueArray = [];
  
  // Loop through array values
  for(var value of array){
      if(uniqueArray.indexOf(value) === -1){
          uniqueArray.push(value);
      }
  }
  return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames); // Prints: ["John", "Peter", "Clark", "Harry", "Alice"]
