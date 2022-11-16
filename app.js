/**
 * EXercise MAP Array
 * 
 * Turn each element in an array of dollars into cents
 * 
 * WITHOUT using MAP method
 * 
 * @examples
 * 
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] =Y [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3]

let dollarsToCents =[]                             // create new dollars to cents array

for (let i = 0; i < dollars.length; i++){          // loop over every element in dollars
  dollarsToCents.push(dollars[i] * 100)            // convert dollars into cents
}

console.log(dollarsToCents)                        // console log cents
