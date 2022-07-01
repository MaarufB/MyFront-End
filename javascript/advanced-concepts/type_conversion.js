// string conversions
console.log("This is a String coversion");

let value = true;
console.log(typeof(value));

const newType = String(value);
console.log(`New Type is: ${newType}`);




// Numeric conversions
console.log("\nThis is a Numeric Coversions.");
let str = "123";
let num = Number(str);
console.log(`New type of string: ${str} is ${typeof(num)}`);


// Test variable if it is number or a string

let check = isNaN(str); // This will return false
let parseNum = parseInt("123s");
let convert2Number = Number("1231a");
console.log(convert2Number);
console.log(`Checking the value type: ${parseNum}`);