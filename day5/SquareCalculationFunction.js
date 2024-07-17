function SquareCalculation(num = 5){
    square = Math.pow(num , 2)
    return square
} 
function main(){
    randomNum = Math.round((Math.random())*10)
    squareOfRandomNim = SquareCalculation(randomNum)
    console.log(`Square of : ${randomNum} is ${square}`)
}
main()