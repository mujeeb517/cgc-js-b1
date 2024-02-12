// washing machine: delay
// 1hr
// productive
// amazon
// async 
// delay: async
// credit card, handoff, 30sec
// single thread
// non blocking
// timer
// db
// ms, sec

// setTimeout(() => console.log('afte a sec'), 2000);

// setInterval(() => console.log('afte a sec'), 1000);

// entity 2
// payment gateway
function addAsync(a, b, cb) {
    console.log('execution started');

    setTimeout(function () {
        console.log('calculation started');
        a++;
        b++;
        var c = a + b;
        if (typeof cb !== 'function') throw new Error('invalid callback');
        cb(c);
        console.log('calculation finished');
    }, 2000);

    console.log('execution finished');
}


// entity 1
// amazon
function callback(res) {
    console.log(res);
}

addAsync(10, 20, callback);


