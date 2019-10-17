const express = require('express');
const path = require('path');
const open = require('open');

const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
})
