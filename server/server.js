const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

app.get('/user', (req, res) => {
    res.send('hello')
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
