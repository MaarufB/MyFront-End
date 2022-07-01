// OBJECTS

let employees = [
    {
        firstName: "Ma-aruf",
        lastName: "Burad",
        job: "Programmer"
    },
    {
        firstName: "Paul",
        lastName: "Pierce",
        job: "NBA"
    }
]

let person = {
    firstName: "Ma-aruf",
    lastName: "Burad",
    job: "Programmer"
}

// for(let [key, value] of employees){
//     console.log(value.firstName);
//     console.log(`KEY: ${key} VALUE: ${value}`);
// }
console.log("sadsds");

for(let i = 0; i < employees.length; i++){
    const firstName = employees[i].firstName;
    const lastName = employees[i].lastName;
    const job = employees[i].job;

    console.log(`Firstname: ${firstName} Lastname: ${lastName} Job: ${job}`);
    // console.log(employees[i]);
}