// repeatedly 
// loops: for, while, do-while, for in, for of
// iteration
// print 1 to 100
// 100
// loop invariant
// init: 1
// cond: n
// inc: n
// body: n

// init
// cond
// body
// inc
// forward
// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

// print 100 to 1
// lower, upper, invariant modf
// for (var i = 100; i >= 0; i--) {
//     console.log(i);
// }

// infinite loop
// for (var i = 1; ; i++) {
//     console.log("hello");

//     if (i === 10) {
//         break;
//     }
// }

// for (var i = 1; i <= 10; i++) {
//     // skip
//     if (i <= 5) continue;

//     console.log(i);
// }


// nested loops
// 10 * 5 = 50
// m * n = m*n
for (var i = 0; i < 10; i++) {
    for (var j = 0; ; j++) {
        console.log(i, j);
        if (j === 10) break;
    }
}



