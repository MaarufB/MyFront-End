console.log(`FUNCTION EXPRESSION`);

// Function Declaration
function functionDeclaration(){
    return "Declaration";
}

let declaration = functionDeclaration();
console.log(`${declaration}`);


// Function Expression
function functionExpression(){
    return "Expression";
}
let expression = functionExpression();
console.log(expression);

// Function is a value:

let func = functionDeclaration; // It will copy the functionDeclaration;
console.log("Function Value");
let newFunc = func();
console.log(`new func val ${newFunc}`);


console.log("\nCALLBACK FUNCTIONS")

function ask(question, yes, no){
    if(question == "yes"){
        yes();
    }else{
        no();
    }
}

function yesAnswer(){
    console.log("The answer is Yes!");
}

function noAnswer(){
    console.log("The answer is No!");
}

ask("yes", yesAnswer, noAnswer);