let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => {
  console.log(element)                             // the array loop, prints every element ONE BY ONE, 
  if (element < 50){
    return true;
  }
})

console.log(newArr)                                 //  loop returns 3 times, printing 20,30,40 because of the else statement

// SCHLANKER machern


let newArr = arr.filter(element => {                // wenn nur 1 element, können die doppelten klammern weg (()) -> ()
  return (element < 50){                                 // remove console.log, its doing nothing, delete return true and if, and put the reutrn instead of if
    
  }
})

console.log(newArr) 