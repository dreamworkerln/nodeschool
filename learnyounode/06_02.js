var fs = require('fs');
var path = require('path');


//var getFilesInDir = function(callback, dir, ext)
module.exports = function(dir, ext, callback)
{
	var output = [];
	fs.readdir(dir, function(err, list)
	{
		if (err)
			return callback(err); 

		list.forEach(function(item, i, list) 
		{
        	
        	if (path.extname(item) === "."+ext)
        	{
        		output.push(item);        		
        	}
        });
        callback(null, output);
	});
}

//module.exports.getFilesInDir = getFilesInDir;
