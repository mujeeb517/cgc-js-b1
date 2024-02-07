// inheritance
// parent or base or super
class AbsMobile {
    constructor() {
        console.log('super constructor');
    }
    call() {
        console.log('calling...');
    }

    sms() {
        console.log('sms...');
    }
}

// child or derived
class Mobile extends AbsMobile {

    constructor() {
        super();
        this.width = 5;
        this.height = 10;
        this.color = 'Black';
    }

    play() {
        console.log('playing');
    }
}

var m1 = new Mobile();
var m2 = new Mobile();
var m3 = new Mobile();
