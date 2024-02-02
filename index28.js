// exception handling
// compile time errors + run time errors
// exceptions
// youtube
// internet
// handle
// try - catch
// resources: db, file
// try {
//     var fn;

//     fn = function () {
//         console.log('fn');
//     }
//     fn();
// } catch (err) {
//     console.log(err.message);
// } finally {
//     console.log('cleaned up');
//     // always
//     // File.close();
// }
// function add(a, b) {
//     if (a <= 0) {
//         // raise an exception
//         throw new Error('invalid input');
//     }
//     else {
//         return a + b;
//     }
// }

// try {
//     var res = add(10, 20);
//     console.log(res);
// } catch (err) {
//     console.log(err.message)
// } 

// var x = 10;
// console.log(x);
function addAge(age) {
    if (age < 0) throw new Error('Invalid age');
    return age + 1;
}


addAge(-20);
