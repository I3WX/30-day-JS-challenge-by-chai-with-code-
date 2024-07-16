function getFactorial(num){
    let i = 1
    let Factorial = 1 
    do {
        Factorial *= i
        i++
    } while (i <= num);
    
    console.log(Factorial)
}
function main(){
    num = 5 
    getFactorial(num)
}