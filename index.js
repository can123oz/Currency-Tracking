const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
const CronJob = require("cron").CronJob;

mongoose.connect("mongodb://127.0.0.1/dovizcom");

app.get("/", (req,res) => {
    console.log("app is working");
    res.json({status:true});
});

app.use("/currency",require("./routes/currency"));
app.use("/dovizcom", require("./routes/dovizcom"));

let job = new CronJob("* * * * *",() => require("./Services/dovizCom").run(),null,true,"Europe/Istanbul");

app.listen(port,() => { console.log(`Server is alive at http://localhost:${port}/`)});