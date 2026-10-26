
const Notice = require('../models/Notice.Model');
const contact = require('../models/Notice.Model');

// POST request to create a new notice
exports.createNotice = async (req, res) => {
    try {
        const { title, description ,date ,category } = req.body;

        if (!title || !description || !date || !category) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newNotice = new Notice({
            title,
            description,
            date,
            category
        });

        await newNotice.save();

        res.status(201).json({
            message: "Notice created successfully",
            notice: newNotice
        });

    } catch (error) {
        console.error("Error creating notice:", error);
        return res.status(500).json({
            message: error.message
        });
    }
};


// GET request to retrieve all notices
exports.getNotices = async (req, res) => {
    try {
        const notices = await Notice.find();

        if (!notices || notices.length === 0) {
            return res.status(404).json({
                message: "No notices found"
            });
        }

        res.status(200).json({
            notices
        });
        

    } catch (error) {
        console.error("Error getting notices:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};


// DELETE request to delete a notice by ID
exports.deleteNotice = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedNotice = await Notice.findByIdAndDelete(id);
        if (!deletedNotice) {
            return res.status(404).json({
                message: "Notice not found"
            });
        }

        res.status(200).json({
            message: "Notice deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting notice:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};
