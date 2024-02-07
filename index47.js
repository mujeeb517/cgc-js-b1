// literal
// cons. fun
// Object.create
// class
// constructor
class Mobile {

    // special
    constructor(color) {
        // init
        // state
        // props
        // instance variables
        this.width = 5;
        this.height = 10;
        this.color = color;
        this.brand = "Apple";
    }

    // methods
    // operations
    // behavior
    call(phone) {
        console.log('calling...', phone, this.brand);
    }
}

var m1 = new Mobile('Black');
var m2 = new Mobile('Red');

