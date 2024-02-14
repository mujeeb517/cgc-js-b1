// recursion
// base condition: exit


// 10 to 1
// 5 to 1
// 5, 4, 3, 2, 1, 0
// 1 to n
function print(n) {
    if (n === 0) return;

    print(n - 1);
    console.log(n);
}

print(3);