var fs = require('fs');
var lineNumber = undefined;


function countLinesInFile(callback, arg)
{

	//fs.readFile(arg,'utf8', function doneReading(err, data)
    fs.readFile(arg,'utf8', function (err, data)
	{
		lineNumber = data.split('\n').length - 1;
		callback();
		//console.log(lineNumber+" Ы!");
	});

}


function performLog()
{
	console.log(lineNumber);
}


countLinesInFile(performLog, process.argv[2]);
console.log(lineNumber);

/*
function callback (err, data) {
	var buffer = fs.readFile(arg1);
	var str = buffer.toString('utf8');
	var splitted = str.split('\n');
	var cnt = splitted.length - 1;
	console.log(splitted);
}
*/