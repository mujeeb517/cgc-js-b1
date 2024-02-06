// literals
// blue print
// class - obj/instance
// constructor function
// 2d plan - obj

// plan
// constructor 
// void functions
// undefined
function Mobile(color) {
    this.width = 5;
    this.height = 7;
    this.color = color;

    this.print = function () {
        console.log('printing', this.width, this.height);
    }
}

var m1 = new Mobile("Red");
var m2 = new Mobile("Black");
var m3 = new Mobile("Yellow");



