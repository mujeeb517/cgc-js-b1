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

// attaching
emp.prop1 = "value1";
delete emp.isActive;

console.log(emp);