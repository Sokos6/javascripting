const spendingThreshold = 200;
const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;

var bankBalance = 303.91;
var amount = 0;

function calculateTax(amount ) {
    return amount * taxRate;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

//keep buying phones until you have no money. 
while (amount < bankBalance) {
    //buy a new phone 
    amount = amount + phonePrice;
    
    //can we afford the accessory? 
    if (amount < spendingThreshold) {
        amount = amount + accessoryPrice;
    }
}

//taxes
amount = amount + calculateTax( amount );

console.log("Your purchase: " + formatAmount(amount));

//your purchase $334.76

//can you afford it? 
if (amount > bankBalance) {
    console.log("You can't afford this purchase");
}