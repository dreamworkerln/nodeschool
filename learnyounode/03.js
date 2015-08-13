//console.log(process.argv);
var arg1 = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(arg1);
var str = buffer.toString('utf8');
var splitted = str.split('\n');
var cnt = splitted.length - 1;
console.log(splitted);