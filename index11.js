// function, objects
function calc(marks) {
    // length, slice, splice, push, pop, shift, unshift
    // aggregate    
    var marksSecured = marks[0] + marks[1] + marks[2]
        + marks[3] + marks[4] + marks[5];

    var totalMarks = marks.length * 100;
    var agg = (marksSecured / totalMarks) * 100;
    console.log(agg);
}

var m1 = [50, 50, 40, 60, 70, 100];
var m2 = [60, 50, 40, 60, 72, 100];
var m3 = [60, 50, 40, 60, 72, 100, 60, 70];

calc(m1);
calc(m2);
calc(m3);
