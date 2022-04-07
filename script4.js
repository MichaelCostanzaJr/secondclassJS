//function sum(){
    //console.log(10+10);
//}
//sum();

//let sum2 = function(){
    //console.log(3+3);
//}
//sum2();

//function sum(num1,num2){
    //return num1 + num2;
//}

//let result=sum(10,10);
//console.log(result);
//sum(3,3);
//sum(2,6);
//NaN= Not a Number ---> Your are using strings
function addCart(price){
let subtotal = 0;
    return subtotal += price;
}

function taxesCalculation(subtotal){
    return 1.11*subtotal;
}
subtotal = addCart(200);
subtotal = addCart(400);
subtotal = addCart(600);



console.log(subtotal);

console.log(`The subtotal is : ${subtotal}`);

const total = taxesCalculation(subtotal);
console.log(`The total is:${total}`);