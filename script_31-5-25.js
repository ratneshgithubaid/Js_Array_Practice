let days = 1;

switch (days) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Monday");
    break;
  case 5:
    console.log("Monday");
    break;
  case 6:
    console.log("Monday");
    break;
  case 7:
    console.log("Monday");
    break;

  default:
    console.log("Invalid Days");
}

// Calculator

// let a = prompt("Enter a first number");
// let b = prompt("Enter a second number");

// let calc = 1;

// switch (calc) {
//   case 1:
//     alert("Addition:" + (12 + 12));
//     break;
//   case 2:
//     alert("Substraction:" + (12 - 12));
//     break;
//   case 3:
//     alert("Multiplication:" + 12 * 12);
//     break;
//   case 4:
//     alert("Division:" + 12 / 12);
//     break;
//   default:
//     console.log("Invalid choice");
// }

//Higher order function

// takes a another function as a argument
// return another function

// map --> Always return a new arry

const result = [1, 2, 3, 4, 5, 6];

const newRes = result.map((num) => {
  return num * 2;
});

console.log(newRes);



// Filter method :Specfic condition ke hisab se element find out array me see

const fil = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const resFil = fil.filter((num) => {
  return num % 2 == 0;
});

console.log(resFil);

// 🛍️ Real-World Use of filter() in E-Commerce
// When you search on Flipkart or Amazon, you often see filters like:

// ✅ Brand (e.g., Samsung, Apple)

// ✅ Price (e.g., ₹5,000 – ₹10,000)

// ✅ Ratings (e.g., 4★ & above)

// ✅ Offers (e.g., 10% off or more)

// ✅ Categories (e.g., Mobile, Electronics)

// All these filters are handled using JavaScript's filter() behind the scenes (or in backend logic).

// Example real life

const products = [
  { id: 1, brand: "Samsung", Product: "Phone", Rate: 1000 },
  { id: 2, brand: "Vivo", Product: "Laptop", Rate: 9000 },
  { id: 2, brand: "Mac", Product: "Iphone", Rate: 97000 },
];

const pres = products.filter((res) => {
  return res.Rate > 2000 && res.brand == "Mac";
});
console.log(pres);

// Filter method use
// Question hi ki array me see kis element me app present hai . Logic basically we use a includes() here.

const result1 = ["orange", "grapes", "apple", "mango", "banana", "watermelon"];

const filter_result1 = result1.filter((fruit) => {
  return fruit.includes("ap");
});

console.log(filter_result1);

// reduce : It is also a higher order function

const red = [1, , 2, 3, 4, 5];

const resred = red.reduce((a, b) => {
  return a * b;
}, 1);

console.log(resred);

// Difference between map and forEach 👍
// forEach: Doesn't return a new Array where as a map function will return a new array;

const fruits = ["Grapes", "Mango", "Apple", "Banana"];
fruits.forEach((fname) => {
  console.log(fname.toUpperCase());
});

let obj = {
  name: "Ratnesh",
  age: 19,
  course: "Mca",
};

console.log(obj);

// Objects methods: in js objects methods or function which will be used inside an object as  a value of a key.
// example
const user = {
  name: "Ram Mohan",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
user.greet();

// objects methods
// 1 object.keys --> It return of all keys of an object in array format me

console.log(Object.keys(user));

// 2 object.values --> It return array of all values;
console.log(Object.values(user));

// 3.object.entries --> It return an array of [key,value] pair me
console.log(Object.entries(user));

// Merge a two object
const obj1 = { name: "Ram" };
const obj2 = { age: 23 };

// First method to merge
// Object.assign()
const resmerge = Object.assign({}, obj1, obj2);
console.log(resmerge);

// second method to merge is spread operator se
const resobj = { ...obj1, ...obj2 };
console.log(resobj);

// Task : How to achieve no changement should be allowed in values of objects
// Use Object.freeze()
let obj12 = {
  name: "Ram",
  age: 24,
  address: "Bhilwara",
};
console.log(Object.freeze(obj12));
obj12.name = "Laxman";  // upper Object.freeze() method use kiya hai so nichee hum try kr rahe hai object me name keys value change karne ko but not possible . 
console.log(obj12);
