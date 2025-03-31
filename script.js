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