// authRoutes.js
const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware');

// Login endpoint
router.post('/login', validationMiddleware, (req, res) => {
 
});

// Register endpoint
router.post('/register', validationMiddleware, (req, res) => {

});

module.exports = router;
