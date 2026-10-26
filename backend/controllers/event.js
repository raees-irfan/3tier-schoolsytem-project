
const e = require('express');
const Event = require('../models/Event.Model');

// POST request to create a new contact
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, time, location } = req.body;

        if (!title || !description || !date || !time || !location) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newEvent = new Event({
            title,
            description,
            date,
            time,
            location
        });

        await newEvent.save();

        res.status(201).json({
            message: "Event created successfully",
            event: newEvent
        });

    } catch (error) {
        console.error("Error creating event:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};


// GET request to retrieve all events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        if (!events || events.length === 0) {
            return res.status(404).json({
                message: "No events found"
            });
        }

        res.status(200).json({
            events
        });

    } catch (error) {
        console.error("Error getting events:", error);
        return res.status(500).json({
            message: error.message
        });
    }
};


// DELETE request to delete a contact by ID
exports.deleteEvent = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        res.status(200).json({
            message: "Event deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting event:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};
