var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function (error) {
        throw error; 
    })
    
    .on('response', function (response) {
        console.log('Response Status Code: ', response.statusCode)
    })

    .pipe(fs.createWriteStream('./future.jpg'));