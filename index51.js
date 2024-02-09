// ES5 ES6
// ECMASCRIPT
// JAVASCRIPT
// standard
// chrome, firefox, edge
// v8, chakra
// specification
// type c
// web app x1
// html, css w3c
// declaring
// var: function scope
// let, const: block scoped
// const: no reassignment

function fn() {
    if (true) {
        const arr = [10, 20, 30];
        arr.push(40);
        arr.pop();

        arr = [1, 2, 3, 4];
        console.log(arr);
    }

}

// fn()

// string interpolation
var name = "John";
var dept = "IT";
var salary = 2000;

// var op = name + " is working for " + dept +
//     "and his " +
//     "salary is " + salary;

function f1() {
    return "abc";
}

// backticks
// multiline strings
var op = `${name} is working 
for ${dept} and 
his ${salary} is salary`;

console.log(op);
