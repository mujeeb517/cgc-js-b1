// typeof
// =
// var x = '10';
// x = true;
// var y;

// var a = 10;
// var b = 20;
// var c = a + b;

// var res = a < 10 && a >= 10;

// console.log(typeof res);

// conversion
// var x = 'abc';

// var intX = parseFloat(x);

// console.log(intX, x);
var x = 10;
var str = x.toString();
// console.log(typeof str);

// truthy & falsy: 0, "", NaN, undefined, null, false
// var x = []; 
var str = 0;
var res = !!str;

console.log(res);