const m1 = {
    width: 5,
    height: 7,
    color: 'Black'
};

// prop destructering
// var width = m1.width;
// var height = m1.height;
// var color = m1.color;
const { width, height } = m1;

console.log(width, height);

// array destructering
const arr = [1, 2, 3, 4];
const [first, second] = arr;
console.log(first, second);
