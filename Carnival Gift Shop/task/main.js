console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:\n`)

let gifts = [
  {gift: 'Teddy Bear', price: 10, id: 1},
  {gift: 'Big Red Ball', price: 5, id: 2},
  {gift: 'Huge Bear', price: 50, id: 3},
  {gift: 'Candy', price: 8, id: 4},
  {gift: 'Stuffed Tiger', price: 15, id: 5},
  {gift: 'Stuffed Dragon', price: 30, id: 6},
  {gift: 'Skateboard', price: 100, id: 7},
  {gift: 'Toy Car', price: 25, id: 8},
  {gift: 'Basketball', price: 20, id: 9},
  {gift: 'Scary Mask', price: 75, id: 10}
];
let totalTicket = 0
function listOfGifts() {
  for (g of gifts) {
    console.log(`${g.id}- ${g.gift}, Cost: ${g.price} tickets`);
  }
}
const readln = require('sync-input')
listOfGifts();
while (true) {
  console.log()
  let op = readln(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`)
  if (op === "1") {
    if (gifts.length === 0) {
      console.log("Wow! There are no gifts to buy.");
      continue
    }
    let giftNum = (readln(`Enter the number of the gift you want to get: `))
    let findGift = gifts.find(e=>e.id===Number(giftNum))
    let idList = gifts.map(id=>id.id)

    if (!/[0-9]+/.test(giftNum)){
      console.log("Please enter a valid number!")
      continue
    }

    if ( !idList.includes(Number(giftNum)) ) {
      console.log("There is no gift with that number!")
      continue
    }

    if (totalTicket < findGift.price){
      console.log("You don't have enough tickets to buy this gift.")
      continue
    }
    console.log(`Here you go, one ${findGift.gift}!`)

    totalTicket -= findGift.price
    gifts = gifts.filter(e=>e!==findGift)
    console.log(`Total tickets: ${totalTicket}`)
    console.log(`Have a nice day!`)
  } else if (op === "2") {
    let ticketToAdd = (readln("Enter the ticket amount: "))
    if ( ticketToAdd>1000 || !/[0-9]+/.test(ticketToAdd)){
      console.log("Please enter a valid number between 0 and 1000.")
      continue
    }
    totalTicket += Number(ticketToAdd);
    console.log("Total tickets: " + totalTicket)
    console.log(`Have a nice day!`)
  } else if (op === "3") {
    console.log("Total tickets: " + totalTicket)
    console.log(`Have a nice day!`)
  } else if (op === "4") {
    console.log("Here's the list of gifts:")
    console.log()
    if (gifts.length ===0) {
      console.log("Wow! There are no gifts to buy.")
      continue
    }

    listOfGifts()
    console.log(`Have a nice day!`)
  } else if (op === "5"){
    console.log(`Have a nice day!`)
    process.exit(0)
  }
  else console.log("Please enter a valid number!")


}