const express = require('express');
const router = express.Router();  // <-- Call the function here
const databaseController = require('../controllers/databaseController.js');

router.get('/getAllDriversData', databaseController.getAllDriversData);
router.get('/test', databaseController.test)
module.exports = router;