/**
 * EXercise MAP Array
 * 
 * Turn each element in an array of dollars into cents
 * 
 * @examples
 * 
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] =Y [0, 1000, 2000]
 */

// let dollars = [1, 5, 10, 3]
// 
// let dollarsToCents = dollars.map((element) =>{
//   return element * 100
// })
// 
// console.log(dollarsToCents)

let dollars = [1, 5, 10, 3]

let dollarsToCents = dollars.map(element => element * 100)

console.log(dollarsToCents)