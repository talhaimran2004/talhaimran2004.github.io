
var obj = { name : "Talha" , 
email : "muhammadtalha1400@gmail.com", 
age : "16",
password : "xyz",
city : "karachi",
Country : "pakistan"
}

console.log(obj.hasOwnProperty("firstName"));
console.log(obj.hasOwnProperty("lastName"));
console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("Country"));


var finalAmount = 0;
var itemsArray = [
    {name:"Juice", price:"50", Quantity:"3"},
    {name:"Cookie", price:"30", Quantity:"9"},
    {name:"Shirt", price:"880", Quantity:"1"},
    {name:"Pen", price:"100", Quantity:"2"}
]
for (var i=0; i < itemsArray.length; i++) {
    var productAmount = itemsArray[i].price * itemsArray[i].Quantity
    console.log(itemsArray[i].name +":" + productAmount)
    finalAmount = finalAmount + productAmount
}

console.log("Total Amount is" +  " " + finalAmount);


function person (first, last, age, country) {
    this.firstName = first;
    this.lastname = last;
    this.age = age;
    this.country = country;
}


var arr = []
function userdata () {
var Talha = new person ("Talha", "Imran", "16", "Pakistan");
arr.push(Talha);
return arr;
console.log(arr)
} 
console.log(userdata());