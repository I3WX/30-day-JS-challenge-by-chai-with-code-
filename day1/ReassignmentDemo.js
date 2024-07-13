// Declare a variable 'letString' and assign it the value "Jon Walker"
let letString = "Jon Walker";

// Declare a constant 'constString' and assign it the value "Paul Walker"
const constString = "Paul Walker";

// Output the string 'letString'
console.log('letString');

// Output the string 'constString'
console.log('constString');

console.log('\n'); // Output a newline for better readability

// Modify the value of the variable 'letString'
letString = "Jonny Walker";

// Attempt to modify the value of the constant 'constString'
// This will cause an error because constants cannot be reassigned
constString = "Soni Walker"; // Uncaught TypeError: Assignment to constant variable.

// Output the modified value of 'letString'
console.log(`Modified letString: ${letString}`);

// This line will not be executed because of the error above
console.log(`Modified constString: ${constString}`);
