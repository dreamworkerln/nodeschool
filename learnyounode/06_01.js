var module06 = require('./06_02');


function printLog(err, list)
{
	if (err != null)
	{
		console.log("Попробуйте позже: "+err);
		return;
	}


	list.forEach(function(item, i, list) 
	{
       	console.log(item);
    });	
}

module06(process.argv[2], process.argv[3], printLog);
