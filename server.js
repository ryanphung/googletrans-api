const express = require('express');
const app = express();
var cors = require('cors');
const { translate } = require('./translate');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Welcome!'));

app.get('/translate', translate);

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`server running on port ${port}`, '');
});
