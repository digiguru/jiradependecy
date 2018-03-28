var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/rest/api/2/', proxy({
    target: 'https://immediateco.atlassian.net', 
    changeOrigin: true
}));
app.listen(8080);
