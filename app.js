const express = require('express');
const app = express();

var port = process.env.PORT || 3000;
app.use(express.static('views'));
app.get('/', (req, res) => {
    res.send('index.html');
})

app.listen(port, () => {
    return console.log('App is listening on port 3000');
})