const array = [] 

for(let i = 0 ; i<=10 ; i++){
    let num = Math.floor(Math.random() * 100)
    array.push(num)
}

console.log(`Array Iteration using for loop`)
for (let i = 0; i < array.length; i++) {
    console.log(i)
}
console.log(`Array Iteration using foreach`)
array.forEach(num => {
    console.log(num)
});