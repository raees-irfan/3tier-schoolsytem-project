
const e = require('express');
const Event = require('../models/Gallery.Model');
const Gallery = require('../models/Gallery.Model');

// POST request to create a new gallery
exports.createGallery = async (req, res) => {
    try {
        const { title, imagesUrl , date } = req.body;

        if (!title || !imagesUrl || !date) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newGallery = new Gallery({
            title,
            imagesUrl,
            date
        });

        await newGallery.save();

        res.status(201).json({
            message: "Gallery created successfully",
            gallery: newGallery
        });

    } catch (error) {
        console.error("Error creating gallery:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};


// GET request to retrieve all events
exports.getGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find();

        if (!gallery || gallery.length === 0) {
            return res.status(404).json({
                message: "No gallery found"
            });
        }

        res.status(200).json({
            gallery
        });

    } catch (error) {
        console.error("Error getting gallery:", error);
        return res.status(500).json({
            message: error.message
        });
    }
};


// DELETE request to delete a contact by ID
exports.deleteGallery = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedGallery = await Gallery.findByIdAndDelete(id);
        if (!deletedGallery) {
            return res.status(404).json({
                message: "Gallery not found"
            });
        }

        res.status(200).json({
            message: "Gallery deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting gallery:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};
