// let arr = [20, 30, 40, 50, 100]
// 
// let newArr = arr.filter(element => element < 50)               
// 
// console.log(newArr) 


/** TRAINING EXERCISE
 * 
 * Filter out all the "Fail" elements in an array
 * 
 * @examples
 * ["A+", "A", "Fail"] => ["A+", "A"] 
 * ["Fail", "Fail", "B"] => ["B"]
 * ["Fail"] => []
 * 
 */

// Meine erste Lösung

// let grades = ["A+", "A", "Fail"]

// let arr = ['A+', 'A', 'Fail']
// 
// let newArr = arr.filter(element => element !== 'Fail')
// 
// console.log(newArr)

// BESSER mit genauer bezeichnung

let grades = ['A+', 'A', 'Fail']

let goodGrades = grades.filter(element => element !== 'Fail')

console.log(goodGrades)