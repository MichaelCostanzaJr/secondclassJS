let greet = function(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Eric"));

function displayName(studentName){
    document.write(`
        <h2>Student List</h2>
        <p>Student name: ${studentName}</p>
        <hr>
        `);
}

function multiplyThree(num1){
    return num1 * 3;
}

console.log(multiplyThree)(10)