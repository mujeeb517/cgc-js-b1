// inheritance
// class
var absMobile = {
    print: function () {
        console.log('printing');
    }
};

var m1 = Object.create(absMobile, {
    width: { value: 5, enumerable: true }
});

// method hiding, overriding 
m1.print = function () {
    console.log('new fun');
}

m1.print();
