// multiplication table upto 10
// 1 * 1 = 1
// 1 * 2 = 2
// interpolation

// for (var i = 1; i <= 20; i++) {
//     for (var j = 1; j <= 10; j++) {
//         var val = i * j;
//         console.log(i + " * " + j + " = ", val);
//     }
//     console.log();
// }

function isEven(n) {
    return n % 2 === 0;
}

// print even numbers upto n
// function printEven(n) {
//     for (var i = 1; i <= n; i++) {
//         if (isEven(i)) {
//             console.log(i);
//         }
//     }
// }

// function printEven(n) {
//     for (var i = 2; i <= n; i = i + 2) {
//         console.log(i);
//     }
// }

for (var i = 1024; i > 0; i = parseInt(i / 2)) {
    console.log(i);
}

// printEven(100);

