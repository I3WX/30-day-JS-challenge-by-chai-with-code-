
function add(num1 , num2){
    console.log(`Addition : ${num1+num2}`)
}
function sub(num1 , num2){
    console.log(`Subtraction : ${num1-num2}`)
}
function mul(num1 , num2){
    console.log(`Multiplication : ${num1*num2}`)
}
function divide(num1 , num2){
    console.log(`Divide : ${Math.floor(num1/num2)}`)
    console.log(`Reminder : ${num1%num2}`)
}

function show(num1 , num2){
    console.log(`num 1 : ${num1}`)
    console.log(`num 2 : ${num2}`)
}

function main(){
    const num1 = 6;
    const num2 = 9;
    show(num1 , num2)
    add(num1 , num2)
    sub(num1 , num2)
    mul(num1 , num2)
    divide(num1 , num2)
}

main()