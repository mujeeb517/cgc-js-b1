// why to change the context
var obj = {
    length: 5,
    0: 5,
    1: 10,
    2: 20,
    3: 30,
    4: 40,
};

// arr.slice(0,2);
// [].slice.call(obj, 0, 2);
// const res = Array.prototype.slice.apply(obj, [0, 2]);
// const res = Array.prototype.slice.call(obj, 0, 2);
// const slice = [].slice.bind(obj);
// const res = slice(0, 2);
// console.log(res);
// objects
// classes, functions