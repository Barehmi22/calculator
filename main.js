let num1=55
let num2=56
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let resulte=document.getElementById("sum-el")
function Addution() {
   let add=num1+num2
    resulte.textContent="Sum : "+add
    
    
}
function Substraction() {
    let Sub=num1-num2
    resulte.textContent="Sum : "+Sub
    
    
}
function Multiplication() {
   let Mult=num1*num2
    resulte.textContent="Sum : "+Mult
    
    
}
function Division() {
    let Div=num1/num2
    resulte.textContent="Sum : "+Div
    
    
}