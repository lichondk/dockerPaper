const fs = require('fs')
var express = require('express')
var app = express()


app.get('/', function(req,res) {
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
    res.send(data)
})
}) 
//insertionSort()
var port = process.env.PORT || 1337;
app.listen(port, function(){
console.log('port 1337')
})
