const arr = ["Banana", "Apple", "Shivam", "Nitin"];
// arr.length = 3;

// toString() -> Convert js array into string me :Banana,Apple,Shivam
console.log(arr.toString());
console.log(arr.length);


// join()
console.log(arr.join("*"));

// pop()
console.log(arr.pop());

arr.push("pita");
console.log(arr);

// shift :It will remove first element and shift remaining previous element at respective position;
arr.shift();
console.log(arr);

arr.unshift("RamuBhai");

console.log(arr.unshift("lala"));

// marge array with the spread operator
arr2 = ["ram", "tiger"];
let ans = [...arr, ...arr2];
console.log(ans);

// Merge array with .concat()
console.log(arr.concat(arr2)); // here two array is merged..(7) ['lala', 'RamuBhai', 'Apple', 'Shivam', 'pita', 'ram', 'tiger']
console.log(arr); // original array is always same ..['lala', 'RamuBhai', 'Apple', 'Shivam', 'pita']

// splice method  :total number of param we pass 3 .
// 1.index from where you want to insert new elemnet
// 2.numbers of elements we want to delete
// 3. ELements we want to added

// Arary me bich me element we can added easily with help of splice.

let pp = ["apple", "grapes", "mango"];
pp.splice(2, 0, "laxman", "sita");
console.log(pp);

// New array create with slice method  ,always return new array
const rp = pp.slice(1);
console.log(pp);

const aa = ["apple", "Vivek", "Manish"];
const bb = aa.slice(0);
