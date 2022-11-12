let cash = 50;
let price = 40;
let isStoreOpen = true;

if (cash >= price && isStoreOpen === true) {
  console.log("Print the recipt");
}
// best practise wäre: 
// if (cash >= price && isStoreOpen) {
//  .....
// }
// also ohne das === true, weil es automatisch nach true schaut
// mit ! ( ausrufezeichen) vor dem isStoreOpen , schaut er automatisch nach 
// dem Gegenteil , also false





// let cash = 30
// let price = 50
// let payment = cash - price
// 
// if (cash > price) {
//   console.log("you paid extra - here is " + payment + "$ change.")
// }
// 
// else if (cash < price) {
//   console.log("Thats not enough money, you still owe " + payment * -1 + "$.")
// }
// 
// else {
//   console.log("You paid the exact amount, have a nice day.")
// }