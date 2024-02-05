var employee = {
    name: 'John',
    dept: 'HR',
    salary: 2000,
    isActive: true,
    age: 24,
    address: {
        city: 'Hyd',
        state: 'TS',
        country: 'IN',
        hNo: '1-123',
    },
    print: function () { }
};

// for in 
//  array: reflection
// bracket notation
for (var key in employee) {
    // name
    console.log(key, employee[key]);
}


// .
// []
console.log(employee[p]);  // employee["address"]

// object
// create (literals)
// access
// reflection
// . & []