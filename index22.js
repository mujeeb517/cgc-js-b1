// loops
// students agg
// array of numbers
function calcGrade(agg) {
    if (agg >= 70) {
        return 'Distinction';
    } else if (agg > 59 && agg < 70) {
        return 'First Class';
    }
    else if (agg > 49 && agg < 60) {
        return 'Second Class';
    }
    else if (agg > 39 && agg < 50) {
        return 'Third Class';
    }
    return 'Failed';
}

function calcAgg(marks) {
    // if you student has passed in all the subjects
    var marksSecured = 0;
    var totalMarks = marks.length * 100;
    for (var i = 0; i < marks.length; i++) {
        marksSecured = marksSecured + marks[i];
    }

    var agg = (marksSecured / totalMarks) * 100;

    return calcGrade(agg);
}

var res = calcAgg([50, 40, 50, 60, 70, 100]);
console.log(res);