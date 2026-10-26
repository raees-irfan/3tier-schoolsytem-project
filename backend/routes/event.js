const router = require('express').Router();
const express = require('express');
const {createEvent, getEvents, deleteEvent} = require("../controllers/event");

router.post("/",createEvent)
router.get("/",getEvents)
router.delete("/:id",deleteEvent)
//router.put("/:id",updateEvent)


module.exports = router;