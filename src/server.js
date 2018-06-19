const express = require('express');
const app = express();
const path = require("path");

const port = process.env.PORT || 4000;

app.use(express.static('public'));

//app.use('/scripts', express.static(path.join(__dirname, '/node_modules/viz.js')));
//Can't get importing of modules in node_moduels to work :(

app.listen(port, () => console.log(`Example app listening on port ${port}!`));