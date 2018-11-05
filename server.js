const fs = require('fs')
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('test1.json', 'utf8', function(err, contents){
        data = JSON.parse(contents)
        var i, len = data.results.length, el, j;
  
        for(i = 1; i<len; i++){
        el = data.results[i].location.coordinates.latitude;
        j = i;
    
        while(j>0 && data.results[j-1]> el){
            data.results[j] = data.results[j-1];
            j--;
        }
    
        data.results[j] = el;
        }
        //console.log(data)
        res.end(x)
    })

    
}).listen(process.env.PORT || 8080);
