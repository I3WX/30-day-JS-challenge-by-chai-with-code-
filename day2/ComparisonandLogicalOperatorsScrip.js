function show(num1 , num2){
    console.log(`num 1 : ${num1}`)
    console.log(`num 2 : ${num2}`)
}

function equal(num1 , num2){
    console.log(`num1 & num2 equal ${num1==num2}`)
    console.log(`num1 & num2 equal  and equal type ${num1===num2}`)
    console.log(`num1 & num2 not equal ${num1!=num2}`)
    console.log(`num1 & num2 not equal value or not equal type ${num1!==num2}`)
}

function composition(num1 , num2){
    console.log(`num1 & num2 greater than ${num1>num2}`)
    console.log(`num1 & num2 less than ${num1<num2}`)
    console.log(`num1 & num2 greater than or equal to ${num1>=num2}`)
    console.log(`num1 & num2 less than or equal to ${num1<=num2}`)
}

function main(){
    const num1 = 6;
    const num2 = 9;
    show(num1 , num2)
    equal(num1 , num2)
    composition(num1 , num2)
}

main()