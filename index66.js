// this keyword
// this context: current object
// 
// 1. obj.method() it points to object
// 2. extract method from obj it points to global
// 3. extract method from obj in strict it points to undefined
// 4. inner method points to global
// 5. inner method in strict mode points to undefined
// 6. independent function refers to global
// 7. independent function in strict mode refers to undefined

// 'use strict';
// const m1 = {
//     width: 5,
//     height: 7,

//     print: () => {
//         const inner = () => {
//             console.log(this);
//         }
//         inner();
//     }
// };

// m1.print();
// const p = m1.print;
// p();

// const f1 = function () {
//     const inner = () => {
//         console.log(this);
//     }
//     inner();
// }

// f1();

// change the context
const m1 = {
    name: 'Mobile',
    width: 5,
    height: 7,

    print: function (a, b, c) {
        console.log(this.width, a, b, c);
    }
};


const car = {
    name: 'Car',
    width: 10000,
    height: 2300
};

m1.print.call(car, 1, 2, 3);
m1.print.apply(car, [1, 2, 3]);

function f1() {
    // function inner() {
    console.log(this);
    // }

    // inner();
}

// f1.call(m1);
// f1.apply(car);
// bind : fix the context
const res = f1.bind(m1);
res.call(car);