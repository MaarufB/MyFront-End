let a;
let b = "b";
let c;

let result = a ?? b;
// The above statement it means that if the first agument is not define then return b else return a;
console.log(`Results: ${result}`);
console.log(`type of a: ${typeof(a)} b: ${typeof(b)}`);
