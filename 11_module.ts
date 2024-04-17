// Import / Export
// 1) Variable (let, const), 2) Function

// import { x, add, sub, mul, div } from "./modules/math"

// console.log(x)
// console.log(add(10, 5))
// console.log(sub(5, 10))
// console.log(mul(2, 5))
// console.log(div(100, 5))

// import * as jsonP from "./modules/jsonplaceholder"

// // 1. Promise (.then, await)
// // 2. await doSomething()
// // 3. await must be called inside async function
// const main = async () => {
//     const result = await jsonP.fetchJsonPlaceHolder();
//     console.log("Result 1: ", result)

//     const result2 = await jsonP.fetchJsonAxios();
//     console.log("Result 2: ", result2)
// }

// main()

// import callbackFn from "./modules/callback";

// const handler = (xxx: string) => {
//     console.log(xxx)
// }
// callbackFn(handler)