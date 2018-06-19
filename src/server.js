const express = require('express');
const app = express();
const path = require("path");

app.use(express.static('public'));

//app.use('/scripts', express.static(path.join(__dirname, '/node_modules/viz.js')));
//Can't get importing of modules in node_moduels to work :(

app.listen(4000, () => console.log('Example app listening on port 4000!'));