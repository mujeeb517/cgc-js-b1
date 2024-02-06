var emp = {
    name: 'John',
    dept: 'HR',
    salary: 3000,
    isActive: true,
    address: {
        city: 'Hyderabad',
        state: 'TS',
        home: {
            hno: '1-123'
        }
    }
};

function clone(obj) {
    var res = {};

    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            res[key] = clone(obj[key]);
        } else
            res[key] = obj[key];
    }

    return res;
}


var res = clone(emp);

console.log(emp.address.home === res.address.home);