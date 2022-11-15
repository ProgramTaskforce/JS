let arr = [20, 30, 40, 50, 100]


let newArr = arr.filter(element => {                // wenn nur 1 element, können die doppelten klammern weg (()) -> ()
  return (element < 50)                             // remove console.log, its doing nothing, delete return true and if, and put the reutrn instead of if
    
})

console.log(newArr) 