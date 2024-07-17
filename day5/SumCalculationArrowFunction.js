const Sum = (num1 ,num2 )=>{
    return num1+num2
}
function main(){
    let randomNum1 = Math.round((Math.random())*10)
    let randomNum2 = Math.round((Math.random())*10)
    console.log(`Sum of : ${randomNum1} & ${randomNum2} is ${Sum(randomNum1 , randomNum2)}`)
}
main()