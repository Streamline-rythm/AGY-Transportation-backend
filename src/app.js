const express = require('express');
const app = express();
const cors = require('cors');
const driversRouter = require('./routes/index'); // or wherever your router is
app.use(cors());
app.use(express.json());
app.use('/api', driversRouter);  // e.g., endpoint will be /api/getAllDriversData
module.exports = app;
