const fs = require('fs');
const inputdata = fs.readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(inputdata[0]);
const B = parseInt(inputdata[1]);

console.log(A*B);