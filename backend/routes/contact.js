const router = require('express').Router();
const express = require('express');
const {createContact, getContacts, deleteContact} = require("../controllers/contact");

const authenticateJWT = require("../middleware.js/auth.middleware")

router.post("/",createContact)
router.get("/",authenticateJWT,getContacts)
router.delete("/:id",deleteContact)
router.put("/",(req,res)=>{})


module.exports = router;