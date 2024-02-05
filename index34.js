function fn(obj) {
    obj.width = 100;
}

function fn2(o2) {
    o2.width = 80;
}

var m1 = {
    width: 5,
    height: 10,
    color: 'Black'
};

fn(m1);
console.log(m1);

// var m2 = m1;
// var m3 = m2;

