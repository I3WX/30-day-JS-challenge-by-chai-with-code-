const TwoDArray = []
const innerArray = []
for(let j =0 ; j<=1 ; j++){
    innerArray.length = 0
    for(let i = 0 ; i<=9 ; i++){
        let num = Math.floor(Math.random() *100)
        innerArray.push(num)
    }
    TwoDArray.push(innerArray)
}

