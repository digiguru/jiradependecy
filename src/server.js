const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use('/vendor/viz', express.static(path.join(__dirname, '../node_modules/@viz-js/viz/dist')));
app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
