var m1 = Object.create({}, {
    width: { value: 5, enumerable: true },
    height: { value: 10, enumerable: false, configurable: false },
});

Object.defineProperty(m1, 'height', {
    enumerable: true
});

console.log(m1);