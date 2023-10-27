const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

// Endpoint pre registráciu používateľa
router.post('/api/register', controller.registerUser);

// Endpoint pre login používateľa
router.post('/api/login', controller.registerUser);


module.exports = router;