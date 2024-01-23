function calcAgg() {

    var agg = 75;
    // grade
    // Distinction: >=70
    // First Class: >59 <=60
    // Second class: >49 <60
    // Third class >39 <50

    // if else if ladder
    if (agg >= 70) {
        console.log('Distinction');
    }
    else if (agg > 59 && agg < 70) {
        console.log('First class');
    }
    else if (agg > 49 && agg < 60) {
        console.log('Second class');
    }
    else if (agg > 39 && agg < 50) {
        console.log('Third class');
    } else {
        console.log('failed');
    }
}

calcAgg();