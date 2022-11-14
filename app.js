// console.log("welcome to FES, David")
// console.log("welcome to FES, Zen")
// console.log("welcome to FES, Mitri")

// DRY - Dont repeat yourself

// function Definition
function welcomePersonToFES(firstName, lastName) {        // name is the PARAMETER in this example, in this function DEFINITION  
  console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`)   // nothing is printing out of the console, because functions dont execute by them selfs
}

// Call the function
welcomePersonToFES("David", "Bragg");
welcomePersonToFES("Semjon", "Task");