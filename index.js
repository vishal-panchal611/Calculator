let num1 = 5
let num2 = 15
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let ansEl = document.getElementById("sum-el") 
function add()
{
    let result = num1 + num2
    ansEl.textContent ="Sum: " + result 
}

function subtract() 
{
    let result = num1 - num2
    ansEl.textContent = "Subtract " + result
}

function divide()
{
    let result = num1 / num2
    ansEl.textContent = "Divide " + result
}

function multiply() 
{
    let result = num1 * num2
    ansEl.textContent = "Multiply " + result
}
