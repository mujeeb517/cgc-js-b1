var emp = {
    name: 'John',
    dept: 'HR',
    salary: 3000,
    isActive: true,
    address: {
        city: 'Hyderabad',
        state: 'TS'
    }
};

var emp2 = {};
// clone
// reflection
// shallow cloning
// deep cloning
for (var key in emp) {
    if (typeof emp[key] === 'object') {
        emp2[key] = {};
        for (var innerKey in emp[key]) {
            emp2[key][innerKey] = emp[key][innerKey];
        }
    } else
        emp2[key] = emp[key];
}

console.log(emp.address === emp2.address);