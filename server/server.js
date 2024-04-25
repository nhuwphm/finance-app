const express = require("express");
const routers = require('./router');
const app = express();
const cors = require("cors");
const timeout = require('connect-timeout');

require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

const { 
    corsOptions, 
    PORT, 
    TIMEOUT,
    RATE_LIMITER
} = require('./configs/configs');

app.get('/', (req, res) => {
    res.send('hello')
})

app.use(cors(corsOptions));
app.use(timeout(TIMEOUT));

// Api routes
app.use('/api', routers);



app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
