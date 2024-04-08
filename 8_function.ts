areaTriangle(8, 4);   // hoist

// traditional function
function areaTriangle(side:number, height: 4 | 5) {
    let area = 0.5*side*height;
    console.log(`area = ${area}`) ;   
} 

// anonymous function
const areaTriangle2 = function(side: number, height: number) {
    let area = 0.5*side*height;
    console.log(`area = ${area}`) ;
}

// arrow function
const areaTriangle3 = (side: number, height: number) => {
    let area = 0.5*side*height;
    console.log(`area = ${area}`) ;
}

areaTriangle2(8, 4);
areaTriangle3(8, 4);

const foo = {
    name: "Warodom",
    area: areaTriangle3,
}

foo.area(3,4); 

const products =[ 
    {id: 1, name: "food", price: 23},
    {id: 42, name: "food", price: 22},
    {id: 73, name: "food", price: 13},
    {id: 24, name: "food", price: 53},
]

for( let key in products)
    console.log( products[key])

products.map( (item) =>  console.log(item) )

// === adding item in product array
products.push({id: 5, name: "food", price: 53})
products.map( (item) =>  console.log(item) )

// adding item with spread operator
const newProducts = [ ...products, {id: 6, name: "food", price: 5} ]
newProducts.map( (item) =>  console.log(item) )

// delete product id 73
const newProducts2 = products.filter( (item) => ( item.id !== 73 ) ) 
newProducts2.map( (item) =>  console.log(item) )
