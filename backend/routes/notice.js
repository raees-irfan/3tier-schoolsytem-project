const router = require('express').Router();
const express = require('express');
const {createNotice, getNotices, deleteNotice} = require("../controllers/notice");

router.post("/",createNotice)
router.get("/",getNotices)
router.delete("/:id",deleteNotice)
//router.put("/:id",updateNotice)


module.exports = router;