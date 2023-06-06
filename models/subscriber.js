"use strict"

const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        phone: Number,
        type: String,
        feedback: String,
    });

module.exports = mongoose.model("subscriber", subscriberSchema);