const person = {
    name: "Warodom",
    surname: "Werapun",
    age: 45,
}

console.log(person)
console.log(person.name)

type PersonType = {
    name: string;
    surname: string;
    age: number;
}

let person2: PersonType;

person2 = {
    name: "Warodom",
    surname: "Werapun",
    age: 45,
}

person.name = "John";  // can assign even const
// person = person2; // cannot assign due to const

person2 = person;
console.log(person.name);

// assign 2 objects in array
const persons = [ person, person2 ]
console.log(persons)

// print persons using loop
for(let i=0;i< persons.length; i++ )
    for( const [key, value] of Object.entries(persons[i]))
        console.log( key, value  )

for (let item in persons)  
   console.log( item, persons[item])
 
type T =  "de" | "dbiz" | "computing";
type StudentType = Record< T ,
    { 
    name: string;
    age?: number;
}>

const students: StudentType = {
    de: { 
        name: "John", 
        age: 20,    
    },
    dbiz: {
        name: "Jack", 
        age: 22, 
    },
    computing: {
        name: "Jim", 
        age: 19, 
    }
}

console.log(students);
console.log(students.computing.age);

students.computing.age = 18;
students.computing = {
    name: "Ja Morant", 
    age: 19, 
}
console.log(students.computing.age);