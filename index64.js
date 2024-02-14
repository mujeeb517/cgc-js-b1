const m1 = {
    width: 5,
    height: 10,
};
// save it 
// transfer
// save state
// serialization, format
// deserialization
// file, db
// JSON, xml
// JS Object notation
// m1.width = 15;
// console.log(m1);

// Java
var serializedObj = JSON.stringify(m1);
console.log(serializedObj);

var obj = JSON.parse(serializedObj);
console.log(typeof obj, obj.width);
