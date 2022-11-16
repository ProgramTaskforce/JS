// ARRAY Method MAP

let arr = [1, 4, 9, 16]

let newArray = arr.map((element) => {
  console.log(element)
  return undefined;
})

console.log(newArray)

// shorter Way

let arr = [1, 4, 9, 16]

let newArray = arr.map(element => 'dog')

console.log(newArray)