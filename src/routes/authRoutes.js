// authRoutes.js
const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware');

// Login endpoint
router.post('/login', validationMiddleware, (req, res) => {
  // Login logic here
  // Return appropriate responses
});

// Register endpoint
router.post('/register', validationMiddleware, (req, res) => {
  // Registration logic here
  // Return appropriate responses
});

module.exports = router;
