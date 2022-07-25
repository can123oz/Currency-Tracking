const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Doviz = require("../Models/dovizcom");

router.get("/:id", async (req,res) => {
    let type = req.params.id; 
});

router.get("/", async (req,res) => {
    const doviz = await Doviz.find({}, null, { sort : { _id : -1}});
    res.json({status: true, body : doviz });
});

module.exports = router;