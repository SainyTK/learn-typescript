// Even odd
// const input = 11 // <- input

// if (input % 2 == 0) {
//     // do something
//     console.log("Even")
// } else {
//     console.log("Odd")
// }

import readlineSync from 'readline-sync'

const x = Number(readlineSync.question("Input your number: "));
if (x > 100) {
    console.log("Too large");
} else if (x > 80) {
    console.log("Normal");
} else {
    console.log("Too small");
}

// bmi < 17 Thines	
// bmi <= 17 - 25 Normal
// bmi > 25 Overweight