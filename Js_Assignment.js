// 1.
const number = [1, 2, 3, 4];
number.push(5);
number.unshift(6);
console.log(number);

// 2.
const fruits = ["Apple", "Mango", "Orange", "Pineapple", "Grapes"];
fruits.pop();
fruits.shift();
console.log(fruits);

// 3.
const arr = [10, 20, 30, 40];

arr.splice(1, 1, 25);
console.log(arr);

// 4.
const color=["pink","red","green","red"];
console.log(color.join("-"));

// 5
const tostr=[100,200,300];
console.log(tostr.toString());

// 6
const six = [5,10,15,20];
console.log(six.at(-1));

// 7   doubt
const seven = [1,2,3,4,5];
seven.copyWithin(3, 0, 2);
console.log(seven);

//8
const eight = [1,[2,3],[4,[5]]];
console.log(eight.flat(2));

// 9
const nine=[10,20,30,40,50];
const result=nine.slice(1,3);
console.log(result);

//10
const ten1= [1,2];
const ten2 =[3,4];
console.log(ten1.concat(ten2));

// 11
const eleven= [1,2,3,4,5];
delete eleven[2];
console.log(eleven);
console.log(eleven.length);

// 12
const tw = [9,8,7,6];
// toSpliced(start, deleteCount, item1, item2, ...)
const rtw = tw.toSpliced(1,1,10,11);

console.log(tw);
console.log(rtw);

//13
const thirteen =[1,2,3,4,5];
thirteen.splice(3,3);
console.log(thirteen);

//14
const forteen = [7,8,9];
const copy = [...forteen];
copy.unshift(6);
console.log(copy);

//15
function fifteen(a){
let str = a.toString();
console.log(str);
}
const a =[1,2,3]
fifteen(a);


//16
const sixteen = (arr)=>{

    let ans = arr.length-1;
    return ans 
}

console.log(sixteen([1,2,3,4,5]));

// 17
const seventeen=()=>{
    let arr = [1,2,3,4];
    console.log(arr.at(2));
}

seventeen();


// 18



// 19
const arr2d = [[1,2],[3,4]];
console.log(arr2d.flat());

//20


const names = ["Ram", "Shyam"];
const marks = [80, 90];

const combined = [];

for (let i = 0; i < names.length; i++) {
  combined.push([names[i], marks[i]].join(": "));
}

console.log(combined);
