var fs = require('fs');
var path = require('path');



function getFilesInDir(callback, dir, ext)
{

	fs.readdir(dir, function(err, list)
	{
		list.forEach(function(item, i, list) 
		{
        	if (path.extname(item) === "."+ext)
        	{
        		callback(item);
        	}
        });
	});
}


function performLog(filename)
{
	console.log(filename);
}

getFilesInDir(performLog, process.argv[2], process.argv[3]);
