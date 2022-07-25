const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {
    console.log("currency sayfası ..");
    res.json({status:true});
});



module.exports = router;