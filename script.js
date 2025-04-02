a = 5 // global scope
console.log(a)

var b = 6  // function scope
console.log(b)

let c = 7 // block scope
console.log(c)

const d = 8 // constants can't be redefined once created
console.log(d)
// d = 10 will give an error


// Input and output
// let value = prompt('What is your name?')

// Template string (like a Python f-string)
// print(f"Your name is {name}"")
// console.log(`Your name is ${value}` )


// Data Types

// Boolean - true or false
true
false

// Falsy values
false
0
""
NaN // Not A Number
null // None in Python
undefined

// Casting Datatypes
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))

// Truthy values
console.log(Boolean(12))
console.log(Boolean("Hi"))
console.log(Boolean([]))
console.log(Boolean({}))

// Number
// type(2.5) # returns float
console.log(typeof('Hi'))
console.log(typeof(21.4))
console.log(typeof(2))

console.log(1/2)
console.log(1/"2") // Type coercion
console.log(1/0)  //  = Infinity
console.log(1/"hi") // = NaN (Not a Number)

// Explicit Cast
x = "2"
console.log(1/Number(x))

// Array (list in Python)
const names = ['John', 'Jane', 'Bob']
const foo = ['Matt', 52, 184.5]

console.log(names)
console.log(names[1])
names[4] = 'Mary'
console.log(names)
names.push('Harry', 'Max') // Adds the new values to the end of the array
console.log(names)
const name = names.pop() // Remove the last item in an array and assign it to a variable
console.log(names)
console.log(name)
// Python naming convention is snake case - big_array
const bigArray = names.concat(foo) // Concatenates the two arrays and reassings them to a new variable name
console.log(bigArray)
console.log(names)


// Objects - dict in Python
const person1 = {
    //Python: "name": "John"
    name: "John",
    age: 32,
    city: "Sydney"
}
console.log(person1.age)
// Object.freeze(person1)
person1.country = "Australia"
console.log(person1)

const person2 = {
    name: "Sally",
    age: 45,
    address: {
        city: "Melbourne",
        country: "Australia"
    }
}
console.log(person2)
console.log(person2.address.city)
console.log(person2.address.country)

// const attr = prompt('Which attribute?')
// console.log(person2.address[attr])
// Optional chaining with ?
console.log(person1.address?.country)