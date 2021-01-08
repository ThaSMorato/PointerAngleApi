const express =  require('express');
const routes = require('./routes');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(routes);

app.listen(port, () => console.log('Running'));