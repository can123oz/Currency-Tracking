const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    altin: {
        type: Number,
        required: false,
    },
    dolar: {
        type: Number,
        required: true,
    },
    euro: {
        type: Number,
        required:true,
    },
    sterlin: {
        type: Number,
        required: true,
    },
    bitcoin: {
        type: Number,
        required: false,
    },
});

module.exports = mongoose.model("Dovizcom", productSchema);