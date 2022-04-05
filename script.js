// let yourName="Michael"
// let myArray = ["string", 10, {}];

// let myArray2 = ["What is the meaning of life?", 42, true];

// console.log(myArray2[2])

// if(confirm("Are you " + yourName + "?")){
//     console.log("Hello" + yourName);
// }else{
//     console.log("Then what is your name?");
// }

// if(1=="1"); //True
// console.long("1"=== 1); //False

// let number= 99;
// if(number == 99){
//     console.log("The number is correct")
// }

// let num1 = 1;
// let num2 = 2;

// undefined(num1 < num2){
//     // if you get here, the statement was true
//     console.log("num1 is smaller than num2")
// }else{
//     console.log("num2 is smaller than num1")
// }


// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let notTrue = false;

// if(num1<num2 && num3>num2){
//     console.log("num1 is smaller than num2 AND num3 is larger than num2");
// }
// if(num1 == 1 || num2 == 1 || num3==1){
//     console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }
// if(!notTrue){
//     console.log("not not true is true!")
// }

let userEmail = prompt("Enter your email");
let userPassword = prompt("Enter your password");

console.log(userEmail,userPassword);


if(userEmail == "admin@admin.com" && userPassword == "Test1234"){
    document.write("Welcome " + userEmail);
}else{
    document.write("Invalid Credetials")
}


