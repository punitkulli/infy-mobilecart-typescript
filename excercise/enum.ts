enum MobilePrice {Black, Gold=30000, White}

// functon to calculate final amount
function calculateAmount(price: number): number {
    let discount: number;
    let totalAmount: number;
    if (price === MobilePrice.Gold) {
      discount = 5;
    } else if (price === MobilePrice.White) {
      discount = 8;
    } else {
    discount = 10;
           }
    totalAmount = price - price * discount / 100;
    return totalAmount;
}

// lines to populate the Actual and Final price of Black color Mobile
console.log('Actual price of the Mobile is ' + MobilePrice.White);
console.log('The final price after discount is ' + calculateAmount(MobilePrice.White));