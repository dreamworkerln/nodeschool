var http = require('http');

function getHtml(url)
{
  var req = http.get(url, function(res){
    //console.log("Got response: " + res.statusCode);
    //console.log('STATUS: ' + res.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
    //res.setEncoding('windows-1251');
    
    res.on('data', function (chunk) {
     //console.log('BODY: ' + chunk);
     console.log(chunk);
     });

    res.on('error', function (chunk) {
     //console.log('BODY: ' + chunk);
     console.log('Error: '+chunk);
     })
     

  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });
}


getHtml(process.argv[2]); 



// --------------------------------------------------------------------------

/*
var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
*/