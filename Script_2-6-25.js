// Scope Chaining or lexical environnment
// Esme agr iinerFun ko a ki value nhi milte hai too vo apne parent me ja kar value check karegaa vaha se a=10 le legaa

const scope = () => {
  let a = 10;

  const innerFun = () => {
    console.log(a);
  };
  innerFun();
};

scope();

// Types or error

// 1 Syntax error

// 2 Reference error: Jab aap kisi variable ya function

// 3. type error: jab 2 diiferent operation hum perform karna chata hai to type error show hota hai
// Like const name = 32;
//name()
// here name variable me value put kr raki hai but hum varibale ko as a function call kr rahe hai then humee type error show hoga

// Range Error:When we want to allocate an invalid space in callstack or try to maximize (full)it, at that time its known as a range error










// Temporal zone: Let and const is hoisted but goes to temporal zone me
// Let or const ki values ke memory me load hone se lekar inintialze hone ke time ko temporal dead zone bolte hai

// hoisted ka means ki memory me space milna

// tdz me agr koe element hote hai too humm print karna chaiye too show hoga balue not accessible before initilaization and error hoga vo reference error.

//console.log(x);//x can't be access before initializtion error show hoga
//console.log(y); // undefined show hoga

//console.log(z); //z can't be access before initializtion error show hoga
// let x = 12;
// var y = 10;
// const z = 90;

// Var can be redeclared but in let is not possible
// Ex-->

// let a = 10;
// let a =20;   error, but reinitilize kr sakte hai remember

// var a=10;
// var a =20;  its work

const fun = function pp() {
  console.log("Hi how are you");
};

fun();

// not defined error : Jab memory me present hi nhi hai vo variable

// function recurive() {
//   recurive();
// }
// recurive();




// Question 1 
const user={
    name:"Ravi"
};
console.log(user.address.city);  //TypeError: Cannot read properties of undefined (reading 'city')


// Question 2
let x=5;
if(x=10){
    console.log("X is 10");
}

// console : Ekk already package hai nodejs ke sath inbuild humee milta hai 
// so hum nodejs jab install krte hai hum automa
