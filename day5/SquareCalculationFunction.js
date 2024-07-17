function SquareCalculation(num = 5){
    let square = Math.pow(num , 2)
    return square
} 
function main(){
    let randomNum = Math.round((Math.random())*10)
    let square = SquareCalculation(randomNum)
    console.log(`Square of : ${randomNum} is ${square}`)
}
main()