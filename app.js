// function sumOfTwoNumbers(num1, num2) {             // num 1 and num2 here is called PARAMETER
//   return num1 + num2                    
// }
// 
// console.log(sumOfTwoNumbers(10, 10));            // 10 and 10 here is called ARGUMENT

/** Create a function that converts Celsius to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 * F = C x 1.8 + 32
 * 
 * @example
 * convertCelsiusToFahrenheit(0) -> 32
 * convertCelsiusToFahrenheit(10) -> 50
 * convertCelsiusToFahrenheit(30) -> 86
 */

function convertCelsiusToFahrenheit(celsius) {
  return `Celsius ${celsius} -> Fahrenheit ` + (celsius * 1.8 + 32)
}

console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(10));
console.log(convertCelsiusToFahrenheit(30));

/**
 *
 * second way to define a FUNCTION with an ARROW
 * 
 * 
 *                     const convertCelsiusToFahrenheit = (celsius) => {
 *                       return celsius * 1.8 + 32
 *                     }
 *                     
 *                     console.log(convertCelsiusToFahrenheit(0))
 * 
 */