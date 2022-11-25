const express = require('express');
const app = express();

app.use(express.static('views'));
app.get('/', (req, res) => {
    res.send('index.html');
})

app.listen(3000, () => {
    return console.log('App is listening on port 3000');
})