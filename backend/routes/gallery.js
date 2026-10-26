const router = require('express').Router();
const express = require('express');
const {createGallery, getGallery, deleteGallery} = require("../controllers/gallery");

router.post("/",createGallery)
router.get("/",getGallery)
router.delete("/:id",deleteGallery)
//router.put("/:id",updateGallery)


module.exports = router;