const express = require('express');
const router = express.Router();

const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');

// Routes
router.post('/', protect, createEvent);        // Create event
router.get('/', getEvents);                    // Get all events
router.get('/:id', getEventById);              // Get event by ID
router.put('/:id', protect, updateEvent);      // Update event
router.delete('/:id', protect, deleteEvent);   // Delete event

module.exports = router;
