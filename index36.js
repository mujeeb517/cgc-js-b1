var m1 = {
    width: 5,
    height: 10,
    color: 'Red'
};
// copy
// cloning
// instance
var m2 = {
    width: m1.width,
    height: m1.height,
    color: m1.color
};

console.log(m1 === m2);