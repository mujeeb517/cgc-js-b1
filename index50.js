// design ds
// system design
// phone book
// [192939 193838 103883838]
// list of object
// object: person's phone
var p1 = {
    firstName: 'Abc',
    lastName: 'Xyz',
    mobile: [
        { number: '+91-2828283839', type: 'Personal', primary: true },
        { number: '+91-2828283832', type: 'Home', primary: false },
        { number: '+91-2828283832', type: 'Office', primary: false },
    ],
    email: ['abc@gmail.com', 'abc@work.com'],
    address: {
        hNo: '1-123',
        city: 'Hyderabad',
        country: 'IN',
        state: 'TS',
        zip: '503199'
    }
};

// search
// add
// delete
// edit
var phoneBook = [p1];

function search(str) {
    var res = [];
    for (var i = 0; i < phoneBook.length; i++) {
        var obj = phoneBook[i];
        if (obj.firstName.indexOf(str) > -1
            || obj.lastName.indexOf(str) > -1) {
            res.push(obj);
        }
    }

    return res;
}