export const x = 10

export function add(a: number, b:number) {
    return a + b;
}

// sub (anonymous function)
export const sub = function(a: number, b: number){
    return a - b
}
// mul (arrow function)
export const mul = (a: number, b: number)=>{
    return a * b
}
// div (shorten arrow function)
export const div = (a: number, b: number) => a / b