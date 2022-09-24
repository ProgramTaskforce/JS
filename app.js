let cash = 0
let price = 40
let calculation = (cash - price)
let missingCalculation = (price - cash)

if (cash > price) {
    console.log ("You paid extra, here is " + calculation + "$ change.")

}

else if (cash === price) {
    console.log ("You paid the right amount, have a nice day.")
}

else {
    console.log ("You dont have enough money, you still owe me " + calculation * -1 + "$.")
}
// bei meinem ersten versuch, hatte ich statt calculation * -1 , das missingCalculation eingesetzt