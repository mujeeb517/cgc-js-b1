// Object.create
// prop descriptor
// literal, constructor function
var m1 = Object.create({}, {
    width: {
        value: 5,
        writable: true,
        enumerable: true,
    },
    pi: {
        value: 3.14,
        writable: false,
        configurable: false
    },
    height: {
        value: 10,
        enumerable: true
    }
});

Object.defineProperty(m1, 'pi', {
    writable: true
});

m1.pi = 100;
console.log(m1.pi);

// for (var key in m1) {
//     console.log(key);
// }
