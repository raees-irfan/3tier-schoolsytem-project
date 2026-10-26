const router = require('express').Router();
const express = require('express');
const {createContact, getContacts, deleteContact} = require("../controllers/contact");

router.post("/",createContact)
router.get("/",getContacts)
router.delete("/:id",deleteContact)
router.put("/",(req,res)=>{})


module.exports = router;