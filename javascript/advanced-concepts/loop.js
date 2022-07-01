console.log(`==========>>> LOOP <<<========`);
let count = 0;
let arr = Array();

console.log("\nWHILE LOOP STARTS")
while(count < 100){
    // console.log(count);
    count++;
    arr.push(count);
}
console.log(arr); // Get the length of an array arr.length

console.log("WHILE LOOP END\n");


// using for loop
console.log("\nFOR LOOP STARTS")
let forLoopBreaker = 80;
for(let i = 0; i<=arr.length; i++){
    console.log(`item: ${i}`);

    if(i == forLoopBreaker){
        console.log(`For loop breaker is detected at item ${i}`);
        break;
    }

    if (i % 2 == 0) {
        continue;
    }
    
}
console.log("FOR LOOP END")

