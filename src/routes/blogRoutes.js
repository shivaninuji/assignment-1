// blogRoutes.js
const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware');

// Get all blogs endpoint
router.get('/', validationMiddleware, (req, res) => {

});

// Create new blog endpoint
router.post('/create', validationMiddleware, (req, res) => {

});

// Get specific blog by author's ID endpoint
router.get('/:authorId', validationMiddleware, (req, res) => {

});

module.exports = router;
