const Array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

console.log(`Array Iteration using for loop`)
for (let i = 0; i < Array.length; i++) {
    console.log(i)
}
console.log(`Array Iteration using foreach`)
Array.forEach(num => {
    console.log(num)
});