let Arr = [1,5,2,4,9,7,5,3,8]

console.log(`Original Array : ${Arr}`)

const squareOfArr = Arr.map((num) => Math.pow(num , 2))

console.log(`square of array with map function : ${squareOfArr}`)

const lessThenFive = Arr.filter((num)=> {return num<5})

console.log(`Num less then 5 from array using Filter : ${lessThenFive}`)

const sumOfArr = Arr.reduce((accumulator , num)=>{ return accumulator + num})

console.log(`Sum of array using reduce function ${sumOfArr}`)