// electricity 
// slabs
/*
    0-50: 2
    51-100: 3
    >100: 5
*/
function calcBill(units) {
    var amount = 0;

    if (units > 100) {
        var higherSlabUnits = units - 100;
        var value = higherSlabUnits * 5;
        amount = amount + value;
        // amount += value;
        units = units - higherSlabUnits;
    }

    if (units > 50) {
        var middleSlabUnits = units - 50;
        var value = middleSlabUnits * 3;
        amount += value;
        units = units - middleSlabUnits;
    }

    if (units > 0) {
        var lowSlabUnits = units - 0;
        var value = lowSlabUnits * 2;
        amount += value;
    }

    var tax = amount * 0.05;

    return amount + tax;
}

console.log(calcBill(120));