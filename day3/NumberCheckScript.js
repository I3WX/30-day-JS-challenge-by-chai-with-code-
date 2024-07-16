const num1  = 0 ;
const num2  = 1 ;
const num3  = -2 ;


function numChecker(num){
    if (num>0){
        console.log(`${num} is a positive number`)
    }
    else if (num<0) {
        console.log(`${num} is a negative number`)
    }
    else if (num == 0) {
        console.log(`${num} is Zero`)
    }
}

numChecker(num1)
numChecker(num2)
numChecker(num3)