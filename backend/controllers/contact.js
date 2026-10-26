
const contact = require('../models/Contact.Model');

// POST request to create a new contact
exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newContact = new contact({
            name,
            email,
            phone,
            subject,
            message
        });

        await newContact.save();

        res.status(201).json({
            message: "Contact created successfully",
            contact: newContact
        });

    } catch (error) {
        console.error("Error creating contact:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};


// GET request to retrieve all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({
                message: "No contacts found"
            });
        }

        res.status(200).json({
            contacts
        });

    } catch (error) {
        console.error("Error getting contacts:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};


// DELETE request to delete a contact by ID
exports.deleteContact = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedContact = await contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting contact:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};
