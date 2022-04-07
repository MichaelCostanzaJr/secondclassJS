function calculator(){
    console.log("Calculating ...")
    let num1 = promp("Enter the number");
    document.getElementById("calculationZone").innerHTML=`
    <p>${num1} + 10 = ${num1*10}</p>`
}