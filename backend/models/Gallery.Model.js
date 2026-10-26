const mongoose = require('mongoose');
 
const gallerySchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    imagesUrl: {
        type : String,
        required: true
    },
    Date: {
        type : Date,
        required: true
    },
},{
    timestamps: true,
}
);
const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;