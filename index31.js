// Objects: real world entity
// Properties & operations
// props & operations
// encapsulation
// object literals
// dictionary
// complex, scalary
// similary 
var employee = {
    marks: [10, 20, 30],
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
    print: function () {
        console.log(this.name, this.dept, this.salary);
    }
};

employee.salary = 3000;

console.log(Array.isArray(employee.marks));

