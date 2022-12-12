var phone = 30;
console.log("Phone amount");
console.log(phone);

var price = parseFloat(prompt("Price of one phone"))
console.log("price of one phone");
console.log(price)
11
var tax = parseInt(prompt("Tax")) / 100 * price ;
console.log("tax per phone")
console.log(tax) 
console.log(typeof(tax));

var fullPricePerPhone = tax + price ; 
console.log("Full price per phone with tax")
console.log(fullPricePerPhone);

var wholeprice = phone * fullPricePerPhone;
console.log("Whole price on 30 phones")
console.log(wholeprice)
