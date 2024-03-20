// var, let, const
let x = 1
console.log(x)

let y: number
y = 5
console.log(y)

const z = 10
console.log(z)

const message = "Hello world"
console.log(message)

const isFat = true
console.log(isFat)

// Example: Weight
const weight1 = 65
const weight2 = 60

console.log("Sum of weight is: "+(weight1+weight2))
console.log("Diff of weight is: "+(weight1-weight2))

// Question1: BMI calculator (w / h^2)
const weight = 60
const height = 1.60
const bmi = weight / (height * height)
// console.log("Weight = " + weight + " Height = " + height + " BMI = " + bmi)
console.log(`Weight = ${weight} Height = ${height} BMI = ${bmi}`)

// Question2: Celcius to Farenheit ((0°C × 9/5) + 32)
const celcius = 35
const farenheit = (celcius * 9 / 5) + 32
console.log(`From ${celcius} celcius to ${farenheit} Farenheit`)

// Question3: Some calculation