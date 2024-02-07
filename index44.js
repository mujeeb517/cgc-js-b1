'use strict';
// modes
// strict
// sloppy
var m1 = Object.create({}, {
    width: { value: 5, writable: false, enumerable: true },
    height: { value: 10, enumerable: false, configurable: false },
});

// read only
// silently 
// m1.width = 100;

console.log(m1);

