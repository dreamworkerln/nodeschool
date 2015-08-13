//console.log(process.argv);
var arg1 = process.argv[2];
var fs = require('fs');


fs.readFile(arg1);







function callback (err, data) {
	var buffer = fs.readFile(arg1);
	var str = buffer.toString('utf8');
	var splitted = str.split('\n');
	var cnt = splitted.length - 1;
	console.log(splitted);
}