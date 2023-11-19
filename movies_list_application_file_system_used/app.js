const express = require('express');
const movieController = require('./control/movieController');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', movieController);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
